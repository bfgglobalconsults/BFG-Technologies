'use client'

import { useCallback, useEffect, useRef } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'

export interface LogoRevealProps {
  /** Your original logo PNG (or SVG). Its alpha channel is the mask. */
  logoSrc: string
  /** The photograph revealed inside the logo. */
  photoSrc: string
  /** Natural size of the logo file. Only the ratio matters (it prevents distortion). */
  logoWidth: number
  logoHeight: number
  /** Colour of the resting logo. */
  color?: string
  /** How much larger than the logo the photo layer is (>1). Bigger = more to explore. */
  photoScale?: number
  /** Photo follow speed (higher = snappier). */
  followRate?: number
  /** Accessible name for the logo. */
  label?: string
  className?: string
}

const smoothstep = (t: number) => t * t * (3 - 2 * t)
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

export default function LogoReveal({
  logoSrc,
  photoSrc,
  logoWidth,
  logoHeight,
  color = '#ffffff',
  photoScale = 1.7,
  followRate = 7,
  label = 'Logo',
  className = '',
}: LogoRevealProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  // Animation state lives in a ref: we write straight to the DOM every frame,
  // so React never re-renders while the pointer moves.
  const s = useRef({
    x: 0.5, y: 0.5, // current photo focus (0..1 across the logo)
    tx: 0.5, ty: 0.5, // target focus
    r: 0, tr: 0, // current / target reveal amount
    revealRate: 10,
    raf: 0,
    last: 0,
    ready: false,
  })

  const reduceMotion = useRef(false)

  const apply = useCallback(() => {
    const el = photoRef.current
    if (!el) return
    const st = s.current
    const k = (photoScale - 1) / photoScale // percentage of the layer we can travel
    el.style.transform = `translate3d(${(0.5 - st.x) * k * 100}%, ${(0.5 - st.y) * k * 100}%, 0)`
    el.style.opacity = String(smoothstep(clamp01(st.r)))
  }, [photoScale])

  const tick = useCallback(
    (now: number) => {
      const st = s.current
      const dt = Math.min((now - st.last) / 1000, 0.05)
      st.last = now
      const boost = reduceMotion.current ? 6 : 1
      const kp = 1 - Math.exp(-dt * followRate * boost)
      const kr = 1 - Math.exp(-dt * st.revealRate * boost)
      st.x += (st.tx - st.x) * kp
      st.y += (st.ty - st.y) * kp
      st.r += (st.tr - st.r) * kr
      apply()
      const settled =
        Math.abs(st.tx - st.x) < 0.0004 &&
        Math.abs(st.ty - st.y) < 0.0004 &&
        Math.abs(st.tr - st.r) < 0.002
      if (settled) {
        st.x = st.tx
        st.y = st.ty
        st.r = st.tr
        apply()
        st.raf = 0
      } else {
        st.raf = requestAnimationFrame(tick)
      }
    },
    [apply, followRate],
  )

  const kick = useCallback(() => {
    const st = s.current
    if (!st.raf) {
      st.last = performance.now()
      st.raf = requestAnimationFrame(tick)
    }
  }, [tick])

  const setTargetFromEvent = (e: ReactPointerEvent<HTMLDivElement>) => {
    const rect = hostRef.current!.getBoundingClientRect()
    const st = s.current
    st.tx = clamp01((e.clientX - rect.left) / rect.width)
    st.ty = clamp01((e.clientY - rect.top) / rect.height)
  }

  const enter = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!s.current.ready) return
    const st = s.current
    setTargetFromEvent(e)
    // If the photo is fully hidden, start it right under the cursor so it
    // fades in without sweeping across from the centre.
    if (st.r < 0.02) {
      st.x = st.tx
      st.y = st.ty
    }
    st.tr = 1
    st.revealRate = 10
    kick()
  }

  const move = (e: ReactPointerEvent<HTMLDivElement>) => {
    const st = s.current
    if (st.tr !== 1) {
      enter(e) // e.g. photo finished loading while the cursor was already inside
      return
    }
    setTargetFromEvent(e)
    kick()
  }

  const leave = () => {
    const st = s.current
    st.tr = 0 // fade the photo out…
    st.tx = 0.5 // …while it eases back to its resting position
    st.ty = 0.5
    st.revealRate = 5.5
    kick()
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') {
      // Keep receiving moves if the finger slides past the edge of the logo.
      try {
        e.currentTarget.setPointerCapture(e.pointerId)
      } catch {
        /* not fatal */
      }
      enter(e)
    }
  }

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') leave()
  }

  // Preload + decode the photo so the first hover never shows a blank frame.
  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cancelled = false
    const img = new Image()
    img.src = photoSrc
    const done = () => {
      if (!cancelled) s.current.ready = true
    }
    img.decode ? img.decode().then(done, done) : (img.onload = done)
    return () => {
      cancelled = true
    }
  }, [photoSrc])

  useEffect(() => {
    apply()
    const st = s.current
    return () => cancelAnimationFrame(st.raf)
  }, [apply])

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(${logoSrc})`,
    maskImage: `url(${logoSrc})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  }

  const offset = ((photoScale - 1) / 2) * 100

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={`relative select-none ${className}`}
      style={{ aspectRatio: `${logoWidth} / ${logoHeight}`, touchAction: 'none' }}
      onPointerEnter={(e) => e.pointerType !== 'touch' && enter(e)}
      onPointerMove={move}
      onPointerLeave={leave}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={leave}
    >
      {/* Everything inside this box is clipped to the logo's exact alpha silhouette. */}
      <div className="absolute inset-0 overflow-hidden" style={maskStyle}>
        <div className="absolute inset-0" style={{ backgroundColor: color }} />
        <div
          ref={photoRef}
          className="absolute will-change-transform"
          style={{
            width: `${photoScale * 100}%`,
            height: `${photoScale * 100}%`,
            left: `-${offset}%`,
            top: `-${offset}%`,
            opacity: 0,
          }}
        >
          <img
            src={photoSrc}
            alt=""
            draggable={false}
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

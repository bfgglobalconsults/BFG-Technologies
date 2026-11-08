// Shared animation variants for consistent animations across all pages

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const slideUpLarge = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
      duration: 1.2,
    },
  },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
};

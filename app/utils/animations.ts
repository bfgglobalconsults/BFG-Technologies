// Shared animation variants for consistent animations across all pages

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideUpLarge = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.08,
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
      stiffness: 260,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

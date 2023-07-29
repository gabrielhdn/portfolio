export const switchAnimation = {
  hidden: {
    y: -30, opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    y: 30, opacity: 0,
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const arrowOpacity = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
    },
  },
};

export const popIcons = {
  visible: {
    scale: [0, 1.3, 1],
    transition: {
      duration: 0.8,
    },
  },
};

export const iconContainerAnimation = {
  visible: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
};

export const springUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 75,
      mass: 0.7,
      delay: 0.5,
      ease: 'easeIn',
    },
  },
};

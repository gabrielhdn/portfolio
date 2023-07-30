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
      delayChildren: 1.4,
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

export const slideLeft = {
  hidden: {
    x: window.innerWidth > 1000 ? -200 : -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

export const slideUp = {
  hidden: {
    y: window.innerWidth > 1000 ? 200 : 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
    },
  },
};

export const pageSlideLeft = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeInOut' },
  },
};

export const pageSlideRight = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

export const pageSlideBottom = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
  exit: {
    y: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

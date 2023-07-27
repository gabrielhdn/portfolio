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

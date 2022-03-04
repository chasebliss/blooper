export const container = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0,
      duration: 0.75,
      staggerChildren: 1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

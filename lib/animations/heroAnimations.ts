export const heroContainerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

export const heroChildrenVariant = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.3 },
      opacity: { duration: 0.01 },
    },
  },
};

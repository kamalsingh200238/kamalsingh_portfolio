export const mainLogoPolygonVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export const mainLogoTextVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.1,
    },
  },
};

export const hamburgerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const linksContainerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const linksChildrenVariant = {
  hidden: {
    y: "-100%",
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

export const resumeVariant = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      y: { duration: 0.3 },
      opacity: { duration: 0.01 },
    },
  },
};

/* Scroll */
export const scroll = {
    hidden: {y: -20},
    show : {
        y: 0,
        transition: {
            ease: "linear",
            duration: 1,
            type: "tween",
        },
    },
};

/* Movimento X */
export const aniX = {
    hidden: { x: 50 },
    show: {
      x: 0,
      transition: {
        ease: "linear",
        duration: 2,
        type: "tween",
      },
    },
  };

  export const aniY = {
    hidden: { y: 20 },
    show: {
      y: 0,
      transition: {
        ease: "linear",
        duration: 1,
        type: "tween",
      },
    },
  };
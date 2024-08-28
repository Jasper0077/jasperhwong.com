export interface IMotionIn {
  direction: string;
  type: string;
  delay: number;
  duration: number;
}

export interface IFadeIn extends IMotionIn {}
export interface ISlideIn extends IMotionIn {}

export interface IZoomIn {
  delay: number;
  duration: number;
}

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay
      }
    }
  };
};

export const fadeIn = ({ direction, type, delay, duration }: IFadeIn) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};

export const zoomIn = ({ delay, duration }: IZoomIn) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};

export const slideIn = ({ direction, type, delay, duration }: ISlideIn) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0,
        delayChildren: delayChildren || 0
      }
    }
  };
};

import { cva } from "class-variance-authority";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import cn from "classnames";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  label?: string;
  text?: string;
  className?: string;
}

export const headingStyles = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-semibold",
      h6: "text-lg"
    }
  },
  defaultVariants: {
    variant: "h1"
  }
});

/**
 * Credit To:
 * https://www.josephcollicoat.com/articles/animating-text-with-the-intersection-observer-api-and-framer-motion
 */
const AnimatedHeading = ({ variant, label, text, className }: Props) => {
  const Tag = variant || "h1";
  const controls = useAnimation();
  const { ref, inView: isInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (!isInView) {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const animation = {
    hidden: {
      opacity: 0,
      y: "0.25em"
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <Tag
      aria-label={label || "animated heading"}
      ref={ref}
      className={cn(headingStyles({ variant }), className)}
    >
      {text?.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={word + index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: {}
            }}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05
            }}
            className="inline-block mr-2 whitespace-nowrap"
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={animation}
                  className="-mr-0.25 inline-block"
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default React.memo(AnimatedHeading);

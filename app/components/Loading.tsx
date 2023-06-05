import { Transition, motion } from "framer-motion";

export default function Loading() {
  const initialX = {
    y: 0,
    color: "#FFFFFF",
  };

  const animateX = {
    y: 100,
    color: "#A020F0",
  };

  const initialY = {
    y: 0,
    color: "#A020F0",
  };

  const animateY = {
    y: -100,
    color: "#FFFFFF",
  };

  const transition: Transition = {
    repeat: Infinity,
    delay: 1,
    duration: 2,
    repeatType: "reverse",
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        H
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        A
      </motion.h1>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        R
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        R
      </motion.h1>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        I
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        E
      </motion.h1>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        T
      </motion.h1>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        T
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        U
      </motion.h1>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        B
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        M
      </motion.h1>
      <motion.h1 initial={initialX} animate={animateX} transition={transition}>
        A
      </motion.h1>
      <motion.h1 initial={initialY} animate={animateY} transition={transition}>
        M
      </motion.h1>
    </div>
  );
}

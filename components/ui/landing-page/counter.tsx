"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

const animation: Variants = {
  hidden: (direction: -1 | 1) => ({
    y: direction === 1 ? 30 : -30,
    opacity: 0,
    filter: "blur(4px)",
  }),
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: -1 | 1) => ({
    y: direction === 1 ? -30 : 30,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

const Counter = () => {
  const [num, setNum] = useState(0);
  const [direction, setDirection] = useState(1);

  const [scope, animate] = useAnimate();

  const handleShake = () => {
    animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
  };

  const counter = (action: "decrease" | "increase") => {
    if (action === "decrease") {
      if (num === 0) return handleShake();
      setNum(num - 1);
      setDirection(-1);
    } else if (action === "increase") {
      if (num === 20) return handleShake();
      setNum(num + 1);
      setDirection(1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0], // Bounce up and down
      }}
      transition={{
        delay: 0.4,
        y: {
          duration: 5,
          repeat: Infinity, // Infinite bouncing
          ease: "easeInOut", // Smooth back and forth
        },
      }}
      className="flex flex-col w-[200px] items-center justify-center gap-3 bg-gradient-to-r from-purple-500/80 to-blue-500/80 rounded-full absolute top-[200px] left-[20%]"
    >
      <div
        ref={scope}
        className="flex items-center justify-center gap-3 text-3xl"
      >
        <button
          onClick={() => counter("decrease")}
          className={cn(
            "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
            num === 0 && "opacity-50"
          )}
        >
          <Minus />
        </button>
        <h3 className="w-12 text-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            {num
              .toString()
              .split("")
              .map((value, index) => (
                <motion.span
                  key={`${value} ${index}`}
                  variants={animation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                  className="inline-block "
                >
                  {value}
                </motion.span>
              ))}
          </AnimatePresence>
        </h3>
        <button
          onClick={() => counter("increase")}
          className={cn(
            "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
            num === 20 && "opacity-50"
          )}
        >
          <Plus />
        </button>
      </div>
    </motion.div>
  );
};

export default Counter;

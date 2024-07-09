'use client'
import { useRef, useState } from "react";
import { ArrowDownIcon } from "@/components/Icons";
import { motion } from "framer-motion";

const Content = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const variantsDropDown = {
    open: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        restDelta: 2,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="relative sm:block hidden z-50"
    >
      <motion.button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex justify-between items-center gap-2 font-semibold h-full hover:text-[#1668e3]"
      >
        <span className="text-xs">Shop travel</span>
        <ArrowDownIcon />
      </motion.button>
      <motion.div
        variants={variantsDropDown}
        className="w-[300px] h-auto rounded-lg drop-shadow-lg shadow-lg absolute border top-10 bg-white  flex-col"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Content;

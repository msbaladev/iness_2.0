import React from "react";
import { VscTools } from "react-icons/vsc";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Lists({ id, title, icon }) {
  return (
    <div>
      <motion.div
        // variants={container}
        viewport={{ once: true }}
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        animate="visible"
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="flex items-center bg-white p-2 rounded-lg w-96 card_backdrop text-white "
      >
        <div className="bg-white shadow-2xl w-20 h-20 rounded-full flex justify-center items-center">
          {icon}
        </div>

        <h2 className="ml-4">{title}</h2>
      </motion.div>
    </div>
  );
}

export default Lists;

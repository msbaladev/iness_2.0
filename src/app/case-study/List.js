import React from "react";
import { motion } from "framer-motion";

export default function CaseStudyList({
  title,
  id,
  challenge,
  proposal,
  benefits,
}) {
  return (
    <>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-white w-4/5 overflow-y-scroll h-[500px]"
        key={id}
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h3 className="text-lg font-semibold">Customer Challenges</h3>
          <p className="text-xs ">{challenge}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mt-2">Our Proposal</h3>
          <p className="text-xs ">{proposal}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold mt-2">Customer Benefits</h3>
          <p className="text-xs ">{benefits}</p>
        </div>
      </motion.div>
    </>
  );
}
 
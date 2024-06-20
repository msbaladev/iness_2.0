"use client";

import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";

import { motion } from "framer-motion";
export default function ServiceList({
  title,
  id,
  one,
  two,
  three,
  four,
  five,
  url,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        // transition={{ duration: 0.3, delay: id * 0.5 }}
        viewport={{ once: true }}
        className=" shadow-lg rounded-lg   p-2  w-[500px]     bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 "
        key={id}
      >
        <div className="grid grid-cols-1 h-[300px]">
          <div className="">
            <h1 className="font-bold text-xl ml-2 mt-6">{title}</h1>

            {/* <div>
              <img src={url} className="w-28 h-28 rounded-full" alt="service"/>
            </div> */}
          </div>
          <div className="">
            <div className="flex flex-col space-y-2  h-full">
              <h6 className=" text- flex ">
                {" "}
                <span>
                <TfiHandPointRight size={20} className="mr-2 ml-2" />
                </span>{" "}
                {one}
              </h6>
              <h6 className=" text-sm flex ">
                {" "}
                <span>
                <TfiHandPointRight size={20} className="mr-2 ml-2" />
                </span>{" "}
                {two}
              </h6>
              <h6 className=" text-sm flex ">
                {" "}
                <span>
                <TfiHandPointRight size={20} className="mr-2 ml-2" />
                </span>{" "}
                {three}
              </h6>
              <h6 className=" text-sm flex ">
                {" "}
                <span>
                <TfiHandPointRight size={20} className="mr-2 ml-2" />
          
                </span>{" "}
                {four}
              </h6>

              <h6 className="  flex ">
                {" "}
                <span>
                <TfiHandPointRight size={20} className="mr-2 ml-2" />
                </span>{" "}
                {five}
              </h6>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
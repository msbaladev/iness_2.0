
"use client";

import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";

import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";
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
      <div className="shadow-sm  h-72 flex flex-col justify-evenly rounded-xl space-x-4  ">
        <img src={url} className="w-20 h-20 ml-4 bg-gray-200 rounded-full object-contain" />
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p className="w-4/5">
        Component Engg Technology Want us to email  you with the latest blockbuster news?
        </p>

        <h3 className="flex items-center text-blue-500 cursor-pointer hover:text-blue-800  ">Read more <span className="ml-2"><IoArrowForwardOutline /></span></h3>
      
       </div>
    </>
  );
}

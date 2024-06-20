"use client";

// import AccordionUsage from "@/components/Business_services";

import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import AccordionUsage from "./CaseStudyList";
import { IoArrowForwardOutline } from "react-icons/io5";

const CaseStudy = () => {
  return (
    <div className=" bg card_backdrop">
      <h5 className="font-medium text-3xl p-4 flex  ">
          <span className="mr-5">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          Case Study
        </h5>

      <div className=" flex justify-center items-center min-h-screen gap-4 p-2 ">
        <div className="w-3/4">
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

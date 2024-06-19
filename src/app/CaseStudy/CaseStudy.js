"use client";

// import AccordionUsage from "@/components/Business_services";

import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import AccordionUsage from "./CaseStudyList";
import { IoArrowForwardOutline } from "react-icons/io5";

const CaseStudy = () => {
  return (
    <div className=" bg-gradient-to-r from-fuchsia-600 to-indigo-300">
      <section className="min-h-screen relative ">
        <h5 className="font-medium text-3xl p-4 flex ">
          <span className="mr-5">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          Case Study
        </h5>
        <div className=" flex flex-col gap-2  min-h-screen  justify-center items-center">
          <div className="w-3/4">
            <AccordionUsage />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

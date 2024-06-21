"use client";

// import AccordionUsage from "@/components/Business_services";

import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import AccordionUsage from "./CaseStudyList";
import { IoArrowForwardOutline } from "react-icons/io5";

const CaseStudy = () => {
  return (
    <div className="min-h-screen relative">
      <h5 className="font-bold text absolute  text-3xl p-4 flex">
        <span className="mr-5">
          {" "}
          <IoArrowForwardOutline />{" "}
        </span>
        CaseStudy
      </h5>
      <div className=" grid grid-cols-2 place-content-center place-items-center h-screen ">
        <div>
          <img
            class=" w-96 h-[500px] rounded-t-full object-cover"
            src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"
            alt="Profile Image"
          />
        </div>

        <div className="space-y-4">
          <h1>MULTIPLATFORM</h1>
          <h1 className="text-4xl font-bold"> Hive brings all your video platforms together</h1>
          <h6 className="text-xl">
            Put an end to disconnected communication tools.<br /> Hive supports the
            use of multiple video platforms, simultaneously.
          </h6>

          <button className="bg-green-600 py-2 px-6 rounded-lg">case study</button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

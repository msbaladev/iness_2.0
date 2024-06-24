"use client";

// import AccordionUsage from "@/components/Business_services";

import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import AccordionUsage from "./CaseStudyList";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const CaseStudy = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen relative lg:bg-red-700">
      <h5 className="font-bold text absolute  text-3xl p-4 flex">
        <span className="mr-5">
          {" "}
          <IoArrowForwardOutline />{" "}
        </span>
        CaseStudy
      </h5>
      <div className=" grid grid-cols-2 place-content-center place-items-center min-h-screen md:grid-cols-1 sm:grid-cols-1 ">
        <div>
          <img
            class=" xl:w-96 xl:h-[500px] lg:h-[400px] lg:w-80 rounded-t-full object-cover w-52 h-52"
            src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"
            alt="Profile Image"
          />
        </div>

        <div className="space-y-4 sm:mt-2 sm:text-center md:text-center">
          <h1 className="text-green-500">MULTIPLATFORM</h1>
          <h1 className="xl:text-6xl lg:text-2xl font-bold text-xl">
            {" "}
            Hive brings all your video platforms together
          </h1>
          <h6 className="text-xl lg:text-sm sm:text-sm">
            Put an end to disconnected communication tools.
            <br /> Hive supports the use of multiple video platforms,
            simultaneously.
          </h6>

          <div className="sm:flex md:flex  justify-center">
          <h3
            onClick={() => router.push("case-study")}
            className="flex items-center text-blue-500 cursor-pointer hover:text-blue-800  "
          >
            Read more{" "}
            <span className="ml-2">
              <IoArrowForwardOutline />
            </span>
          </h3>
          </div>
      

          {/* 
          <button
            onClick={() => router.push("case-study")}
            className="bg-green-600 py-2 px-6 rounded-lg"
          >
            case study
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

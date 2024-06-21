"use client";

import React from "react";

import { RiDoubleQuotesL } from "react-icons/ri";

import { GiBullseye } from "react-icons/gi";
import List from "./List";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Management() {
  const data = [
    {
      id: 1,
      title: "Capabilities of Commodity Management Tool",
      first_line: "BOM Scrub activity.",
    },
    {
      id: 2,
      title: "PCN & EOL Management",
      first_line:
        "Categorize the PCN to Design change and Process change for the action plan.",
    },
    {
      id: 3,
      title: "BOM Risk Management",
    },
    {
      id: 4,
      title: "Integrated Quality Management System (IQuMS)",
    },
    {
      id: 5,
      title: "Claims Management",
    },
  ];
  return (
    <div className="min-h-screen  flex flex-col justify-evenly  bg_for_management ">
      <div className="">
        <h1 className="text-center font-bold text-4xl">Our Management</h1>
      </div>

      <div className=" flex justify-center">
        <List />
      </div>
    </div>
  );
}

export default Management;

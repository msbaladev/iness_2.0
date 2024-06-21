"use client";

import React from "react";

import { RiDoubleQuotesL } from "react-icons/ri";

import { GiBullseye } from "react-icons/gi";
import List from "./List";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoArrowForwardOutline } from "react-icons/io5";

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
    <div className="min-h-screen  flex flex-col justify-evenly  relative ">
      <div className="">
        <h1 className="text-start font-bold text-4xl flex">
          {" "}
          <span className="mr-5 ">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          Our Management
        </h1>
      </div>

      <div className=" flex justify-center">
        <section className="flex items-center  sm:flex-col md:flex-col lg:flex-col ">
          <div>
            <img
              src="https://img.freepik.com/free-vector/share-business-dividend-calculation-percentage-ratio-contribution-size-deposit-amount-accounting-audit-shareholders-cartoon-characters_335657-1217.jpg"
              className="h-96 rounded-full"
              alt="service"
            />
          </div>
          <div className="cursor-pointer">
            <List />
            {/* <div className="p-6 flex flex-col justify-evenly ">
              <div>
              
                <RiDoubleQuotesL size={70} />
              </div>
              <h1 className="text-4xl font-bold ml-6">BOM risk Management</h1>
              <div className="my-auto mt-12 ml-6">
                <div className="flex flex-col  space-y-4 h-full">
                  <h6 className=" text- flex ">
                    {" "}
                    <span>
                      <GiBullseye size={20} className="mr-2 ml-2" />
                    </span>{" "}
                    Single Tool to handle multiple stakeholders like Commodity
                    Managers, Management, Contract Manufacturer, Suppliers &
                    Distributors.
                  </h6>
                  <h6 className="  flex ">
                    {" "}
                    <span>
                      <GiBullseye size={20} className="mr-2 ml-2" />
                    </span>{" "}
                    Adherence to Quality processes – Checklists, Test/debug
                    report validation.
                  </h6>
                  <h6 className="  flex ">
                    {" "}
                    <span>
                      <GiBullseye size={20} className="mr-2 ml-2" />
                    </span>{" "}
                    Break down the BOM to High, Medium, Low Risk & Potential
                    risk.
                  </h6>
                  <h6 className="  flex ">
                    {" "}
                    <span>
                      <GiBullseye size={20} className="mr-2 ml-2" />
                    </span>{" "}
                    Single Platform to manage various types of Manufacturer
                    claims (Reval, Freight & PPV) with multiple stakeholders
                    secured login options.
                  </h6>

                  <h6 className="  flex ">
                    {" "}
                    <span>
                      <GiBullseye size={20} className="mr-2 ml-2" />
                    </span>{" "}
                    Single Platform to manage various types of Manufacturer
                    claims (Reval, Freight & PPV) with multiple stakeholders
                    secured login options.
                  </h6>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      {/* <div className="absolute top-0 -z-10 w-full h-screen">
        <img
          src="https://img.freepik.com/premium-photo/business-people-meeting-discussion-plans-young-men-work-working-office-concept-modern-office_116317-4112.jpg"
          className="h-full w-full"
        />
      </div> */}
    </div>
  );
}

export default Management;

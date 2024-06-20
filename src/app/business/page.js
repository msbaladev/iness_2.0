"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Header } from "../Navbar/Header";
import Service from "../Services/Service";
import BusinessList from "./BusinessList";
import { GrAchievement } from "react-icons/gr";
import { MdMiscellaneousServices } from "react-icons/md";
import { TfiBarChart } from "react-icons/tfi";

function Objective() {
  const [data_id, setdata_id] = useState(1);

  useEffect(() => {}, [data_id]);
  const data = [
    {
      id: 1,
      title: "Client Challenges",
      icon:<GrAchievement  size={50}/>,
      one: "Limited Process Optimization with High Level of Manual Effort",
      two: "Lower Operational Visibility and SLA Challenges",
      three:
        "Inefficient coordination across Hardware & Software Development Teams",
      four: "Higher Cycle-time for any change management related to Quality/Delivery/Cost",
      five: "Manual Intense Processes and Excel Spreadsheet Based Data Analysis",
    },
    {
      id: 2,
      title: "Key Solutions & Services",
      icon:<MdMiscellaneousServices size={50} />,
      one: "Digital Transformation : Business Process Consulting/Optimization & Automation Solutions",
      two: "Spend Optimization : Direct Material Procurement Solutions & Tail Spend Management",
      three:
        "Product Data Operations : Item/BOM/Change/Compliance/Risk Management",
      four: "E2E Quality : Closed Loop Quality Event Management",
      five: "Software Supplychain : Inbound and Outbound Software Component License/Royalty Management",
    },

    {
      id: 3,
      title: "Business Benefits",
      icon:<TfiBarChart size={50} />,
      one: "Improved Process Efficiency and Reduced Operational Cost",
      two: "Improved Data Accuracy/Quality and Reduced Cycle Times",
      three: "End-to-End Visibility of the Targeted Process",
      four: "Continuous Improvement Through Process Optimization and Digitization",
      five: "Enables Core, Internal Talent to Focus on More Strategic Initiatives",
    },
  ];

  return (
    <div className="">
      <div className="solutions_bg h-96">
        <Header />

        <section className="flex justify-evenly items-center h-72 ">
          <div className="text-white space-y-4">
            <h1 className="font-bold text-6xl">Our Business Objective</h1>

            <p className="text-center">
              Enable our strategic customers to focus on product technology
              innovations <br /> and NPI, and allow them to align their Core,
            </p>
          </div>

          {/* <div>
            <Image
              src="https://i.ibb.co/FYX8jgD/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-comp.png"
              width={300}
              height={300}
            />
          </div> */}
        </section>
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 place-items-center p-2 ">
        <div className="">
          <Image
            src="https://img.freepik.com/free-vector/hand-drawn-business-strategy_23-2149164272.jpg"
            width={500}
            height={400}
          />
        </div>
        <div className="my-auto">
          <p className="leading-7 text-base">
            Enable our strategic customers to focus on product technology
            innovations and NPI, and allow them to align their Core, internal
            resources to their high value-add next-generation product
            development and strategic initiatives, instead of utilizing their
            internal resources to “Run the Business” which can be performed by
            Context resources.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg p-3">
        <div className=" grid grid-cols-2 sm:grid-cols-1  place-content-center place-items-center gap-2  min-h-screen  justify-center items-center  sm:flex  sm:flex-col-reverse md:flex md:flex-col-reverse " >
          <div>
            <BusinessList
              id={data[data_id - 1].id}
              title={data[data_id - 1].title}
              icon={data[data_id - 1].icon}
              one={data[data_id - 1].one}
              two={data[data_id - 1].two}
              three={data[data_id - 1].three}
              four={data[data_id - 1].four}
              five={data[data_id - 1].five}
            />
          </div>

          <div className=" grid gap-4 mr-2">
            {data.map(({ id, title }) => (
              <div
                key={id}
                onClick={() => setdata_id(id)}
                className="p-4  cursor-pointer text-start flex justify-evenly items-center h-20 w-80 font-bold rounded-lg card_backdrop   border-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
              >
                <div className="flex flex-col justify-center  h-full ">
                 

                  {title}
                </div>

                {/* <img src={url} className="w-16 h-16 rounded-full"  /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Objective;

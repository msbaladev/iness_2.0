"use client";
import React, { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import ServiceList from "./ServiceList";

function Service() {
  const [data_id, setdata_id] = useState(1);

  useEffect(() => {}, [data_id]);

  const data = [
    {
      id: 1,
      title: (
        <h1>
          Planning and Inventory <br /> Management{" "}
        </h1>
      ),
      one: "Inventory Audit (Physical & Virtual)  ",
      two: "Segmentation / Classifications",
      three: "Min/Max Model ",
      four: "Optimize inventory carrying cost ",
      five: "Returnable Merchandise Analysis stock ",
      url: "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg",
    },

    {
      id: 2,
      title: (
        <h1>
          Product Engineering <br /> Services
        </h1>
      ),
      one: " Component Engg Technology   ",
      two: "Environmental Compliance ",
      three: " HW/SW Design  ",
      four: "PCB Design & SI Analysis  ",
      five: " DFx & Yield Improvement ",
      url: "https://img.freepik.com/free-vector/software-engineer-concept-illustration_114360-3365.jpg",
    },

    {
      id: 3,
      title: (
        <h1>
          Commodity/Supplier <br /> Management
        </h1>
      ),
      one: "  Global / Regional Request for Quote Management ",
      two: "Quoting process",
      three: " Cost Hole Management ",
      four: " Price Negotiation ",
      five: " Price increase / decrease analysis ",
      url: "https://img.freepik.com/free-vector/designers-working-internet-store-website_1262-19238.jpg",
    },

    {
      id: 4,
      title: (
        <h1>
          Software Supply <br /> Chain
        </h1>
      ),
      one: " SW Supplier Qualification ",
      two: " Compliance (Open Source,Royalty & Agreements)",
      three: " Field Quality - Customer Quality Issues ",
      four: " Software PDM  ",
      five: "SW License Management  ",
      url: "https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-illustration_335657-4907.jpg",
    },
    {
      id: 5,
      title: (
        <h1>
          Product Data (BOM) <br /> Management
        </h1>
      ),
      one: " BOM Structuring / BOM Risk Analysis ",
      two: " Engineering Change Management",
      three: "M&A Product Data Integration ",
      four: "Obsolescence Management",
      five: "EOL & Process Management ",
      url: "https://img.freepik.com/free-vector/share-business-dividend-calculation-percentage-ratio-contribution-size-deposit-amount-accounting-audit-shareholders-cartoon-characters_335657-1217.jpg",
    },
    {
      id: 6,
      title: (
        <h1>
          Product Engineering <br /> Services
        </h1>
      ),
      one: " Component Engg Technology   ",
      two: "Environmental Compliance ",
      three: " HW/SW Design  ",
      four: "PCB Design & SI Analysis  ",
      five: " DFx & Yield Improvement ",
      url: "https://img.freepik.com/free-vector/software-engineer-concept-illustration_114360-3365.jpg",
    },
  ];

  return (
    <div className="solutions_bg min-h-screen relative ">
      {/* <div className="">
        <h1 className="text-center text-xl font-bold p-2 ">Solutions</h1>

      </div> */}

     
<h5 className="font-medium text-3xl p-4 flex tracking-wider space-y-12">
          <span className="mr-5">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          Solutions & Services
        </h5>
      


        {/* <div className="  min-h-screen "> */}
        {/* <img  src="https://inesssolutions.com/newmenu/inesslogo.png" className=" w-52 h-52 absolute bottom-60 left-52 lg:hidden "/> */}
{/* 
      </div> */}


      <div className="xl:grid xl:grid-cols-2 sm:grid-cols-1  place-content-center min-h-screen place-items-center">
        <div className="lg:hidden sm:hidden  md:hidden">
          <ServiceList
            id={data[data_id - 1].id}
            title={data[data_id - 1].title}
            url={data[data_id - 1].url}
            one={data[data_id - 1].one}
            two={data[data_id - 1].two}
            three={data[data_id - 1].three}
            four={data[data_id - 1].four}
            five={data[data_id - 1].five}
          />
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-1 place-content-center place-items-center min-h-screen w-full gap-4 mr-2 p-2 ">
          {data.map(({ id, title,url }) => (
            <div
              key={id}
                onClick={() => setdata_id(id)}
              className="p-4  cursor-pointer text-start flex justify-evenly items-center h-28 sm:h-20 w-80 lg:w-64 font-bold rounded-lg bg-white  border-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              <h1 className="flex flex-col justify-center  h-full ">
                {" "}
                {title}
              </h1>

              <img src={url} className="w-16 h-16 rounded-full lg:hidden"  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

"use client";
import React, { useState } from "react";
import { VscTools } from "react-icons/vsc";
import Lists from "./Lists";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { VscGitPullRequestDraft } from "react-icons/vsc";
import { FiThumbsUp } from "react-icons/fi";
import { TiGroup } from "react-icons/ti";
import { MdOutlineGroups } from "react-icons/md";
import { TbDatabaseCog } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbSettingsExclamation } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { MdOutlineInventory } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { SiOpensourceinitiative } from "react-icons/si";
import { RiPieChart2Fill } from "react-icons/ri";
import { TbArrowsLeftRight } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


import { motion } from "framer-motion";




const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Solutions() {
  const [count, setcount] = useState(9);
  const [showMore, setShowMore] = useState(true);

  const feeds = [
    {
      id: 1,
      title: (
        <p>
          Supplier Product Change <br /> Notification (PCN)
        </p>
      ),
      icon: <HiArrowsPointingOut color="blue" size={30} />,
    },
    {
      id: 2,
      title: "Part Number Request (PNR)",
      icon: <VscGitPullRequestDraft color="blue" size={30} />,
    },
    {
      id: 3,
      title: (
        <p>
          Environmental Compliance <br /> Management
        </p>
      ),
      icon: <VscTools color="blue" size={30} />,
    },
    {
      id: 4,
      title: (
        <p>
          Quality Management <br /> System (iQuMS)
        </p>
      ),
      icon: <FiThumbsUp color="blue" size={30} />,
    },

    {
      id: 5,
      title: <p>RMA/FA Management</p>,
      icon: <MdOutlineGroups color="blue" size={40} />,
    },
    {
      id: 6,
      title: <p>Factory Data Management</p>,
      icon: <TbDatabaseCog color="blue" size={30} />,
    },

    {
      id: 7,
      title: <p>Commodity/Quote Management</p>,
      icon: <BsGraphUpArrow color="blue" size={30} />,
    },

    {
      id: 8,
      title: <p>Supplier Risk Management</p>,
      icon: <TbSettingsExclamation color="blue" size={30} />,
    },

    {
      id: 9,
      title: (
        <p>
          Component/ Product <br /> Lifecycle Management
        </p>
      ),
      icon: <GiCycle color="blue" size={30} />,
    },

    {
      id: 10,
      title: (
        <p>
          Component Inventory <br /> Management
        </p>
      ),
      icon: <MdOutlineInventory color="blue" size={30} />,
    },

    {
      id: 11,
      title: <p>Engineering Change Management</p>,
      icon: <MdEngineering color="blue" size={30} />,
    },

    {
      id: 12,
      title: (
        <p>
          3rd Party/ Open Source <br /> Software Management
        </p>
      ),
      icon: <SiOpensourceinitiative color="blue" size={30} />,
    },

    {
      id: 13,
      title: <p>Product Data Management</p>,
      icon: <RiPieChart2Fill color="blue" size={30} />,
    },

    {
      id: 14,
      title: <p>Conflict Minerals Management</p>,
      icon: <TbArrowsLeftRight color="blue" size={30} />,
    },
  ];

  const add_more = () => {
    setcount(count + 5);
    setShowMore(false);
  };

  return (
    <div className="relative min-h-screen bg-[#002233] text-white space-y-4 flex flex-col justify-evenly  ">
      <div className="">
        {/* <h1 className="text-center text-xl font-bold p-2 ">Solutions</h1> */}

        <h5 className="font-medium text-3xl p-4 flex ml-4">
          <span className="mr-5">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          SLATE-Strategic Link Alignment Topology
          <br />
          Enablement
        </h5>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center place-content-center p-2 gap-3">
        {feeds.slice(0, count).map((item) => {
          return (
            <div className="" key={item.id}>
              <Lists id={item.id} title={item.title} icon={item.icon} />
            </div>
          );
        })}
      </div>
      {showMore && (
        <div className="flex justify-center ">
          <div
            className="animate-bounce cursor-pointer shadow-2xl w-20 h-20 rounded-full flex justify-center items-center"
            onClick={add_more}
          >
            <MdOutlineKeyboardDoubleArrowDown color="white" size={30} />
          </div>
        </div>
      )}


{/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_large.mp4" />
        </video>


        <img src="https://img.freepik.com/premium-photo/cropped-shot-three-young-businessmpeople-working-together-laptop-their-office-late-night_1029469-90351.jpg" className="w-full"/>
      </div> */}


    </div>
  );
}

export default Solutions;

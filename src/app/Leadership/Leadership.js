"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";
export default function Leadership() {
  const Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      <section className=" min-h-screen bg-[#002233]">
        <h5 className="font-medium text-3xl flex items-center py-4   ml-4 text-white  top-4">
          <span className="mr-5 ">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          InESS Leadership Team
        </h5>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-2 sm:p-4 min-h-screen place-content-center place-items-center  ">
          <motion.div
            // className="card-container"
            initial={{ scale: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              // ease: [0, 0.71, 0.2, 1.01],
            }}
            // viewport={{ once: true, amount: 0.8 }}
            className="relative flex flex-col   card_backdrop shadow-md bg-clip-border rounded-xl w-96 text-white mt-6"
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 rounded-xl shadow-lg bg-clip-border ">
              <img
                src="https://img.freepik.com/premium-photo/sitting-desk-with-computer-writing-code_933496-57633.jpg"
                alt="profile-picture"
                className=""
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Natalie Paisley
              </h4>
              <p className="block font-sans  text-base antialiased font-medium leading-relaxed text-white">
                CEO / Co-Founder
              </p>
            </div>
            <div className="ml-4 p-2">
              <p>
                24+ years of Computer Industry experience in business
                management. Initially, performed electronics hardware & PCB
                design for the Telecom and High-tech Industries{" "}
              </p>
            </div>

            <div className="flex justify-evenly p-2">
              <SocialIcon url="https://linkedin.com/in/couetilc" />
              <SocialIcon url="https://twitter.com" />
              <SocialIcon url="https://mail.google.com" />
            </div>
          </motion.div>

          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mt-6">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  shadow-lg bg-clip-border ">
              <img
                src="https://img.freepik.com/premium-photo/sitting-desk-with-computer-writing-code_933496-57633.jpg"
                alt="profile-picture"
                className="rounded-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Natalie Paisley
              </h4>
              <p className="block font-sans text-black text-base antialiased font-medium leading-relaxed ">
                CEO / Co-Founder
              </p>
            </div>
            <div className="ml-4 p-2">
              <p>
                24+ years of Computer Industry experience in business
                management. Initially, performed electronics hardware & PCB
                design for the Telecom and High-tech Industries{" "}
              </p>
            </div>

            <div className="flex justify-evenly p-2">
              <SocialIcon url="https://linkedin.com/in/couetilc" />
              <SocialIcon url="https://twitter.com" />
              <SocialIcon url="https://mail.google.com" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

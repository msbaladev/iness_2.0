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
      <section className=" min-h-screen ">
        <h5 className="font-bold text-3xl flex items-center py-4   ml-4 text-  top-4">
          <span className="mr-5 ">
            {" "}
            <IoArrowForwardOutline />{" "}
          </span>
          InESS Leadership Team
        </h5>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-2 sm:p-4 min-h-screen place-content-center place-items-center    ">
          <div class="flex items-center justify-evenly min-h-screen">
            <div class=" p-8 w-4/5 h-[600px] rounded-lg shadow-lg  flex flex-col justify-evenly relative  ">
              <div class=" flex justify-center">
                <img
                  class="w-60 h-60 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"
                  alt="Profile Image"
                />
              </div>
              <div class="flex justify-center space-x-4 absolute mx-auto right-1 -mt-12 w-full">
                <SocialIcon
                  url="https://linkedin.com"
                  style={{}}
                  bgColor="green"
                />
                <SocialIcon url="https://x.com" />
                <SocialIcon url="https://instagram.com" />
              </div>
              <div className="flex justify-center ">
                <h2 class="text-lg font-semibold mt-8 text-center w-96">
                  Preparing For Your Success, We Provide Truly Prominent IT
                  Solutions.
                </h2>
              </div>
              <div className="flex justify-center p-2">
                <p class="w-full sm:w-full md:w-full text-center text-sm sm:text-xs md:text-xs">
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              {/* <div>
                <button class="bg-yellow-500 text-white px-4 py-2 rounded-full">
                  READ MORE
                </button>
              </div> */}
            </div>
          </div>


          <div class="flex items-center justify-evenly min-h-screen">
            <div class=" p-8 w-4/5 h-[600px] rounded-lg shadow-lg  flex flex-col justify-evenly relative  ">
              <div class=" flex justify-center">
                <img
                  class="w-60 h-60 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"
                  alt="Profile Image"
                />
              </div>
              <div class="flex justify-center space-x-4 absolute mx-auto right-1 -mt-12 w-full">
                <SocialIcon
                  url="https://linkedin.com"
                  style={{}}
                  bgColor="green"
                />
                <SocialIcon url="https://x.com" />
                <SocialIcon url="https://instagram.com" />
              </div>
              <div className="flex justify-center ">
                <h2 class="text-lg font-semibold mt-8 text-center w-96">
                  Preparing For Your Success, We Provide Truly Prominent IT
                  Solutions.
                </h2>
              </div>
              <div className="flex justify-center p-2">
                <p class="w-full sm:w-full md:w-full text-center text-sm sm:text-xs md:text-xs">
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              {/* <div>
                <button class="bg-yellow-500 text-white px-4 py-2 rounded-full">
                  READ MORE
                </button>
              </div> */}
            </div>
          </div>


          {/* <motion.div
            initial={{ scale: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              // ease: [0, 0.71, 0.2, 1.01],
            }}
            // viewport={{ once: true, amount: 0.8 }}
            className="relative flex flex-row  card_backdrop shadow-md bg-clip-border rounded-xl w-4/5 h-[500px] text-white mt-6"
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 rounded-xl shadow-lg bg-clip-border ">
              <img
                src="https://img.freepik.com/premium-photo/sitting-desk-with-computer-writing-code_933496-57633.jpg"
                alt="profile-picture"
                className=""
              />
            </div>
            <aside >
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
            </aside>
          </motion.div> */}

          {/* <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mt-6">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}

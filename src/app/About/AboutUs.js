"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutUs = () => {
  const [open, setopen] = useState(false);

  const router = useRouter();

  return (
    <>
      <section className="min-h-screen flex flex-col justify-evenly  ">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1  sm:p-2 xl:mx-20 place-content-center place-items-center">
          <div className="space-y-4 relative ">
            <h1 className="  -top-8 font-bold text-2xl  ">About Us</h1>
            <h3 className="font-bold ">Operating Principle</h3>
            <p className="">
              InESS Solutions, Inc is a California-based Organization providing
              services & solutions for Hardware/Software Manufacturers and their
              Supply Chain, Engineering Processes, Product Life Cycle
              Management, Product Engineering & Design. We provide consulting &
              Supply Chain Operations services & solutions to our customers by
              following these principles:
            </p>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              // ease: [0, 0.71, 0.2, 1.01],
            }}
            className="sm:hidden md:hidden"
          >
            <Image
              src="https://img.freepik.com/free-photo/people-browsing-laptops-office_23-2147807986.jpg"
              className="w-96 h-68 rounded-lg"
              width={500}
              height={500}
              alt="about"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 sm:p-2  place-content-center place-items-center">
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              // ease: [0, 0.71, 0.2, 1.01],
            }}
            className="sm:hidden md:hidden"
          >
            <Image
              src="https://img.freepik.com/free-photo/people-browsing-laptops-office_23-2147807986.jpg"
              className="w-96 h-68 rounded-lg"
              width={500}
              height={500}
              alt="about"
            />
          </motion.div>

          <div className="space-y-4  mr-20">
            <h3 className="font-bold ">Business Objective</h3>
            <p className="">
              Enable our strategic customers to focus on product technology
              innovations and NPI, and allow them to align their Core, internal
              resources to their high value-add next-generation product
              development and strategic initiatives, instead of utilizing their
              internal resources to “Run the Business” which can be performed by
              Context resources.
            </p>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative flex items-center px-5 py-2 transition-all ease-in duration-75 bg-white text-black rounded-lg group-hover:bg-opacity-0">
                know more
                <IoIosArrowRoundForward className="ml-2 " size={20} />
              </span>
            </button>

            {/* <motion.h4
              // initial={{ scale: 0, opacity: 1 }}
              // whileHover={{
              //   scale: 1.2,
              // }}
              // whileInView={{ scale: 1, opacity: 1 }}
              // animate="visible"
              // transition={{
              //   delayChildren: 0.3,
              //   staggerChildren: 0.2,
              // }}
              // className=" cursor-pointer flex items-center border-[2px] border-gray-100 outline-none w-36 justify-center rounded-lg hover:bg-orange-400"
              onClick={() => router.push("/business")}
            >
              Know more

            </motion.h4> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

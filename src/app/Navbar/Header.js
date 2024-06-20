"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const router=useRouter()
  return (
    <>
      <header
        className={`flex justify-center   sticky top-0 z-10 items-center   `}
      >
        <section className="card_backdrop bg-gray-600 h-16  flex items-center justify-evenly space-x-4 w-3/4 rounded-full mt-2 ">
        <div className="flex justify-center items-center px-2">
          <img
            src="https://inesssolutions.com/newmenu/inesslogo.png"
            className="w-8 h-8"
            alt="logo"
          />
          <h1 onClick={()=>router.push("/")} className="text-black ml-2 font-bold cursor-pointer">INESS</h1>
        </div>
        <div className=" px-6 py-1 rounded-full  space-x-4 text-sm text-black flex sm:hidden md:hidden lg:hidden">
          <Link
            href="services"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
        
            className="flex text-lg"
          >
            Services{" "}
            <span className="flex items-center justify-center mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>{" "}
          </Link>
          <Link href="/" className="flex text-lg ">
            Technologies{" "}
            <span className="flex items-center mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>{" "}
          </Link>
          <Link href="/" className="text-xl">Projects</Link>
          <Link href="/" className="text-xl">Industries</Link>
          <Link href="/" className="text-xl">Careers</Link>
        </div>
        <div className="mr-2">
          <Link href="/" className="border py-2 px-4 rounded-full">
            Contact Us
          </Link>
        </div>
        </section>
      </header>
    </>
  );
};
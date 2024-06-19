"use client";

import React from "react";
import { Header } from "../Navbar/Header";
import { FaPlayCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import bg from "../../../public/images/bg_2.png";

function LandingPage() {
  return (
    <section className="relative min-h-screen w-full text-black bg ">
      <Header />

      <div className=" relative min-h-screen ">
        <h1 className="circle w-52 h-52 rounded-full absolute bottom-16 left-20 "></h1>

        <h1 className="circle w-52 h-52 rounded-full absolute right-12"></h1>
      </div>

      <div className="xl:p-12 sm:p-2 flex flex-col justify-center w-full h-full  absolute top-0">
        <div className=" flex flex-col justify-center space-y-16 p-16 shadow-2xl  h-auto text-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  ">
          <h5 className="text-lg text-center">WE ARE HERE FOR YOU!!!</h5>
          <h1 className="text-4xl xl:text-6xl font-bold text-center ">
            Providing best & <br />
            <span className="text-7xl">growth solutions</span>
          </h1>
          <div className="flex items-center justify-center">
            {/* <button className="bg-black py-2 px-12 rounded-full">Click</button> */}
            <div className="bg-white/20 w-12 border-2  border-gradient-to-r from-slate-200 to-gray-900 h-12 flex items-center  justify-center rounded-full">
              <FaPlayCircle
                color="white"
                size={30}
                className="mx-auto animate-pulse "
              />
            </div>
            <h1 className="ml-4">Know more about</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

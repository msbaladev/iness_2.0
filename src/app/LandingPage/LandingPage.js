"use client"

import React from "react";
import { Header } from "../Navbar/Header";
import { FaPlayCircle } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import bg from "../../../public/images/bg_2.png"


function LandingPage() {
  return (
    <section className="relative min-h-screen w-full text-white bg-[">
      <Header />
      <div className="xl:p-12 sm:p-2 flex flex-col justify-center w-full ">
        <div className="flex flex-col justify-center space-y-16 p-16 shadow-2xl  h-auto bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">
          <h5 className="text-lg">WE ARE HERE FOR YOU!!!</h5>
          <h1 className="text-4xl xl:text-6xl font-bold sm:text-center ">
            Providing best & <br />
            <span className="text-7xl">growth solutions</span>
          
          </h1>
          <div className="flex items-center">
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
      <div className="absolute top-0 left-0 w-full h-full  -z-10">
        {/* <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_large.mp4" />
        </video> */}

       {/* <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="" />
        </video> */}


        <img src="https://i.ibb.co/XyfL7c5/blob-scatter-haikei.png" className="w-full h-full"/>
      </div>
    </section>
  );
}

export default LandingPage;

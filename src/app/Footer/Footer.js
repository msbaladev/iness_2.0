import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdFax } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <footer className="relative ">
        <div className="mx-auto  max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8  ">
        
        
          <div className=" rounded-xl">
          <div className="mx-auto max-w-md ">
            <strong className="block text-center text-xl font-bold mt-6 text-gray-900 sm:text-3xl">
              Want us to email you with the latest blockbuster news?
            </strong>
          </div>

          <div className="mt-16 grid grid-cols-1 xl">
            <div className="mx-auto max-w-sm lg:max-w-none xl:max-w-xl"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:text-left xl:grid-cols-4 place-content-center place-items-center">
              <div className="space-y-3">
                <h1 className="font-bold ">USA-California</h1>

                <div className="text-sm space-y-1">
                  <h4> InESS Solutions, Inc.</h4>
                  <h4> 4701, Patric Henry Drive,</h4>
                  <h4> Santa Clara,</h4>
                  <h4> California USA 95054</h4>
                  <h4 className="flex items-center">
                    <FaPhoneAlt />{" "}
                    <a href="tel:+1 408 480 9350, " className="ml-2">
                      {" "}
                      +1 408 480 9350
                    </a>
                  </h4>

                  <h4 className="flex items-center">
                    <MdFax size={20} />{" "}
                    <span className="ml-1"> +1 408 501 8808</span>
                  </h4>

                  <h4 className="flex items-center">
                    <IoIosMail size={20} />{" "}
                    <a
                      href="mailto:inquiry@inesssolutions.com"
                      className="ml-2"
                    >
                      inquiry@inesssolutions.com
                    </a>
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="font-bold ">India-Bangalore </h1>

                <div className="text-sm space-y-1">
                  <h4>InESS Global Solutions (P) Ltd,</h4>
                  <h4> # 174, 19 th Main, </h4>
                  <h4>4th Sector, </h4>
                  <h4> HSR Layout, </h4>
                  <h4>Bangalore, Karnataka-560 102, </h4>
                  <h4 className="flex items-center">
                    <FaPhoneAlt />{" "}
                    <a href="tel:+91 9880201586" className="ml-2">
                      {" "}
                      +91 9880201586,
                    </a>
                  </h4>

                  <h4 className="flex items-center">
                    <IoIosMail size={20} />{" "}
                    <a
                      href="mailto:inquiry@inesssolutions.com"
                      className="ml-2"
                    >
                      inquiry@inesssolutions.com
                    </a>
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="font-bold ">India-Chennai </h1>

                <div className="text-sm space-y-1">
                  <h4>InESS Global Solutions (P) Ltd,</h4>
                  <h4>#19/58, Gajapathy St, </h4>
                  <h4>Venkatasamy Nagar, </h4>
                  <h4> Shenoy Nagar, </h4>
                  <h4>Chennai, Tamil Nadu 600030 </h4>
                  <h4 className="flex items-center">
                    <FaPhoneAlt />{" "}
                    <a href="tel:+91 4442621345, " className="ml-2">
                      {" "}
                      +91 4442621345,
                    </a>
                  </h4>

                  <h4 className="flex items-center">
                    <IoIosMail size={20} />{" "}
                    <a
                      href="mailto:inquiry@inesssolutions.com"
                      className="ml-2"
                    >
                      inquiry@inesssolutions.com
                    </a>
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="font-bold ">India-Karaikal</h1>

                <div className="text-sm space-y-1">
                  <h4>InESS Global Solutions (P) Ltd,</h4>
                  <h4> #13 Agraharam, </h4>
                  <h4>Kottucherry, </h4>
                  <h4> Karaikal, </h4>
                  <h4>Puducherry - 609609, </h4>
                  <h4 className="flex items-center">
                    <FaPhoneAlt />{" "}
                    <a href="tel:+91 4368265839 " className="ml-2">
                      {" "}
                      +91 4368265839,
                    </a>
                  </h4>

                  <h4 className="flex items-center">
                    <IoIosMail size={20} />{" "}
                    <a
                      href="mailto:inquiry@inesssolutions.com"
                      className="ml-2"
                    >
                      inquiry@inesssolutions.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around sm:flex-col sm:items-center sm:space-y-2 mt-12">
            <div className="flex items-center">
              {" "}
              <img
                src="https://inesssolutions.com/newmenu/inesslogo.png"
                className="w-12 h-12"
              />
              <h1 className="text-2xl font-bold">Iness</h1>
            </div>

            <div className="space-x-4">
              <SocialIcon url="https://linkedin.com" />
              <SocialIcon url="https://x.com" />
              <SocialIcon url="https://instagram.com" />
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 p-4">
            <p className="text-center text-xs/relaxed text-gray-500">
              © Iness global solutions {year}. All rights reserved.
              <br />
              Created with
              <a
                href=""
                className="text-gray-700 underline transition hover:text-gray-700/75 mx-1"
              >
                iness
              </a>
              and
              <a
                href=""
                className="text-gray-700 underline transition hover:text-gray-700/75 mx-1"
              >
                Team
              </a>
              .
            </p>
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


        {/* <img src="https://i.ibb.co/BTxsxDP/wave-haikei-2.png" className="w-full h-full"/> */}
      </div>
      </footer>
    </>
  );
};

export default Footer;

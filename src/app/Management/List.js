import React from "react";
import { GiBullseye } from "react-icons/gi";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";

import "swiper/css/effect-creative";

function List() {
  const data = [
    {
      id: 1,
      title: "Capabilities of Commodity Management Tool",
      first_line: "BOM Scrub activity.",
    },
    {
      id: 2,
      title: "PCN & EOL Management",
      first_line:
        "Categorize the PCN to Design change and Process change for the action plan.",
    },
    {
      id: 3,
      title: "BOM Risk Management",
    },
    {
      id: 4,
      title: "Integrated Quality Management System (IQuMS)",
    },
    {
      id: 5,
      title: "Claims Management",
    },
  ];
  return (
    <section className="mih-h-screen relative  ">
      <div className="   w-[1080px] lg:w-[800px] md:w-[500px] sm:w-[400px]  ">
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        >
          {data.map(({id}) => (
            <SwiperSlide key={id}>
              <section className="   text-black card_backdrop rounded-xl ">
                <div className="p-6 flex flex-col justify-evenly ">
                  <div>
                    {/* <img
       src="https://img.freepik.com/free-vector/share-business-dividend-calculation-percentage-ratio-contribution-size-deposit-amount-accounting-audit-shareholders-cartoon-characters_335657-1217.jpg"
       className="w-20 h-20 rounded-full"
       alt="service"
     /> */}
                    <RiDoubleQuotesL size={70} />
                  </div>
                  <h1 className="text-4xl font-bold  ml-6">
                    BOM risk Management
                  </h1>
                  <div className="my-auto mt-12 ml-6 md:text-xs sm:text-xs ">
                    <div className="flex flex-col  space-y-4 h-full">
                      <h6 className=" text- flex ">
                        {" "}
                        <span>
                          <GiBullseye size={20} className="mr-2 ml-2" />
                        </span>{" "}
                        Single Tool to handle multiple stakeholders like
                        Commodity Managers, Management, Contract Manufacturer,
                        Suppliers & Distributors.
                      </h6>
                      <h6 className="  flex ">
                        {" "}
                        <span>
                          <GiBullseye size={20} className="mr-2 ml-2" />
                        </span>{" "}
                        Adherence to Quality processes – Checklists, Test/debug
                        report validation.
                      </h6>
                      <h6 className="  flex ">
                        {" "}
                        <span>
                          <GiBullseye size={20} className="mr-2 ml-2" />
                        </span>{" "}
                        Break down the BOM to High, Medium, Low Risk & Potential
                        risk.
                      </h6>
                      <h6 className="  flex ">
                        {" "}
                        <span>
                          <GiBullseye size={20} className="mr-2 ml-2" />
                        </span>{" "}
                        Single Platform to manage various types of Manufacturer
                        claims (Reval, Freight & PPV) with multiple stakeholders
                        secured login options.
                      </h6>

                      <h6 className="  flex ">
                        {" "}
                        <span>
                          <GiBullseye size={20} className="mr-2 ml-2" />
                        </span>{" "}
                        Single Platform to manage various types of Manufacturer
                        claims (Reval, Freight & PPV) with multiple stakeholders
                        secured login options.
                      </h6>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          grabCursor={true}
          effect={"creative"}
          // creativeEffect={{
          //   prev: {
          //     shadow: true,
          //     translate: ["-120%", 0, -500],
          //   },
          //   next: {
          //     shadow: true,
          //     translate: ["120%", 0, -500],
          //   },
          // }}
          initialSlide={0}
        >
          {data.map(() => (
            <SwiperSlide className="">
              <section className=" w-[600px]  text-black bg-white rounded-3xl  ">
                <div className="p-6 flex flex-col justify-evenly ">
                  <div>
                    <img
                      src="https://img.freepik.com/free-vector/share-business-dividend-calculation-percentage-ratio-contribution-size-deposit-amount-accounting-audit-shareholders-cartoon-characters_335657-1217.jpg"
                      className="w-20 h-20 rounded-full"
                      alt="service"
                    />
                  </div>
                  <h1 className="text-xl font-bold ml-2">hello</h1>
                  <div>
                    <p className="text-xs p-2 text-start leading-5">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                    </p>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
}

export default List;

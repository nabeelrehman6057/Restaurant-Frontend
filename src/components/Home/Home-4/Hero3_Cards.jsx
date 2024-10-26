import React from "react";
import Hero3 from "./Hero3";

const Hero3_Cards = () => {
  return (
    <>
      <h1 className=" font-Playfair font-medium pl-10 text-[24px] sm:text-[30px] lg:text-[55px] sm:pl-28  md:pl-24 md:text-[40px] pt-8 ">
        We also offer unique <br /> services for your events
      </h1>

      <div
        className="card grid  justify-center pl-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:px-20 md:px-28 pb-8
               

               "
      >
        <div className="  ">
          <Hero3
            image={
              <img
                src="/Home/Home-4/Caterings.png"
                className="Home-4-image  w-[260px] h-[280px] rounded-xl mt-16"
                alt=""
              />
            }
            Category={
              <h1 className=" font-DMSans font-bold text-[22px] md:text-[30px] my-[30px]">
                Caterings
              </h1>
            }
            paragraph={
              <p className=" font-DMSans text-[14px]  w-[280px] mt-[-10px]  ">
                In the new era of technology we look <br /> in the future with
                certainty for life.
              </p>
            }
          />
        </div>
        <div className=" ">
          <Hero3
            image={
              <img
                src="/Home/Home-4/Birthday.png"
                className="Home-4-image w-[260px]    h-[280px] rounded-xl mt-16"
                alt=""
              />
            }
            Category={
              <h1 className=" font-DMSans font-bold text-[22px] md:text-[30px]  my-[30px]  ">
                Birthdays
              </h1>
            }
            paragraph={
              <p className=" font-DMSans text-[14px] w-[280px] mt-[-10px]  ">
                In the new era of technology we look <br /> in the future with
                certainty for life.
              </p>
            }
          />
        </div>

        <div className=" ">
          <Hero3
            image={
              <img
                src="/Home/Home-4/Weddings.png"
                className="Home-4-image w-[260px] h-[280px]  rounded-xl mt-16"
                alt=""
              />
            }
            Category={
              <h1 className=" font-DMSans font-bold text-[22px] md:text-[30px] my-[30px] ">
                Weddings
              </h1>
            }
            paragraph={
              <p className=" font-DMSans text-[14px] w-[280px] mt-[-10px] ">
                In the new era of technology we look <br /> in the future with
                certainty for life.
              </p>
            }
          />
        </div>

        <div className=" ">
          <Hero3
            image={
              <img
                src="/Home/Home-4/Events.png"
                className="Home-4-image w-[260px] h-[280px]  rounded-xl mt-16"
                alt=""
              />
            }
            Category={
              <h1 className=" font-DMSans font-bold text-[22px] md:text-[30px] my-[30px] ">
                Events
              </h1>
            }
            paragraph={
              <p className=" font-DMSans text-[14px] w-[280px] mt-[-10px]  ">
                In the new era of technology we look <br /> in the future with
                certainty for life.
              </p>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Hero3_Cards;
{
  /* <div className="md:flex md:justify-between  samsung:ml-[16%] ml-[11%] 2xl:pl-8   sm:ml-[180px] xl:ml-0 ">
  </div> */
}

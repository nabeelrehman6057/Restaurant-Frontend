import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      {/* bg-[#F9F9F7] */}
      <div className=" bg-[#F9F9F7] py-8 px-12 2xl:px-52 grid justify-center  ipadAir:gap-x-[30px]  ipadAir:grid ipadAir:grid-cols-2  ">
        <div className="">
          <img
            src="/Home/Home-3/hero2.png"
            className="img   "
            alt="About Image"
          />
        </div>

        <div className=" hidden ipadAir:grid gap-y-4  ">
          <div className="heading ">
            <h1 className="lg:text-[60px] text-[30px] font-Playfair font-medium ">
              We provide healthy food for your family.
            </h1>
          </div>
          <div className="paragraph grid gap-y-4 ">
            <p className="lg:text-[20px] text-[14px] font-DMSans font-medium">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>

            <p className="text-[12px] lg:text-[18px] font-DMSans">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>

          {/* <Hero2Btn />  */}

          <button className=" rounded-full bg-slate-400  font-DMSans lg:w-[179px] w-[140px] h-[45px] text-[16px] font-medium lg:h-[55px] hover:bg-black hover:text-white duration-500 hover:duration-500">
            <NavLink to="/about" className="bg-transparent shadow-none">
              More about us
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero2;

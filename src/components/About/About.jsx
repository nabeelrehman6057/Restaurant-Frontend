import React from "react";
import Hero2 from "../Home/Home-3/Hero2";
import HomeSix from "../Home/Home-6/HomeSix";
import MoreAboutUs from "../Home/Home-3/MoreAboutUs";

const About = () => {
  return (
    <>
      <div className="main mt-[-40px]  ">
        <MoreAboutUs />

        <div className="image">
          <img src="/About/about-image1.png" alt="image" />
        </div>
      </div>

      <div className="container grid ipadAir:gap-x-3 ipadAir:ml-[60px] laptop:ml-2 laptop:gap-x-12 ipadAir:flex justify-center ml-2 gap-y-6 pt-12 pb-12">
        <div className="">
          <img
            src="/About/restaurant-menu1.png"
            className="w-12 h-12  "
            alt="time"
          />
        </div>
        <div>
          <h1 className="text-center font-DMSans text-[20px] font-bold">
            Multi Cuisine
          </h1>
          <p className="text-left font-DMSans text-[14px] w-[260px] pt-2 ">
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>

        <div className="">
          <img src="/About/Icon.png" className="w-12 h-12" alt="time" />
        </div>
        <div className="">
          <h1 className="text-center font-DMSans text-[20px] font-bold">
            Easy To Order
          </h1>
          <p className="text-left font-DMSans text-[14px] w-[260px] pt-2">
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>

        <div className="">
          <img src="/About/time.png" className="w-12 h-12" alt="time" />
        </div>
        <div className="">
          <h1 className="text-center font-DMSans text-[20px] font-bold">
            Fast Delivery
          </h1>
          <p className="text-left font-DMSans text-[14px] w-[260px] pt-2">
            In the new era of technology we look in the future with certainty
            life.
          </p>
        </div>
      </div>

      {/* next part */}
      <div className="bg-[#F9F9F7]">
        <div className="container grid justify-center laptop:pl-8 laptop:grid-cols-2 iphone:ml-4   ">
          {/* left side */}
          <div className="left pt-12 w-[300px] ipadAir:w-[700px] ipadAir:ml-20 laptop:ml-0 ">
            <h1 className=" font-Playfair laptop:text-[55px] ipadAir:text-[35px] text-[20px] font-medium laptop:text-left text-center laptop:w-[546px]">
              A little information for our valuable guest
            </h1>
            <p className=" font-DMSans laptop:text-left text-center laptop:w-[506px] pt-4">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>

            <div className="images-left grid ipadAir:grid-cols-2 ipadAir:pl-8 laptop:pl-0 justify-center py-12 gap-y-8">
              <img
                src="/About/1(1).png"
                className="w-[293px] h-[174px]  "
                alt="image"
              />
              <img
                src="/About/2(1).png"
                className="w-[293px] h-[174px]  "
                alt="image"
              />
              <img
                src="/About/3(1).png"
                className="w-[293px] h-[174px] "
                alt="image"
              />
              <img
                src="/About/4(1).png"
                className="w-[293px] h-[174px] "
                alt="image"
              />
            </div>
          </div>

          {/* right side */}
          <div className="right hidden ipadAir:flex laptop:pl-20 laptop:pt-16 ">
            <img
              src="/About/Mask.png"
              className=" ipadAir:hidden  laptop:grid max-w-[555px]  h-[660px] pr-32"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* next part 2 */}

      <div className=" pb-10 ipadAir:pl-4 ">
        <HomeSix />
      </div>
    </>
  );
};

export default About;

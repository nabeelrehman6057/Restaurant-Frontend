import React from "react";

const HomeFive = () => {
  return (
    <>
      <div className="main bg-[#F9F9F7] hidden md:flex">
        <div className="container flex grid-cols-2 px-4  gap-10 py-8 justify-center">
          <div className="image lg:flex gap-2">
            <img
              src="/Home/Home-5/1st.png"
              className="h-[500px] w-[331px] rounded-xl desktop:h-[700px] desktop:w-[500px]"
              alt="1st-Image"
            />
            <div className="2nd-Images mt-7 hidden lg:grid ml-3">
              <div>
                <img
                  src="/Home/Home-5/2nd.png"
                  className="pb-1 w-[250px] h-[290px] desktop:w-[400px] desktop:h-[400px]"
                  alt="2nd-Image"
                />
              </div>
              <div>
                <img
                  src="/Home/Home-5/3rd.png"
                  className="w-[250px] h-[190px]  mt-4 desktop:w-[400px] desktop:h-[290px]"
                  alt="3rd-Image"
                />
              </div>
            </div>
          </div>

          <div className="content pt-24 ">
            <h1 className=" font-Playfair text-[55px] font-medium desktop:text-[90px] pb-6">
              Fastest Food <br /> Delivery in City
            </h1>
            <p className=" font-DMSans text-[16px] w-[414px] pb-6  desktop:text-[28px]">
              Our visual designer lets you quickly and of drag a down <br />{" "}
              your way to customapps for both keep desktop.{" "}
            </p>
            <div className="flex gap-4 pb-3">
              <img
                src="/Home/Home-5/clock.png"
                className="w-[30px] h-[30px] desktop:w-[50px] desktop:h-[50px]"
                alt=""
              />
              <h1 className=" font-DMSans font-medium text-[20px]  desktop:text-[25px]">
                Delivery within 30 minutes
              </h1>
            </div>
            <div className="flex gap-x-4 pb-3">
              <img
                src="/Home/Home-5/offers.png"
                className="w-[30px] h-[30px] desktop:w-[50px] desktop:h-[50px]"
                alt=""
              />
              <h1 className=" font-DMSans font-medium text-[20px] desktop:text-[25px]">
                Best Offer & Prices
              </h1>
            </div>
            <div className="flex gap-x-4 pb-3">
              <img
                src="/Home/Home-5/Delevery.png"
                className="w-[30px] h-[30px] desktop:w-[50px] desktop:h-[50px]"
                alt=""
              />
              <h1 className=" font-DMSans font-medium text-[20px] desktop:text-[25px]">
                Online Services Available
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFive;

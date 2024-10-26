import HomeSixCards from "./HomeSixCards";

const HomeSix = () => {
  return (
    <>
      <h1 className="font-Playfair font-medium md:text-[55px]  text-[30px] lg:flex hidden md:justify-center  ml-2   md:ml-0 pt-20">
        What Our Customers Say
      </h1>

      <div className="flex justify-center">
        <div>
          <HomeSixCards
            tital={
              <h1 className="text-[#AD343E] font-DMSans font-bold text-[24px] pb-8 pt-8">
                “The best restaurant”
              </h1>
            }
            paragraph={
              <p className="w-[280px] font-DMSans text-[18px] pb-8">
                Last night, we dined at place and were simply blown away. From
                the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
            }
            image={
              <img
                src="/Home/Home-6/Sophire.png"
                className="w-[70px] h-[70px]"
                alt="logo"
              />
            }
            name={
              <h1 className="font-DMSans text-[16px] font-bold">
                Sophire Robson
              </h1>
            }
            country={
              <span className=" font-DMSans text-[16px]">Los Angeles, CA</span>
            }
          />
        </div>

        <div className="">
          <HomeSixCards
            tital={
              <h1 className="text-[#AD343E] font-DMSans font-bold text-[24px] pb-8 pt-8">
                “Simply delicious”
              </h1>
            }
            paragraph={
              <p className="w-[280px] font-DMSans text-[18px] pb-8">
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </p>
            }
            image={
              <img
                src="/Home/Home-6/Matt.png"
                className="w-[70px] h-[70px]"
                alt="logo"
              />
            }
            name={
              <h1 className="font-DMSans text-[16px] font-bold">Matt Cannon</h1>
            }
            country={
              <span className=" font-DMSans text-[16px]">San Diego, CA</span>
            }
          />
        </div>

        <div className="">
          <HomeSixCards
            tital={
              <h1 className="text-[#AD343E]  font-DMSans font-bold text-[24px] pb-8 pt-8">
                “One of a kind restaurant”
              </h1>
            }
            paragraph={
              <p className="w-[280px] font-DMSans text-[18px] pb-8">
                The culinary experience at place is first to none. The
                atmosphere is vibrant, the food - nothing short of
                extraordinary. The food was the highlight of our evening. Highly
                recommended.
              </p>
            }
            image={
              <img
                src="/Home/Home-6/Andy.png"
                className="w-[70px] h-[70px]"
                alt="logo"
              />
            }
            name={
              <h1 className="font-DMSans text-[16px] font-bold">Andy Smith</h1>
            }
            country={
              <span className=" font-DMSans text-[16px]">
                San Francisco, CA
              </span>
            }
          />
        </div>

        <div className=" laptop:hidden desktop:flex">
          <HomeSixCards
            tital={
              <h1 className="text-[#AD343E] font-DMSans font-bold text-[24px] pb-8 pt-8">
                “The best restaurant”
              </h1>
            }
            paragraph={
              <p className="w-[280px] font-DMSans text-[18px] pb-8">
                Last night, we dined at place and were simply blown away. From
                the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
            }
            image={
              <img
                src="/Home/Home-6/Sophire.png"
                className="w-[70px] h-[70px]"
                alt="logo"
              />
            }
            name={
              <h1 className="font-DMSans text-[16px] font-bold">
                Sophire Robson
              </h1>
            }
            country={
              <span className=" font-DMSans text-[16px]">Los Angeles, CA</span>
            }
          />
        </div>
      </div>
    </>
  );
};

export default HomeSix;

import { Outlet, NavLink } from "react-router-dom";

const HomeSeven = () => {
  return (
    <>
      <div className="container pb-8 bg-[#F9F9F7] max-w-[100%] ">
        <div className="article flex justify-between items-center py-8 md:px-16 ">
          <h1 className=" font-Playfair font-medium text-[16px] sm:text-[30px] pl-4 lg:text-[40px]">
            Our Blog & Articles
          </h1>

          <div className="bg-[#AD343E] rounded-full py-2 px-3  mr-4  text-white   hover:bg-black hover:text-white  hover:duration-500 duration-500 hover:font-bold font-bold text-[12px] sm:text-[16px] lg:text-[18px] lg:py-4 lg:px-6">
            <NavLink to="/pages"> Read All Articles </NavLink>
          </div>
        </div>
        <div className="post grid justify-center pt-4 md:grid-cols-2 ">
          <div className="hidden lg:flex pl-16">
            <div className="left w-[466px] h-[700px]  rounded-xl bg-[#FFFFFF] ">
              <img src="/Home/Home-7/1st..png" alt="1st-image" />
              <h1 className="text-[#737865] pl-8 pt-12 pb-4">
                January 3, 2023
              </h1>
              <h2 className="text-[#2C2F24] pl-8 pt-4">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h2>
              <p className="text-[#414536] pl-8 pt-8  font-DMSans text-[16px] w-[468px] ">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </div>
          <div className="laptop:grid laptop:grid-cols-2 grid gap-y-6 ipadAir:grid-cols-2  ipadAir:gap-x-80 laptop:gap-x-0 ipadAir:ml-36 laptop:ml-0 laptop:gap-0 laptop:gap-y-[56px] pb-8 ">
            <div className="bg-[#FFFFFF] w-[260px] h-[320px] rounded-lg">
              <img src="/Home/Home-7/2nd..png" alt="1st-image" />
              <h1 className="text-[#737865] pl-8 font-DMSans text-[14] font-medium pt-4 pb-2 ">
                January 3, 2023
              </h1>
              <h2 className="text-[#2C2F24] pl-8 font-DMSans font-medium text-[20px] w-[256gb]">
                How to prepare the perfect french fries in an air fryer
              </h2>
            </div>

            <div className="bg-[#FFFFFF] w-[260px] h-[320px] rounded-lg">
              <img src="/Home/Home-7/3rd..png" alt="1st-image" />
              <h1 className="text-[#737865] pl-8 font-DMSans text-[14] font-medium pt-4 pb-2 ">
                January 3, 2023
              </h1>
              <h2 className="text-[#2C2F24] pl-8 font-DMSans font-medium text-[20px] w-[256gb]">
                How to prepare delicious chicken tenders
              </h2>
            </div>

            <div className="bg-[#FFFFFF] w-[260px] h-[320px] rounded-lg">
              <img src="/Home/Home-7/4th..png" alt="1st-image" />
              <h1 className="text-[#737865] pl-8 font-DMSans text-[14] font-medium pt-4 pb-2 ">
                January 3, 2023
              </h1>
              <h2 className="text-[#2C2F24] pl-8 font-DMSans font-medium text-[20px] w-[256gb]">
                7 delicious cheesecake recipes you can prepare
              </h2>
            </div>

            <div className="bg-[#FFFFFF] w-[260px] h-[320px] rounded-lg">
              <img src="/Home/Home-7/5th..png" alt="1st-image" />
              <h1 className="text-[#737865] pl-8 font-DMSans text-[14] font-medium pt-4 pb-2 ">
                January 3, 2023
              </h1>
              <h2 className="text-[#2C2F24] pl-8 font-DMSans font-medium text-[20px] w-[256gb]">
                5 great pizza restaurants you should visit this city
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSeven;

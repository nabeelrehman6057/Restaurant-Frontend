import { Outlet, NavLink } from "react-router-dom";

const Foooter = () => {
  return (
    <>
      <div className="container  bg-[#474747] max-w-full pt-10 ">
        <div
          className="box grid lg:grid-cols-3 sm:grid-cols-2
                     "
        >
          <div className="col-1 pl-4 ">
            <div className="flex justify-center w-[180px] md:w-[230px] pl-2 ">
              <img src="/Footer/Logo.png" className="" alt="" />
            </div>
            <h1 className=" font-DMSans  text-[#ADB29E] sm:text-[16px] md:text-[24px] md:w-[435px] sm:w-[300px] pl-2 pt-4 text-left ">
              In the new era of technology we look a <br /> in the future with
              certainty and pride to for our company and.
            </h1>
            <div className="social-logos flex gap-4 pt-4 pl-4 pb-8">
              <a href="https://www.linkedin.com/in/nabeel-rehman-89b50220a/">
                {" "}
                <img src="/Footer/1.png" alt="logo-1" />
              </a>
              <a href="https://www.facebook.com/nabeelrehman907">
                {" "}
                <img src="/Footer/2.png" alt="logo-2" />{" "}
              </a>
              <a href="https://www.instagram.com/nabeel_rehman1/">
                {" "}
                <img src="/Footer/3.png" alt="logo-3" />{" "}
              </a>
              <a href="https://github.com/">
                {" "}
                <img src="/Footer/4.png" alt="logo-4" />{" "}
              </a>
            </div>
          </div>
          <div className="col-2 hidden lg:flex pl-36 gap-8 ">
            <div>
              <h1 className=" font-DMSans font-bold text-[#FFFFFF] text-[24px] ">
                Pages
              </h1>
              <div className="grid gap-y-6">
                <h1 className="text-[#ADB29E] font-DMSans text-[24px] pt-12 ">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Home
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    About
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  <NavLink
                    to="/Menu"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Menu
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  {" "}
                  <NavLink
                    to="/PricingMenu"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Pricing
                  </NavLink>
                </h1>
              </div>
            </div>
            <div>
              <h1 className="pb-12 font-DMSans font-bold text-[#FFFFFF] text-[24px]">
                Utility Pages
              </h1>
              <div className="grid gap-y-6">
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  {" "}
                  <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Blogs
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  {" "}
                  <NavLink
                    to="/contact-page"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Contact
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  {" "}
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Services
                  </NavLink>
                </h1>
                <h1 className="text-[#ADB29E] font-DMSans text-left text-[24px]">
                  {" "}
                  <NavLink
                    to="/HomeFIve"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    Delivery
                  </NavLink>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className=" hidden sm:grid">
              <h1 className="text-white flex justify-center text-[24px] font-DMSans font-bold">
                Follow Us on Instagram
              </h1>
              <div className=" grid grid-cols-2 gap-4 p-12">
                <img src="/Footer/1st-image.png" className=" " alt="image-1" />
                <img src="/Footer/2nd-image.png" className="" alt="image-2" />
                <img src="/Footer/3rd-image.png" className="" alt="image-3" />
                <img src="/Footer/4th-image.png" className="" alt="image-4" />
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-[20px]" />
        <h1 className="flex justify-center text-[10px] sm:text-[14px] text-center text-gray-300 py-4">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Foooter;

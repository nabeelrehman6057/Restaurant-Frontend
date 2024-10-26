import { Outlet, NavLink } from "react-router-dom";
import MenuCard from "./MenuCard";

const Cards = () => {
  return (
    <>
      <div className="">
        <div
          className="grid laptop:grid-cols-4 ipadAir:grid-cols-2 gap-y-8 py-8
                     
                        
                        "
        >
          <div>
            <MenuCard
              image={
                <img
                  src="/Home/Home-2/Breakfast_Icon.png"
                  className="ml-[91px] mt-4 bg-gray-100 p-4 text-[#474747] rounded-full "
                  alt="logo-1"
                />
              }
              title={
                <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-black pt-6 flex justify-center">
                  Breakfast
                </h5>
              }
              paragraph={
                <p className="font-normal px-18 text-black items-center text-center pt-4 px-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
              }
              link={
                <NavLink
                  to="/Breakfast"
                  className=" text-red-500 font-bold flex justify-center pt-8"
                >
                  Explore Menu
                </NavLink>
              }
            />
          </div>
          <div>
            <MenuCard
              image={
                <img
                  src="/Home/Home-2/MainDishes.png"
                  className="ml-[90px] bg-gray-100  size-18 p-4 mt-4 text-[#474747] rounded-full "
                  alt="logo-1"
                />
              }
              title={
                <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-black pt-6 flex justify-center">
                  Main Dishes
                </h5>
              }
              paragraph={
                <p className="font-normal px-18 text-black items-center text-center pt-4 px-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
              }
              link={
                <NavLink
                  to="/MainDishes"
                  className=" text-red-500 font-bold flex justify-center pt-14"
                >
                  Explore Menu
                </NavLink>
              }
            />
          </div>
          <div>
            <MenuCard
              image={
                <img
                  src="/Home/Home-2/Breakfast_Icon.png"
                  className="ml-[90px] bg-gray-100  size-18 p-4 mt-4 text-[#474747] rounded-full"
                  alt="logo-1"
                />
              }
              title={
                <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-black pt-6 flex justify-center">
                  Drinks
                </h5>
              }
              paragraph={
                <p className="font-normal px-18 text-black items-center text-center pt-4 px-2">
                  In the newn era of technology we look in the future with
                  certainty and pride for our life.
                </p>
              }
              link={
                <NavLink
                  to="/Drinks"
                  className=" text-red-500 font-bold flex justify-center pt-14"
                >
                  Explore Menu
                </NavLink>
              }
            />
          </div>
          <div>
            <MenuCard
              image={
                <img
                  src="/Home/Home-2/Desserts.png"
                  className=" bg-gray-100 ml-[91px]  size-18 p-4 mt-4  text-[#474747] rounded-full "
                  alt="logo-1"
                />
              }
              title={
                <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-black pt-6 flex justify-center">
                  Desserts
                </h5>
              }
              paragraph={
                <p className="font-normal px-18  text-black items-center text-center pt-4 px-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
              }
              link={
                <NavLink
                  to="/Desserts"
                  className=" text-red-500 font-bold flex justify-center pt-14"
                >
                  Explore Menu
                </NavLink>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

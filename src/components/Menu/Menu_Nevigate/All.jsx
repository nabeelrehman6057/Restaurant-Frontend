import { Outlet, NavLink } from "react-router-dom";
import Cards from "../Cards";

const All = () => {
  return (
    <>
      <div className="heading">
        <h1 className=" font-Playfair ipadAir:text-[100px] text-[35px] text-center">
          Our Menu
        </h1>
        <p className=" font-DMSans ipadAir:text-[18px] text-[16px]  text-center">
          We consider all the drivers of change gives you the components{" "}
          <br className=" hidden ipad:flex" /> you need to change to create a
          truly happens.
        </p>
      </div>

      <div className="btns ipad:flex justify-center gap-4 pb-8 hidden">
        <NavLink
          to="/All"
          className="hover:bg-[#AD343E] bg-[#AD343E] hover:px-12 top-10 hover:py-2 py-2 px-12  mt-8  rounded-3xl hover:duration-500 duration-500 hover:shadow-2xl font-medium font-DMSans text-[20px]"
        >
          All
        </NavLink>

        <NavLink
          to="/Breakfast"
          className="hover:bg-[#AD343E] bg-[#DBDFD0] hover:px-6 top-10 hover:py-2 px-6  py-2 mt-8  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans text-[18px]"
        >
          Breakfast
        </NavLink>

        <NavLink
          to="/Desserts"
          className="hover:bg-[#AD343E] bg-[#DBDFD0] hover:px-6 top-10 hover:py-2 px-6  py-2 mt-8  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans text-[18px]"
        >
          Desserts
        </NavLink>

        <NavLink
          to="/Drinks"
          className="hover:bg-[#AD343E] bg-[#DBDFD0] hover:px-6 top-10 hover:py-2 px-6  py-2 mt-8  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans text-[18px]"
        >
          Drinks
        </NavLink>

        <NavLink
          to="/MainDishes"
          className="hover:bg-[#AD343E] bg-[#DBDFD0] hover:px-6 top-10 hover:py-2 px-6  py-2 mt-8  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans text-[18px]"
        >
          MainDishes
        </NavLink>
      </div>

      <div className="Cards mb-40 grid ipadAir:grid-cols-2 laptop:grid-cols-4 laptop:pl-0 ipadAir:pl-[60px] justify-center pr-6">
        <Cards
          image={<img src="/Menu/Card1.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 9.99
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Fried Eggs
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card2.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 15.99
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Hawaiian Pizza
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card3.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 7.25
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Martinez Cocktail
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card4.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 20.99
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Butterscotch Cake
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card5.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 5.89
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Mint Lemonade
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card6.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 18.05
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Chocolate Icecream
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card7.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 12.55
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Cheese Burger
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />

        <Cards
          image={<img src="/Menu/Card8.png" alt="image" />}
          price={
            <h1 className=" font-DMSans font-bold text-[24px] text-center text-[#AD343E] pb-4 ">
              $ 12.99
            </h1>
          }
          detail={
            <h1 className=" font-DMSans font-bold text-[20px] text-center pb-4">
              Classic Waffles
            </h1>
          }
          paragraph={
            <p className="  font-DMSans text-center text-[#414536] pb-10">
              Made with eggs, lettuce, salt, oil <br /> and other ingredients.
            </p>
          }
        />
      </div>
    </>
  );
};

export default All;

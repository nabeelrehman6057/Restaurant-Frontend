import { Outlet, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Extra Large Screen Button on Image */}
      <div className=" grid-cols-2 absolute left-[38%]  hidden lg:flex 2xl:top-[800px] 2xl:left-[42%]  lg:top-[600px]  gap-4">
        <div className="    ">
          <button className=" rounded-full md:px-8 md:py-3 px-4 py-1 border-gray-400 bg-[#c74a4a] text-white border-2 font-bold hover:bg-[#c74a4a] hover:text-white hover:border-[#c74a4a] hover:duration-300 duration-300">
            <NavLink to="/Book-Table">Book A Table</NavLink>
          </button>
        </div>
        <div>
          <button className="rounded-full px-8 py-3 border-gray-400 text-gray-600 border-2 font-bold hover:bg-gray-200 hover:text-gray-600  hover:border-white hover:duration-300 duration-300 ">
            <NavLink to="/Book-Table">Book A Table</NavLink>
          </button>
        </div>
      </div>
      {/* large screen button on image */}

      <div className=" ">
        <img src="/content.png" alt="logo" className="w-full" />
      </div>
      <h1 className="w-full md:text-6xl text-4xl font-medium text-[#2C2F24] mx-auto max-w-screen-md justify-center flex md:pt-32 pt-20  ">
        Browse Our Menu
      </h1>
    </>
  );
};

export default Hero;

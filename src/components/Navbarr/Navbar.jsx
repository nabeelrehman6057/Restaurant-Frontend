import { Outlet, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { NoEncryption } from "@mui/icons-material";
import BookTablebtn from "./BookTablebtn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="p-3 py-8 h-4 bg-[#F9F9F7] flex justify-between  items-center w-full md:h-[10px] laptop:py-10 laptop:h-[55px]">
        {/* Logo */}
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          <div className="brand hidden lg:flex gap-2 items-center pl-[60px]">
            <img
              src="/Navbar/Logo.png"
              alt="logo"
              className="object-cover max-w-[200px] max-h-[180px]"
            />
          </div>
        </NavLink>

        <div className=" gap-8 hidden  xl:flex ">
          <NavLink
            to="/home"
            className=" hover:bg-[#DBDFD0]   hover:px-5 hover:py-1 px-5 py-1  rounded-3xl  hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="hover:bg-[#DBDFD0] hover:px-5 hover:py-1 px-5 py-1  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans"
          >
            About
          </NavLink>

          <NavLink
            to="/menu"
            className="hover:bg-[#DBDFD0] hover:px-5 hover:py-1 px-5 py-1  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans"
          >
            Menu
          </NavLink>
          <NavLink
            to="/pages"
            className="hover:bg-[#DBDFD0] hover:px-5 hover:py-1 px-5 py-1  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans"
          >
            Pages
          </NavLink>
          <NavLink
            to="/contact-page"
            className="hover:bg-[#DBDFD0] hover:px-5 hover:py-1 px-5 py-1  rounded-3xl hover:duration-500 duration-500 hover:shadow-xl font-medium font-DMSans"
          >
            Contact
          </NavLink>
        </div>

        <div className="pr-[60px]">
          <button className="">
            <NavLink
              to="/Book-Table"
              className="bg-[#F9F9F7] shadow-none p-3 px-7   hidden laptop:flex rounded-full  border-[#182226] text-[#182226] border-2 font-bold hover:bg-[#c74a4a] hover:text-white  hover:border-[#c74a4a] hover:duration-300 duration-300   "
            >
              Book A Table
            </NavLink>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className=" mr-32 ml-[-60px] iphone:mr-40   items-center mt-2 laptop:hidden ipad:ml-[-560px] ipadAir:ml-[-1000px] ">
          <button className="" onClick={handleMenuToggle}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className="laptop:hidden">
          <button className="rounded-full text-[10px] mt-2 px-4 py-[6px] border-gray-400 bg-[#c74a4a] text-white border-2 font-bold hover:bg-[#c74a4a] hover:text-white hover:border-[#c74a4a] hover:duration-300 duration-300">
            <NavLink
              to="/Book-Table"
              className="bg-transparent shadow-none px-4 py-[6px]"
            >
              Book A Table
            </NavLink>
          </button>
        </div>

        <div
          id="navdialog"
          className={`navMobile laptop:hidden   fixed bg-white inset-0 p-3 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <div className="flex laptop:hidden justify-between">
            {/* Close Button */}
            <button
              className="laptop:hidden flex btn p-2"
              onClick={handleMenuToggle}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="navManu   items-center mt-8 pt-2 ">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-black hover:rounded-full rounded-full bg-slate-300  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
                  : "hover:text-black hover:rounded-full  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
              }
              onClick={handleMenuToggle}
            >
              <br />
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-black hover:rounded-full rounded-full bg-slate-300  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
                  : "hover:text-black hover:rounded-full  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
              }
              onClick={handleMenuToggle}
            >
              <br />
              About
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-black hover:rounded-full rounded-full bg-slate-300  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
                  : "hover:text-black hover:rounded-full  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
              }
              onClick={handleMenuToggle}
            >
              <br />
              Menu
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-black hover:rounded-full rounded-full bg-slate-300  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
                  : "hover:text-black hover:rounded-full  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
              }
              onClick={handleMenuToggle}
            >
              <br />
              Pages
            </NavLink>

            <NavLink
              to="/contact-page"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-black hover:rounded-full rounded-full bg-slate-300  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
                  : "hover:text-black hover:rounded-full  pl-4 hover:bg-slate-500 flex mt-4 items-center text-center hover:h-10 h-10 pb-5  hover:duration-500 duration-500 hover:shadow-xl"
              }
              onClick={handleMenuToggle}
            >
              <br />
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

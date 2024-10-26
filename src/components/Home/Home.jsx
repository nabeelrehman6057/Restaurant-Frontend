import React from "react";
import Hero from "./Home-1/Hero";
import Cards from "./Home-2/Cards";
import Hero2 from "./Home-3/Hero2";
import Hero3_Cards from "./Home-4/Hero3_Cards";
import HomeFive from "./Home-5/HomeFive";
import HomeSix from "./Home-6/HomeSix";
import HomeSeven from "./Home-7/HomeSeven";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />

      <Hero2
        btn={
          <button className="font-bold text-[13px] rounded-full py-[12px] px-[22px] border-black text-black border-2 hover:bg-[#303d63] hover:text-white hover:border-[#303d63] hover:duration-300 duration-300 ">
            More about us
          </button>
        }
      />

      <Hero3_Cards />
      <HomeFive />
      <HomeSix />
      <HomeSeven />
    </>
  );
};

export default Home;

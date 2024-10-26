import { Category } from "@mui/icons-material";
import React from "react";

const Hero3 = ({ image, Category, paragraph }) => {
  return (
    <>
      <div className="main bg-[#FFFFFF]   ">
        {image}
        {Category}
        {paragraph}
      </div>
    </>
  );
};

export default Hero3;

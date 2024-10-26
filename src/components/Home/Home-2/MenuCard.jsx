import React from "react";

const MenuCard = ({ image, title, paragraph, link }) => {
  return (
    <>
      <div className="MenuCard grid justify-center    ">
        <div className="block   pt-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-700  w-[260px]  h-[360px] ">
          {image}

          {title}
          {paragraph}

          {link}
        </div>
      </div>
    </>
  );
};

export default MenuCard;

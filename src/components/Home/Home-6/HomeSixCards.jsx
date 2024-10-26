const HomeSixCards = ({ tital, paragraph, image, name, country }) => {
  return (
    <>
      <div className="card mx-[30px] my-[45px] w-[346px] h-[408px]  rounded-lg hidden laptop:grid  bg-[#F9F9F7] ipadAir:pl-8  ">
        {tital}
        {paragraph}
        <hr className=" w-[280px] bg-[#DBDFD0] h-0.5" />
        <div className="image pt-8 flex">
          {image}
          <div className="pl-5 pt-3">
            {name}
            {country}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSixCards;

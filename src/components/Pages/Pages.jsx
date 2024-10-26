import { Outlet, NavLink } from "react-router-dom";
import PagesCards from "./PagesCards";

const Pages = () => {
  return (
    <>
      <div className="main  bg-[#F9F9F7] ">
        <div className="container flex justify-center px-2">
          <div>
            <h1 className=" font-Playfair ipadAir:text-[100px] text-ipadAir:[35px] text-[30px] text-center  ">
              Our Blog & Articles
            </h1>
            <p className=" font-DMSans ipadAir:text-[18px] text-[16px] text-center pb-20">
              We consider all the drivers of change gives you the components you
              need <br /> to change to create a truly happens.
            </p>
          </div>
        </div>
        <div className="Cards px-8 pb-32 laptop:grid-cols-4  desktop:grid-cols-4 laptop:gap-x-8 laptop:gap-y-4 desktop:pl-32 grid justify-center ">
          <NavLink to="/page1st">
            <PagesCards
              image={<img src="/Pages/1.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="How to prepare a delicious gluten free sushi"
            />
          </NavLink>

          <NavLink to="/page2nd">
            <PagesCards
              image={<img src="/Pages/2.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="Exclusive baking lessons from the pastry king"
            />
          </NavLink>
          <NavLink to="/page3rd">
            <PagesCards
              image={<img src="/Pages/3.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="How to prepare the perfect fries in an air fryer"
            />
          </NavLink>
          <NavLink to="/page4th">
            <PagesCards
              image={<img src="/Pages/4.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="How to prepare delicious chicken tenders"
            />
          </NavLink>

          <NavLink to="/page5th">
            <PagesCards
              image={<img src="/Pages/5.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="5 great cooking gadgets you can buy to save time"
            />
          </NavLink>
          <NavLink to="/page6th">
            {" "}
            <PagesCards
              image={<img src="/Pages/6.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="The secret tips & tricks to prepare a perfect burger"
            />
          </NavLink>
          <NavLink to="/page7th">
            {" "}
            <PagesCards
              image={<img src="/Pages/7.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="7 delicious cheesecake recipes you can prepare"
            />
          </NavLink>
          <NavLink to="/page8th">
            {" "}
            <PagesCards
              image={<img src="/Pages/8.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="5 great pizza restaurants you should visit this city"
            />
          </NavLink>

          <NavLink to="/page9th">
            {" "}
            <PagesCards
              image={<img src="/Pages/9.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="5 great cooking gadgets you can buy to save time"
            />
          </NavLink>
          <NavLink to="/page10th">
            {" "}
            <PagesCards
              image={<img src="/Pages/10.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="How to prepare a delicious gluten free sushi"
            />
          </NavLink>
          <NavLink to="/page11th">
            {" "}
            <PagesCards
              image={<img src="/Pages/11.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="Top 20 simple and quick desserts for kids"
            />
          </NavLink>
          <NavLink to="/page12th">
            {" "}
            <PagesCards
              image={<img src="/Pages/12.png" alt="image-1" />}
              date="January 3, 2023"
              paragraph="Top 20 simple and quick desserts for kids"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Pages;

import "./App.css";
import React from "react";
import ContactBar from "./components/Header-Contact-Bar/ContactBar";
import Navbar from "./components/Navbarr/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Foooter from "./components/Footer/Foooter";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import BookTablebtn from "./components/Navbarr/BookTablebtn";
import ContactPage from "./components/Contact-Page/ContactPage";
import Breakfast from "./components/Menu/Menu_Nevigate/Breakfast";
import Desserts from "./components/Menu/Menu_Nevigate/Desserts";
import Drinks from "./components/Menu/Menu_Nevigate/Drinks";
import MainDishes from "./components/Menu/Menu_Nevigate/MainDishes";
import All from "./components/Menu/Menu_Nevigate/All";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PriceingMenu from "./components/Footer/PriceingMenu";
import HomeFive from "./components/Home/Home-5/HomeFive";
import Hero3_Cards from "./components/Home/Home-4/Hero3_Cards";
import Page1st from "./components/Pages/PagesArticles/Page1st";

import "./styles.css";
import Page2nd from "./components/Pages/PagesArticles/Page2nd";
import Page3rd from "./components/Pages/PagesArticles/Page3rd";
import Page4th from "./components/Pages/PagesArticles/Page4th";
import Page5th from "./components/Pages/PagesArticles/Page5th";
import Page6th from "./components/Pages/PagesArticles/Page6th";
import Page7th from "./components/Pages/PagesArticles/Page7th";
import Page8th from "./components/Pages/PagesArticles/Page8th";
import Page9th from "./components/Pages/PagesArticles/Page9th";
import Page10th from "./components/Pages/PagesArticles/Page10th";
import Page11th from "./components/Pages/PagesArticles/Page11th";
import Page12th from "./components/Pages/PagesArticles/Page12th";

const Pages = React.lazy(() => import("./components/Pages/Pages"));

const locomotiveScroll = new LocomotiveScroll();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ContactBar />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Book-Table" element={<BookTablebtn />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Hero3_Cards />} />
          <Route path="/homefive" element={<HomeFive />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/pages"
            element={
              <Suspense
                fallback={<div className="flex justify-center">Loading...</div>}
              >
                {" "}
                <Pages />{" "}
              </Suspense>
            }
          />
          <Route path="/page1st" element={<Page1st />} />
          <Route path="/page2nd" element={<Page2nd />} />
          <Route path="/page3rd" element={<Page3rd />} />
          <Route path="/page4th" element={<Page4th />} />
          <Route path="/page5th" element={<Page5th />} />
          <Route path="/page6th" element={<Page6th />} />
          <Route path="/page7th" element={<Page7th />} />
          <Route path="/page8th" element={<Page8th />} />
          <Route path="/page9th" element={<Page9th />} />
          <Route path="/page10th" element={<Page10th />} />
          <Route path="/page11th" element={<Page11th />} />
          <Route path="/page12th" element={<Page12th />} />

          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Desserts" element={<Desserts />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="/MainDishes" element={<MainDishes />} />
          <Route path="/All" element={<All />} />
          <Route path="/PricingMenu" element={<PriceingMenu />} />

          <Route />
        </Routes>
        <Foooter />
      </BrowserRouter>
    </>
  );
}

export default App;

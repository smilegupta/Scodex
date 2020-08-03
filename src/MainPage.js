import React from "react";
import Contact from "./components/ContactUs";
import About from "./components/AboutUs";
import Opportunties from "./components/Opportunities";

const MainPage = () => {
  return (
    <div>
      <About />
      <Opportunties />
      <Contact />
    </div>
  );
};

export default MainPage;

import React from "react";
import "./App.css";
import Header from "./components/HeaderPage";
import Footer from "./components/footer/Footer";
import Contact from "./components/ContactUs";
import About from "./components/AboutUs";
import Opportunties from "./components/Opportunities";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Opportunties />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;

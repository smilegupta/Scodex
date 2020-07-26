import React from "react";
import "./App.css";
import Header from "./components/HeaderPage";
import Footer from "./components/footer/Footer";
import Contact from "./components/ContactUs";
import About from "./components/AboutUs";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <br /> <br />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";
import Mover from "./components/Mover";
import BestOf from "./components/BestOf";
import WhyUs from "./components/WhyUs";
import Voices from "./components/Voices";
import Story from "./components/Story";
import Intrested from "./components/Intrested";
import Footer from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <Mover />
      <BestOf />
      <Work />
      <WhyUs />
      <Voices />
      <Story />
      <Intrested />
      <Footer />
    </div>
  );
};

export default App;

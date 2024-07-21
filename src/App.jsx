import React from "react";
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
    </div>
  );
};

export default App;

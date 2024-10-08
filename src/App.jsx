import React, { Suspense, useEffect, useRef } from "react";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";


const Scene = React.lazy(() => import("./3Dscene/Star"));
const Page1 = React.lazy(() => import("./components/Page1"));
const Page2 = React.lazy(() => import("./components/Page2"));
const Page3 = React.lazy(() => import("./components/Page3"));
const Page4 = React.lazy(() => import("./components/Page4"));
const Page5 = React.lazy(() => import("./components/Page5"));

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Clean up the scroll instance
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full relative"
      data-scroll-container
    >
      <Loader />
      <div className="absolute z-[-1] w-full h-full">
        <Suspense>
          <Scene />
        </Suspense>
      </div>
      {/* Insert CursorFollower to make sure it stays on top of everything */}
      <CursorFollower />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
};

export default App;

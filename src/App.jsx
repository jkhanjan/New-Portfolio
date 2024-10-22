import React, { Suspense, useEffect, useRef } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Scene = React.lazy(() => import("./3Dscene/Star"));
const Page1 = React.lazy(() => import("./components/Page1"));
const Page2 = React.lazy(() => import("./components/Page2"));
const Page3 = React.lazy(() => import("./components/Page3"));
const Page4 = React.lazy(() => import("./components/Page4"));
const Page5 = React.lazy(() => import("./components/Page5"));

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on component unmount
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full h-full relative">
      <div className="absolute z-[10] w-full h-screen">
        <Loader />
      </div>
      <div className="absolute z-[-1] w-full h-full">
        <Suspense fallback="scene is loading....">
          <Scene />
        </Suspense>
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
};

export default App;

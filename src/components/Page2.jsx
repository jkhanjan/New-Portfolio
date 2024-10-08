import gsap from "gsap";
import profile from '../../public/font/profile-pic.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Scene from "../3Dscene/Star";

const Page2 = () => {
  const parent = useRef(null);
  const img = useRef(null);
  const para = useRef([]);
  const aboutMe = useRef([]);
  const childRefs = useRef([]); // Array to hold multiple refs

  // Helper to assign refs
  const addToRefs = (el) => {
    if (el && !childRefs.current.includes(el)) {
      childRefs.current.push(el); // Push each element ref into array
    }
  };
  const AboutRefs = (el) => {
    if (el && !aboutMe.current.includes(el)) {
      aboutMe.current.push(el); // Push each element ref into array
    }
  };
  const addToParaRefs = (el) => {
    if (el && !para.current.includes(el)) {
      para.current.push(el); // Push each element ref into array
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: childRefs.current,
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(childRefs.current, {
      translateY: "100%",
      ease: "power4.out",
      duration: 2.5,
      stagger: 0.1, // Stagger to animate each one in sequence
    });
    tl2.from(aboutMe.current, {
      translateY: "100%",
      ease: "power4.out",
      duration: 0.5,
      stagger: 0.01, // Stagger to animate each one in sequence
    });
    tl.from(
      img.current,
      {
        translateY: "110%",
        rotate: 10,
        ease: "power4.out",
        duration: 2.5,
        stagger: 0.1, // Stagger to animate each one in sequence
      },
      "-=2.5"
    );
    tl2.from(
      para.current,
      {
        opacity: 0,
        translateY: "120%",
        ease: "power4.out",
        duration: 2.5,
        stagger: 0.1,
      },
      "-=2.5"
    );
  }, []);

  return (
    <div
      ref={parent}
      style={{ fontFamily: "MyCustomFont2" }}
      className="w-full h-full flex flex-col justify-center items-center z-[1] bg-transparent relative"
      data-scroll-section
    >
      <div className="w-full h-fit flex items-center justify-center text-9xl overflow-hidden text-black opacity-75 relative sm:text-[68vh] sm:tracking-[7px]">
        <div ref={addToRefs}>
          <h1 className="">H</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">E</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">L</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">L</h1>
        </div>
        <img
          ref={img}
          className="w-[40vw] h-[33vh] object-cover absolute  top-0 z-[10] sm:w-[35vw] sm:h-[60vh] sm:top-[4%]"
          src={profile}
          alt=""
        />
        <div ref={addToRefs}>
          <h1 className="">O</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">O</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">O</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">O</h1>
        </div>
        <div ref={addToRefs}>
          <h1 className="">O</h1>
        </div>
      </div>

      <div className="w-full sm:px-[6%] sm:flex sm:justify-around sm:items-center ">
        <div
          style={{ fontFamily: "MyCustomFont" }}
          className="overflow-hidden sm:w-full "
        >
          <p
            className="p-4 text-[2.7vh] tracking-tight mt-[5vh] sm:w-[85%] sm:p-0 sm:tracking-wide sm:mt-[0vh]"
            ref={addToParaRefs}
          >
            My name is Khanjan Jha, and I'm a front-end developer, who creates
            websites with a special focus on animations and user interactions.{" "}
          </p>
          <p
            className="p-4 sm:w-[85%] text-[2.7vh] tracking-tight sm:p-0 sm:tracking-normal"
            ref={addToParaRefs}
          >
            I'm ready to bring your ideas to life and add a touch of originality
            to the online space.{" "}
          </p>
        </div>

        <div className="flex w-full justify-end absolute z-[100]">
          <div className="w-[120px] h-[120px] top-[12vh] left-[-15%] absolute bg-gray-950 opacity-80 rounded-full"></div>
        </div>

        <div
          style={{ fontFamily: "MyCustomFont" }}
          className="flex flex-col gap-4 w-full mt-[10vh] overflow-hidden sm:mt-[5vh] "
        >
          <div
            className="leading-none flex justify-end items-end"
            ref={addToParaRefs}
          >
            <p className="w-[33%] flex sm:text-[2.3vh] sm:w-[20%]">
              Let's make your project special
            </p>
          </div>
          <div
            style={{ fontFamily: "MyCustomFont2" }}
            className=" flex items-center text-5xl justify-center p-14 sm:p-0 sm:pt-20 overflow-hidden sm:justify-end sm:px-0 sm:text-5xl opacity-75 "
          >
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">M</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">O</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">R</h1>
            </div>
            <div ref={AboutRefs} 
            className="  mr-1">
              <h1 className="border-b-2 border-black  ">E</h1>
            </div>{" "}
            <hr />
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">A</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">B</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">O</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">U</h1>
            </div>
            <div ref={AboutRefs} 
            className=" mr-1">
              <h1 className="border-b-2 border-black  ">T</h1>
            </div>{" "}
            <hr />
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">M</h1>
            </div>
            <div ref={AboutRefs}>

              <h1 className="border-b-2 border-black  ">E</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

import { Power4 } from "gsap";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const WhyUs = () => {
  const heading = useRef(null);
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);

  useEffect(() => {
    const headingElem = heading.current;
    const imageElem = image.current;
    const imageElem2 = image2.current;
    const imageElem3 = image3.current;
    const imageElem4 = image4.current;
    const imageElem5 = image5.current;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingElem,
        start: "0% 78%",
        end: "0% 30%",
        scrub: true,
        // markers: true,
      },
      ease: Power4.easeInOut,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageElem2,
        start: "0% 78%",
        end: "0% 30%",
        scrub: true,
        // markers: true,
      },
      ease: Power4.easeInOut,
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: imageElem3,
        start: "0% 78%",
        end: "0% 30%",
        scrub: true,
        // markers: true,
      },
      ease: Power4.easeInOut,
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: imageElem4,
        start: "0% 78%",
        end: "0% 30%",
        scrub: true,
        // markers: true,
      },
      ease: Power4.easeInOut,
    });

    tl.from(headingElem, {
      y: "100px",
    });
    tl4.from(imageElem4, {
      x: "10px",
      opacity: 0,
      y: "100px",
    });
    tl.from(imageElem, {
      y: "100px",
      x: "-200px",
    });

    tl2.from(imageElem2, {
      y: "150px",
      x: "100px",
      opacity: 0.7,
    });
    tl3.from(imageElem3, {
      y: "150px",
      x: "-100px",
      opacity: 0.7,
    });
    tl3.from(imageElem5, {
      y: "100px",
      opacity: 0,
    });
  });

  return (
    <div className="w-full h-fit relative">
      <img
        ref={image}
        className="absolute w-[20vw] top-[10%] z-[3] object-contain"
        src="https://media.baamboozle.com/uploads/images/635965/1651221837_135200.jpeg"
        alt=""
      />
      <img
        ref={image4}
        className="absolute w-[20vw] top-[50%] right-10 z-[3] object-contain"
        src="https://www.pngitem.com/pimgs/m/68-688827_green-tea-png-transparent-images-logo-green-tea.png"
        alt=""
      />
      <img
        ref={image5}
        className="absolute w-[20vw] top-[80%] left-20-0 z-[3] object-contain"
        src="https://i.pinimg.com/736x/5a/b7/c1/5ab7c1b2011409175c08228646a1e3a8.jpg"
        alt=""
      />
      <div className="overflow-hidden">
        <h1
          ref={heading}
          className="text-5xl italic flex items-center justify-center mt-10 sm:text-9xl sm:mt-28 text-blue-950"
        >
          WHY US
        </h1>
      </div>
      <div className="relative">
        <div className="rounded-2xl bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw] ">
          <img
            className="scale-[0.75] sm:h-[60vh]"
            src="https://cdn-icons-png.flaticon.com/512/2867/2867788.png"
            alt=""
          />
          <h3 className="m-auto text-3xl  tracking-tighter sm:text-[2.5rem] sm:mb-4 text-blue-950">
            Flower Based
          </h3>
          <p className="text-2xl leading-none sm:text-[1.5rem]">
            Infuse your wellness journey with the vibrant essence of real flower
            in every cup
          </p>
          <img
            className="sm:w-[100vw] opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://cdn-icons-png.flaticon.com/512/2867/2867788.png"
            alt=""
          />
        </div>
        <div className="bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw]">
          <img
            ref={image2}
            className="scale-[0.75] sm:h-[60vh]"
            src="https://as1.ftcdn.net/v2/jpg/03/64/96/96/1000_F_364969618_MToHwY5ATNEl2puOPM65pCqpqCzk2fdF.jpg"
            alt=""
          />
          <h3 className="m-auto text-3xl  tracking-tighter sm:text-[2.5rem] sm:mb-4 text-blue-950">
            Direct from Farm
          </h3>
          <p className="text-2xl leading-none sm:text-[1.5rem]">
            Hand picked and etihcally sourced, ensuring the freshment herbal
            infusion reach your cup
          </p>
          <img
            className="sm:w-[100vw] opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://as1.ftcdn.net/v2/jpg/03/64/96/96/1000_F_364969618_MToHwY5ATNEl2puOPM65pCqpqCzk2fdF.jpg"
            alt=""
          />
        </div>
        <div className=" bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw]">
          <img
            ref={image3}
            className="scale-[0.75] sm:h-[60vh]"
            src="https://cdn-icons-png.freepik.com/512/7189/7189666.png"
            alt=""
          />
          <h3 className="m-auto text-3xl tracking-tighter sm:text-[2.5rem] sm:mb-4 text-blue-950">
            Caffeine Free
          </h3>
          <p className="text-2xl leading-none sm:text-[1.5rem]">
            Embracing moments of calmm and relaxation with our naturality
            caffiene free herbal blends
          </p>
          <img
            className="sm:w-[100vw] opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://cdn-icons-png.freepik.com/512/7189/7189666.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

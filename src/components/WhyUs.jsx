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

  useEffect(() => {
    const headingElem = heading.current;
    const imageElem = image.current;
    const imageElem2 = image2.current;
    const imageElem3 = image3.current;
    const imageElem4 = image4.current;
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
      opacity:0,
      y:"100px"
    });
    tl.from(imageElem, {
      y: "100px",
      x: "-200px",
    });

    tl2.from(imageElem2, {
      y: "150px",
      x: "100px",
      opacity:0.7,
    });
    tl3.from(imageElem3, {
      y: "150px",
      x: "-100px",
      opacity:0.7,
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
      {/* <img
        ref={image2}
        className="absolute w-[20vw] top-[40%] right-0 z-[3] object-contain"
        src="https://5.imimg.com/data5/SELLER/Default/2023/11/358577251/YJ/SG/UD/20276323/green-assam-tea-leaves-500x500.webp"
        alt=""
      /> */}
      <div className="overflow-hidden">
        <h1
          ref={heading}
          className="text-5xl font-semibold flex items-center justify-center mt-10 sm:text-9xl sm:mt-28"
        >
          WHY US
        </h1>
      </div>
      <div className="relative">

        <div className="rounded-2xl bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw]">
          <img
            className="scale-[0.75] sm:h-[60vh]"
            src="https://cdn-icons-png.flaticon.com/512/2867/2867788.png"
            alt=""
          />
          <h3 className="m-auto text-3xl font-bold tracking-tighter sm:text-[2.5rem] sm:mb-4">
            Flower Based
          </h3>
          <p className="text-2xl tracking-tighter font-serif leading-none sm:text-[1.7rem]">
            Infuse your wellness journey with the vibrant essence of real flower
            in every cup
          </p>
        </div>
        <div className="bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw]">
          <img
            ref={image2}
            className="scale-[0.75] sm:h-[60vh]"
            src="https://as1.ftcdn.net/v2/jpg/03/64/96/96/1000_F_364969618_MToHwY5ATNEl2puOPM65pCqpqCzk2fdF.jpg"
            alt=""
          />
          <h3 className="m-auto text-3xl font-semibold tracking-tighter sm:text-[2.5rem] sm:mb-4">
            Flower Based
          </h3>
          <p className="text-2xl tracking-tighter font-serif leading-none sm:text-[1.7rem]">
            Infuse your wellness journey with the vibrant essence of real flower
            in every cup
          </p>
        </div>
        <div className=" bg-white w-[90vw] h-fit m-auto flex flex-col leading-none p-10 sticky top-0 z-[1] sm:w-[36vw]">
          <img
            ref={image3}
            className="scale-[0.75] sm:h-[60vh]"
            src="https://cdn-icons-png.freepik.com/512/7189/7189666.png"
            alt=""
          />
          <h3 className="m-auto text-3xl font-semibold tracking-tighter sm:text-[2.5rem] sm:mb-4">
            Flower Based
          </h3>
          <p className="text-2xl tracking-tighter font-serif leading-none sm:text-[1.7rem]">
            Infuse your wellness journey with the vibrant essence of real flower
            in every cup
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

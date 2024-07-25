import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Mover = () => {
  const mover1 = useRef(null);
  const mover2 = useRef(null);
  const mover3 = useRef(null);

  const imageRefs1 = {
    left: useRef(null),
    middle: useRef(null),
    right: useRef(null),
  };

  const imageRefs2 = {
    left: useRef(null),
    middle: useRef(null),
    right: useRef(null),
  };
  const imageRefs3 = {
    left: useRef(null),
    middle: useRef(null),
    right: useRef(null),
  };

  useEffect(() => {
    const moverElem1 = mover1.current;
    const moverElem2 = mover2.current;
    const moverElem3 = mover3.current;

    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerConfig = {
      trigger: moverElem1, // Use the same trigger element
      start: "0% 80%",
      end: "0% 30%",
      scrub: true,
    };

    const tl1 = gsap.timeline({
      scrollTrigger: {
        ...scrollTriggerConfig,
      },
      ease: Power4.easeOut,
    });

    tl1.to(moverElem1, {
      translateX: "-70%",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        ...scrollTriggerConfig,
      },
      ease: Power4.easeOut,
    });

    tl2.from(moverElem2, {
      translateX: "-20%",
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        ...scrollTriggerConfig,
      },
      ease: Power4.easeOut,
    });

    tl3.to(moverElem3, {
      translateX: "10%",
    });

    tl1.to(
      [
        imageRefs1.left.current,
        imageRefs1.middle.current,
        imageRefs1.right.current,
      ],
      {
        rotate: 360,
        transformOrigin: "center center",
      },
      0
    );

    tl2.to(
      [
        imageRefs2.left.current,
        imageRefs2.middle.current,
        imageRefs2.right.current,
      ],
      {
        rotate: 0,
        transformOrigin: "center center",
      },
      0
    );
  }, [imageRefs1, imageRefs2, imageRefs3]);

  return (
    <>
      <div className="w-full h-fit bg-gray-100 text-5xl sm:text-8xl sm:font-semibold flex items-center overflow-hidden whitespace-nowrap text-ellipsis tracking-wide mb-4 pt-8">
        <div
          className="flex items-center tracking-tight text-gray-500 gap-2"
          ref={mover2}
        >
          <img
            ref={imageRefs2.left}
            src="https://images.unsplash.com/photo-1554675427-1d637bdb5a12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaW5raW5nJTIwaGVyYmFsJTIwdGVhfGVufDB8fDB8fHww"
            alt=""
            className="mr-4 w-[12rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl hover:scale-105 transition-all object-contain"
          />
          <img
            ref={imageRefs2.middle}
            src="https://images.unsplash.com/photo-1484836443634-3d3fd80edccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmtpbmclMjBoZXJiYWwlMjB0ZWF8ZW58MHwwfDB8fHww"
            alt=""
            className="mr-4 w-[10rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl hover:scale-105 transition-all"
          />{" "}
          <img
            ref={imageRefs2.right}
            src="https://images.unsplash.com/photo-1541552397352-768f216c75ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5raW5nJTIwaGVyYmFsJTIwdGVhfGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="ml-4 w-[10rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl object-cover hover:scale-105 transition-all"
          />
          <img
            ref={imageRefs2.right}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMP129XoLaJXKKeeJCKdFFJnA85vbtjpyOQ&s"
            alt=""
            className="ml-4 w-[10rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl object-cover hover:scale-105 transition-all"
          />
          <img
            ref={imageRefs2.right}
            src="https://images.unsplash.com/photo-1668733521099-c120aa4ebbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyaW5raW5nJTIwaGVyYmFsJTIwdGVhfGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="ml-4 w-[10rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl hover:scale-105 transition-all"
          />
          <img
            ref={imageRefs2.right}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ3wsg5Es66YNoDmYGFVLhh-KJUV0N2RXCw&s"
            alt=""
            className="ml-4 w-[10rem] sm:w-[23rem] sm:h-[25vh] rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full h-fit bg-gray-100 text-5xl sm:text-7xl flex items-center overflow-hidden whitespace-nowrap text- tracking-wide ">
        <div
          className="flex items-center tracking-tight text-blue-950 gap-4 translate-x-[-30vw] italic"
          ref={mover1}
        >
          <img
            ref={imageRefs1.left}
            src="https://www.svgrepo.com/show/159267/flower-of-complex-design-shape.svg"
            alt=""
            className="mr-4 w-[5rem] sm:w-[5rem]"
          />
          Blue Tea is an Indian Ayurvedic Flower Herbal Tea Brand{" "}
          <img
            ref={imageRefs1.middle}
            src="https://www.svgrepo.com/show/159267/flower-of-complex-design-shape.svg"
            alt=""
            className="mr-4 w-[5rem] sm:w-[8rem]"
          />{" "}
          We offer health in every sip.
          <img
            ref={imageRefs1.right}
            src="https://www.svgrepo.com/show/159267/flower-of-complex-design-shape.svg"
            alt=""
            className="ml-4 w-[5rem] sm:w-[8rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Mover;

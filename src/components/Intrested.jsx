import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";

const Intrested = () => {
  const elems = [
    {
      subheading: "BLUE TEA",
      image:
        "https://bluetea.co.in/cdn/shop/collections/949275c13bcb64798347d6de71aa59b2_360x.jpg?v=1718456669",
    },
    {
      subheading: "WELLNESS PACK",
      image:
        "https://bluetea.co.in/cdn/shop/collections/Health_tea_category_image_360x.jpg?v=1718780708",
    },
    {
      subheading: "FLOWER TIS ANE",
      image:
        "https://bluetea.co.in/cdn/shop/collections/55f9d0789ecf05ab3e101b4d9888ba32_360x.jpg?v=1718456725",
    },
    {
      subheading: "ACCESSORIES",
      image:
        "https://bluetea.co.in/cdn/shop/collections/New_Accessories_Catagory_Banner_square_360x.jpg?v=1708955029",
    },
  ];

  const sliderRef = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const slider = sliderRef.current;
    const headingElem1 = heading1.current;
    const headingElem2 = heading2.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingElem1,
        start: "0% 78%",
        end: "0% 30%",
        scrub: true,
        // markers: true,
      },
      ease: Power4.easeInOut,
    });
    tl.from(headingElem1, {
      y: 100,
    });
    tl.from(headingElem2, {
      x: 10,
      opacity: 0,
    });

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="p-8 bg-gray-50 sm:h-[90vh] my-auto sm:mt-24 overflow-hidden">
      <div className="overflow-hidden h-fit">
        <h1
          ref={heading1}
          className="text-4xl text-center mb-4 font-serif sm:text-6xl overflow-hidden"
        >
          Liked Our Product??
        </h1>
      </div>
      <div className="overflow-hidden h-fit mt-4 ">
        <p
          ref={heading2}
          className="w-full flex items-center mx-auto justify-center text-2xl font-semibold overflow-hidden mb-4 hover:border-b-2 sm:border-black sm:w-fit"
        >
          CLICK HERE MORE OF THEM...
        </p>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll scrollbar-hide sm:overflow-x-hidden p-4"
      >
        {elems.map((elem, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:w-full bg-white shadow-md rounded-lg overflow-hidden "
          >
            <div className="relative group hover:scale-[1.05] transition-all overflow-hidden">
              <img
                data-scroll
                data-scroll-speed="-0.05"
                src={elem.image}
                alt={elem.subheading}
                className="w-full sm:h-fit h-[50vh] object-contain "
              />
            </div>
              <h2 className="text-xl mb-2 w-full flex items-center justify-center sm:mt-6">{elem.subheading}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intrested;

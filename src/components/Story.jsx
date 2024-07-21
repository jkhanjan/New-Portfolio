import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        { color: "#bdc1c7" }, // Initial color (gray-500)
        {
          color: "#000000", // Target color (darker)
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <img
        data-scroll
        data-scroll-speed="-0.7"
        className="absolute z-[-1] h-full w-full object-cover opacity-15"
        src="https://bluetea.co.in/cdn/shop/files/Our_story_website_image_farmer_1_540x.jpg?v=1717083657"
        alt=""
      />
      <div className="overflow-hidden">
        <h1 className="text-5xl tracking-tighter font-serif font-semibold flex items-center justify-center mt-10 sm:text-9xl sm:mt-8">
          Our Story
        </h1>
      </div>
      <div className="sm:flex sm:mt-4">
        <div className="text-[1rem] tracking-tighter mt-10 text-gray-500 flex flex-col p-10 pt-0 sm:w-2/3 sm:text-[1.7rem]">
          {[
            "Our vision is to provide authentic Indian Ayurvedic Herbal Tea across the world and while on this journey we commit to the advancement of the community along with us.",
            "We are poised to change the lives of over 1000 farmers' families by 2025.",
            "We have already managed to boost the average income of an Indian farmer by 5X.",
            "We grow our own herbs from our Farmer families.",
            "With our efficient supply chain, we bring the herbs directly from farms to your cups in a minimum span.",
            "People deserve a fresh cup of healthy herbal tea.",
            "90% of our farmers are women, thus inspiring women empowerment in the rural sectors.",
          ].map((line, index) => (
            <p
              key={index}
              ref={(el) => (linesRef.current[index] = el)}
              className="tracking-tighter mb-2"
            >
              {line}
            </p>
          ))}
        </div>
        <img
          data-scroll
          data-scroll-speed="-0.1"
          className="w-[40vh] flex mx-auto sm:h-fit"
          src="https://bluetea.co.in/cdn/shop/files/Our_story_website_image_farmer_1_540x.jpg?v=1717083657"
          alt=""
        />
      </div>
    </div>
  );
};

export default Story;

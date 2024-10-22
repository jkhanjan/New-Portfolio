import React, { useRef } from "react";
import gsap from "gsap";
import { throttle } from "lodash"; // Import throttle from Lodash
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiThreedotjs,
  SiGit,
} from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook

// Icon mapping
const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaGithub: <FaGithub />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
  SiFramer: <SiFramer />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiThreedotjs: <SiThreedotjs />,
  SiGit: <SiGit />,
};

const IconComponent = ({ iconName }) => {
  const Icon = iconMap[iconName];
  return Icon ? <>{Icon}</> : null;
};

const Page3 = () => {
  const container = useRef(null);
  const skillRefs = useRef([]);

  const skills = [
    { name: "HTML", icon: "FaHtml5" },
    { name: "CSS", icon: "SiCss3" },
    { name: "JAVASCRIPT", icon: "FaJs" },
    { name: "TAILWIND CSS", icon: "SiTailwindcss" },
    { name: "REACT JS", icon: "FaReact" },
    { name: "NEXT JS", icon: "SiNextdotjs" },
    { name: "GSAP", icon: "FaJs" },
    { name: "FRAMER MOTION", icon: "SiFramer" },
    { name: "LENIS", icon: "SiScrollreveal" },
    { name: "EXPRESS JS", icon: "SiExpress" },
    { name: "MONGODB", icon: "SiMongodb" },
    { name: "NODE JS", icon: "FaNodeJs" },
    { name: "LOCOMOTIVE JS", icon: "FaJs" },
    { name: "THREE JS", icon: "SiThreedotjs" },
    { name: "REACT THREE FIBER", icon: "FaReact" },
    { name: "GIT", icon: "SiGit" },
    { name: "GITHUB", icon: "FaGithub" },
  ];

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  // Use GSAP with the useGSAP hook and throttle ScrollTrigger
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Throttle function to limit scroll-based animations
    const throttledTimeline = throttle(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=90%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(container.current, {
        backgroundColor: "#3f3f46",
        color: "white",
        duration: 1,
      });

      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const shuffledSkills = shuffleArray(skillRefs.current);

      shuffledSkills.forEach((el) => {
        tl.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            borderColor: "white",
            y: 0,
            duration: 0.5,
            delay: Math.random() * 0.5,
          },
          "-=0.8"
        );
      });
    }, 200); // Throttle the function to only run every 200ms

    throttledTimeline(); // Call the throttled animation function
  }, [skillRefs.current]);

  return (
    <div
      className="w-full h-full sm:h-[100vh] sm:p-10 p-10 sm:mt-6 mt-6 relative z-[100] text-black"
      ref={container}
    >
      <h1
        style={{ fontFamily: "MyCustomFont2" }}
        className="sm:text-9xl text-5xl font-normal border-b-2 sm:border-b-2 border-gray-500 opacity-75 uppercase"
      >
        Skillset Highlights
      </h1>

      <div
        className="sm:h-[80%] h-full w-full flex gap-4 justify-center items-center text-lg"
        style={{ fontFamily: "MyCustomFont" }}
      >
        <div className="w-full flex justify-center items-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="w-fit sm:px-6 px-4 py-2 sm:py-3 rounded-3xl border-[1px] border-black opacity-0 flex items-center gap-2"
            >
              <IconComponent iconName={skill.icon} />
              <p className="sm:text-3xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;

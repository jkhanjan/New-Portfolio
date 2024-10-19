import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiThreedotjs,
  SiGit,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb"; // Example icon

const Page3 = () => {
  const container = useRef(null);
  const skillRefs = useRef([]);

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JAVASCRIPT", icon: <FaJs /> },
    { name: "TAILWIND CSS", icon: <SiTailwindcss /> },
    { name: "REACT JS", icon: <FaReact /> },
    { name: "NEXT JS", icon: <SiNextdotjs /> },
    { name: "GSAP", icon: <FaJs /> }, // Replace with any suitable icon if needed
    { name: "FRAMER MOTION", icon: <SiFramer /> },
    { name: "LENIS", icon: <TbBrandGolang /> }, // Replace with any suitable icon if needed
    { name: "EXPRESS JS", icon: <SiExpress /> },
    { name: "MONGODB", icon: <SiMongodb /> },
    { name: "NODE JS", icon: <FaNodeJs /> },
    { name: "LOCOMOTIVE JS", icon: <FaJs /> }, // Replace with any suitable icon if needed
    { name: "THREE JS", icon: <SiThreedotjs /> },
    { name: "REACT THREE FIBER", icon: <FaReact /> },
    { name: "GIT", icon: <SiGit /> },
    { name: "GITHUB", icon: <FaGithub /> },
  ];

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=90%",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    tl.to(container.current, {
      backgroundColor: "#3f3f46",
      color: "white",
      duration: 1,
    });

    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="w-full h-full sm:h-[100vh] sm:p-10 p-10  sm:mt-6 mt-6 relative z-[100] text-black"
      ref={container}
    >
      <h1
        style={{ fontFamily: "MyCustomFont2" }}
        className="sm:text-7xl text-5xl font-normal border-b-2 sm:border-b-2 border-gray-500 opacity-75"
      >
        SKILL SET
      </h1>

      <div
        className="h-full w-full flex gap-4 justify-center items-center text-lg "
        style={{ fontFamily: "MyCustomFont" }}
      >
        <div className="w-full flex justify-center items-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="w-fit sm:px-6 px-4 py-2 sm:py-3 rounded-2xl border-2 border-black opacity-0 flex items-center gap-2"
            >
              <div className="sm:text-3xl ">{skill.icon}</div>
              <p className="sm:text-3xl ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;

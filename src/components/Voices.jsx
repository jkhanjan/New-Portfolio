import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";

const Voices = () => {
  const elems = [
    {
      subheading: "The best Herbal tea",
      para: "Wow! Keep sipping, keep glowing, Blue Tea is the best",
      para2: "Arshi",
      end: "Social Media professional, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8voisGiQuqwf5RXxDT3MM-hUNmMBKAGEPA&s",
    },
    {
      subheading: "Can't wait for another cup!!",
      para: "Blue Tea gives just the perfect break from my daily chores. Something to look forward to evvery day.",
      para2: "Anuradha",
      end: "StartUp professional, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSznmEhVlLdRkrOlMBPBxTx3OhoKjAEb9-Ng&s",
    },
    {
      subheading: "Best way to start your day",
      para: "A perfect start for my day is incomplete without Blue Tea.",
      para2: "Kalpa",
      end: "Homemaker, Ahemdabad",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6yobsha1tgZnzFkGawPDj1V-LD8m8iSx5Q&s",
    },
    {
      subheading: "Just perfect!",
      para: "A cup of blue tea, yoga and a fresh morning. A combo to live for.",
      para2: "Suparna",
      end: "Online Yoga, Instructor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IdKi5wGXPkz8OOqSo2ANmFlipyY4tconFQ&s",
    },
    {
      subheading: "Calm your mind !!",
      para: "Calmness and Blue Tea are synonymous. What a treat to have!",
      para2: "Sunetra",
      end: "PR Professional, Kolkata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8voisGiQuqwf5RXxDT3MM-hUNmMBKAGEPA&s",
    },
    {
      subheading: "Blue Tea - A Magical Tea",
      para: "Yum! Added to my cocktail and a squeeze of lemon - valla MAGIC! What a color! Thanks Blue tea.You made my day. :D",
      para2: "Ananya",
      end: "Delhi, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8voisGiQuqwf5RXxDT3MM-hUNmMBKAGEPA&s",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    gsap.registerPlugin(ScrollTrigger);

    let isDown = false;
    let startX;
    let scrollLeft;

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
    <div className="p-8 bg-gray-50 w-full">
      <div className="overflow-hidden">
        <h1 className="text-4xl tracking-tighter font-semibold flex items-center justify-center mt-10 sm:text-9xl sm:mt-20 mb-8">
          Customers Opinions
        </h1>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll scrollbar-hide sm:overflow-x-hidden"
      >
        {elems.map((elem, index) => (
          <div
            key={index}
            className="sm:w-[100vw] min-w-[350px] sm:min-w-[650px] sm:h-fit bg-transparent shadow-md rounded-2xl overflow-hidden sm:p-10 relative"
          >
            <img
              data-scroll
              data-scroll-speed="-0.2"
              className="absolute w-full z-[10] opacity-10"
              src={elem.image}
              alt=""
            />
            <div className="relative w-full h-fit flex flex-col items-center leading-0 mt-8 group p-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {elem.subheading}
              </h2>
              {elem.para && (
                <p className="text-gray-600 mb-4 px-10 sm:text-lg">
                  {elem.para}
                </p>
              )}
              {elem.para2 && <p className="text-gray-600 mb-4">{elem.para2}</p>}
              {elem.end && (
                <p className="text-gray-600 mb-4 sm:font-bold">{elem.end}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voices;

import React, { useState, useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const sliderRef = useRef(null);

  const elems = [
    {
      subheading: "Weight Management",
      image:
        "https://bluetea.co.in/cdn/shop/files/Hibiscus-Mint_1800x1800_cd601b79-82a8-424d-9638-b22baa675a1a_1080x.jpg?v=1718707925",
      para: "Experience our Ayurvedic tea for weight management. Boost metabolism, curb cravings, and enjoy a natural path to a healthier you.",
      buttonColor: "red-400",
    },
    {
      subheading: "Skin Care",
      image: "https://bluetea.co.in/cdn/shop/files/BT100PTB.png?v=1718697956",
      para: "Indulge in our Ayurvedic tea for skincare. Nourish your skin from within, promoting a radiant, healthy glow naturally.",
      buttonColor: "blue-400",
    },
    {
      subheading: "Sleep & Calmness",
      image:
        "https://bluetea.co.in/cdn/shop/files/5._30TB_-_CHMINT_31ed28dc-e533-4bbf-a29b-4575cd7e5a65_400x.png?v=1718612538",
      para: "Unwind with our Ayurvedic tea for sleep and calmness. Soothe your mind and body, promoting restful sleep and tranquility naturally.",
      buttonColor: "green-400",
    },
    {
      subheading: "Wellness",
      image:
        "https://bluetea.co.in/cdn/shop/files/1.100g_1800x1800_063a3dd6-c46e-403a-82a4-7a7d8edde808_400x.png?v=1718612686",
      para: "Embrace our Ayurvedic tea for wellness. Enhance your vitality, balance your body, and support overall health naturally.",
      buttonColor: "yellow-400",
    },
  ];

  const totalSlides = elems.length;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      const offset = currentX - dragStartX;
      setDragOffset(offset);
    }
  };

  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      const threshold = sliderRef.current.clientWidth / 6; // Adjust sensitivity
      if (dragOffset < -threshold) {
        goToNextSlide();
      } else if (dragOffset > threshold) {
        goToPrevSlide();
      }
      setDragOffset(0);
    }
  };

  return (
    <motion.div
      className="w-full h-fit relative overflow-hidden"
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="w-full flex justify-between items-center p- sm:px-60 sm:absolute sm:top-0">
        <h1 className="text-3xl sm:text-6xl sm:tracking-tighter">
          In the spotlight
        </h1>
        <div className="flex gap-10 text-2xl sm:text-4xl">
          <BsArrowLeft
            onClick={goToPrevSlide}
            className={currentSlide === 0 ? "hidden" : ""}
          />
          <BsArrowRight
            onClick={goToNextSlide}
            className={currentSlide === totalSlides - 1 ? "hidden" : ""}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out cursor-grab"
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% + ${dragOffset}px))`,
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          {elems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full sm:h-fit flex-shrink-0 p-6 sm:scale-[77%] overflow-hidden"
            >
              <motion.img
                data-scroll
                data-scroll-speed="-0.15"
                src={item.image}
                alt={item.subheading}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={
                  currentSlide === index ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </motion.div>
        <div className="w-full flex flex-col justify-center items-start p-6">
          <motion.img
            src={elems[currentSlide].image}
            alt={elems[currentSlide].subheading}
            className="mb-6 w-[40vh] hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h3
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tighter mb-4 sm:text-5xl"
          >
            {elems[currentSlide].subheading}
          </motion.h3>
          <motion.p
            className=" tracking-tighter text-[1.3rem] leading-none sm:text-[1.5rem] italic"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {elems[currentSlide].para}
          </motion.p>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex mt-4 gap-4"
          >
            <button
              className={`px-5 py-2 text-2xl font-serif rounded-xl bg-${elems[currentSlide].buttonColor}`}
            >
              Shop
            </button>
            <button className="border-b-2 font-semibold border-black">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

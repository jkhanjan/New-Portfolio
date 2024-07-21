import React, { useRef, useEffect, useState } from "react";

const BestOf = () => {
  const elems = [
    {
      subheading: "Hibiscus Classic Herbal Infusion - 100 Teabags",
      image:
        "https://bluetea.co.in/cdn/shop/files/Hibiscus-Mint_1800x1800_cd601b79-82a8-424d-9638-b22baa675a1a_1080x.jpg?v=1718707925",
      price: "749",
      buttonColor: "red-400",
      para: "Delight in the rich taste and numerous benefits of Hibiscus.",
    },
    {
      subheading: "Butterfly Pea Flower Herbal Infusion - 200 teabags",
      image: "https://bluetea.co.in/cdn/shop/files/BT100PTB.png?v=1718697956",
      price: "1249",
      buttonColor: "yellow-400",
      para: "Experience the natural blue tint and health benefits of Butterfly Pea Flower.",
    },
    {
      subheading: "Chamomile Citrus Mint Herbal Infusion - 30 Tea Bags",
      image:
        "https://bluetea.co.in/cdn/shop/files/5._30TB_-_CHMINT_31ed28dc-e533-4bbf-a29b-4575cd7e5a65_400x.png?v=1718612538",
      price: "369",
      buttonColor: "yellow-400",
      para: "Unwind with our Ayurvedic tea for sleep and calmness.",
    },
    {
      subheading: "Flower Herbal Infusion - Pack of 4",
      image:
        "https://bluetea.co.in/cdn/shop/files/01.FrontPackof7_1080x.jpg?v=1718795636",
      price: "749",
      buttonColor: "red-400",
      para: "A curated pack of our finest flower herbal infusions.",
    },
  ];

  const [backgroundImage, setBackgroundImage] = useState("");
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
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

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeaveCard = () => {
    setBackgroundImage("");
  };

  return (
    <div className="p-8 bg-gray-50 sm:h-screen my-auto sm:mt-24 relative">
      <div
        className="absolute inset-0 bg-contain bg-center opacity-10 z-0 transition-opacity transition-background-image duration-500 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <h1 className="text-4xl text-center mb-8 font-serif sm:text-6xl relative z-10">
        Our Best Products
      </h1>
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll scrollbar-hide sm:overflow-x-hidden relative z-10"
      >
        {elems.map((elem, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:w-full bg-white shadow-md rounded-lg overflow-hidden"
            onMouseEnter={() => handleMouseEnter(elem.image)}
            onMouseLeave={handleMouseLeaveCard}
          >
            <div className="relative group">
              <img
                data-scroll
                data-scroll-speed="0.05"
                src={elem.image}
                alt={elem.subheading}
                className="w-full sm:h-[60vh] h-[50vh] object-cover"
              />
              <div className="p-4 absolute bg-slate-50 opacity-90 z-10 bottom-0 left-0 w-full h-20 group-hover:h-60 overflow-hidden transition-all duration-500 ease-in-out">
                <h2 className="text-xl mb-2">{elem.subheading}</h2>
                {elem.price && (
                  <p className="text-lg font-bold text-gray-700 mb-2">
                    ₹{elem.price}
                  </p>
                )}
                {elem.para && <p className="text-gray-600 mb-4">{elem.para}</p>}
                {elem.buttonColor && (
                  <button
                    className={`px-4 py-2 bg-${elem.buttonColor} text-white rounded-md`}
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOf;

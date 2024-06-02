import React, { useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // auto changing slide logic

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const slides = [
    {
      id: 1,
      img: "../assets/hero_banner_1.webp",
    },
    {
      id: 2,
      img: "../assets/hero_banner_3.webp",
    },
    {
      id: 3,
      img: "../assets/hero_banner_4.webp",
    },
  ];

  return (
    <div className="h-[30vh] md:h-[50vh] lg:h-[70vh] xl:h-[100vh] relative ">
      {/* prev and next buttons */}

      <div className="absolute  z-50 cursor-pointer text-white text-2xl top-[50%] left-7 transform translate-x-0 translate-y-[-50%]  ">
        <GrPrevious onClick={handlePrevious} size={30} />
      </div>
      <div className="absolute z-50 cursor-pointer text-white text-2xl top-[50%] right-7 transform translate-x-0 translate-y-[-50%]  ">
        <GrNext onClick={handleNext} size={30} />
      </div>

      {/* navigation dots */}
      <div className="absolute flex gap-2 z-50 bottom-7 left-[50%]">
        {slides.map((slide, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={
              currentIndex === index
                ? "w-3 h-3 cursor-pointer bg-slate-400 rounded-full"
                : "w-3 h-3 cursor-pointer bg-white rounded-full"
            }
          ></div>
        ))}
      </div>

      <div
        className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] xl:h-[100vh] rounded[10px]  bg-center bg-cover   "
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>
    </div>
  );
}

export default HeroImageSlider;

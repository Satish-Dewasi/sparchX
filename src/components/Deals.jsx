import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

function Deals({ title, deals }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    mini_Mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      partialVisibilityGutter: 16,
    },
  };

  return (
    <div className="w-full mt-5 px-5 py-4 h-fit flex flex-col  justify-center gap-5 ">
      <h1 className="text-3xl font-sans font-bold">{title}</h1>

      <Carousel swipeable={true} responsive={responsive}>
        {deals.map((product) => (
          <div
            key={product.id}
            className="w-[300px] h-[400px] mr-5  md:w-[400px]  md:h-[400px]  rounded-md relative "
          >
            <div
              style={{ backgroundImage: `url(${product.images[1]})` }}
              className="w-full h-2/3 rounded-[20px] bg-bottom bg-cover bg-no-repeat "
            ></div>

            <div className=" absolute flex flex-col gap-1 py-2 px-4 shadow-lg rounded-[10px] top-[46%] left-[16px] w-[90%] h-[180px]  bg-white">
              <h1 className="text-2xl capitalize font-bold font-sans">
                {product.name}
              </h1>

              <div className="flex items-center gap-2">
                <span className="flex items-center text-orange-400 ">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                  <IoMdStarOutline />
                </span>
                <p className="text-slate-500">{"(3.5)"}</p>
              </div>
              <div className=" hidden md:flex font-sans text-[18px] text-green-400 ">
                <p className="text-slate-500 mr-1">By </p> Nike
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="font-sans text-2xl flex items-center gap-2">
                  <p className="text-[#3BB77E] font-bold">₹{product.price}</p>
                </div>

                <div>
                  <button className="mr-2 mb-3  p-2  flex items-center gap-2 text-[#3BB77E] bg-[#DEF9EC] rounded-sm  ">
                    <LuShoppingCart className="text-2xl" />
                    <p className="text-xl font-semibold"> Add</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Deals;

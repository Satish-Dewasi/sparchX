import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

function HeroCarausel({ title, products }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full  px-5 py-4 h-fit flex flex-col justify-center gap-5">
      <h1 className="text-3xl font-sans font-bold">{title}</h1>
      <Carousel swipeable={true} responsive={responsive}>
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[150px] md:w-[200px] xl:w-[250px] h-[350px]  md:h-[410px]  flex flex-col border border-slate-500 "
          >
            <div
              style={{ backgroundImage: `url(${product.images[0]})` }}
              className="w-full  h-2/5  md:h-1/2 bg-cover bg-center bg-no-repeat "
            ></div>
            <div className="w-full h-1/2 flex flex-col gap-2 p-1 px-2  ">
              <h1 className="md:text-2xl capitalize text-[22px] font-bold font-sans">
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
                <div className="font-sans text-[18px] md:text-2xl flex items-center gap-2">
                  <p className="text-[#3BB77E] font-bold">₹{product.price}</p>
                </div>

                <div>
                  <button className=" p-1 md:p-2  flex items-center gap-2 text-[#3BB77E] bg-[#DEF9EC] rounded-sm  ">
                    <LuShoppingCart className="text-[18px] md:text-2xl " />{" "}
                    <p className="md:text-xl text-[18px] font-semibold"> Add</p>
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

export default HeroCarausel;

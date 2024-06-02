import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

function HeroList({ title, products }) {
  return (
    <div className="w-full xl:w-1/4 lg:w-1/2 h-auto  flex flex-col gap-5  ">
      <h1 className="text-3xl border-b-2 border-black p-2 w-fit font-sans font-bold">
        {title}
      </h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="md:w-[80%] w-[100%] h-[140px] overflow-hidden flex gap-2   "
        >
          {" "}
          <div
            style={{ backgroundImage: `url(${product.images[0]})` }}
            className="w-[150px] xl:w-[200px] h-[130px] xl:h-[140px] md:h-[110px] rounded-md bg-cover bg-center bg-no-repeat "
          ></div>{" "}
          <div className="w-full h-1/2 flex flex-col gap-2 p-1 px-2  ">
            <h1 className="md:text-2xl capitalize text-[20px] lg:text-[20px] xl:text-2xl font-bold font-sans">
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

            <div className="w-full flex items-center justify-between">
              <div className="font-sans md:text-2xl text-[18px] lg:text-[20px] xl:text-2xl  xl:flex flex items-center gap-2">
                <p className="text-[#3BB77E] font-bold">₹{product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroList;

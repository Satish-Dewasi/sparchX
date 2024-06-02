import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

function ProductDetail() {
  return (
    <div className=" mt-[10vh] pt-6 w-full min-h-screen h-auto justify-center flex flex-col md:flex-row gap-2 lg:gap-8 ">
      {/* ///// */}
      <div className="w-full flex flex-col gap-3 md:w-1/2 xl:w-[40%] 2xl:w-[33%] h-[60vh] sm:h-[90vh]  ">
        <div className="w-full h-[80%] ">
          <img
            className="w-full h-full"
            src="../assets/air-force-1.png"
            alt="img"
          />
        </div>

        <div className="w-full h-[10vh] md:h-[12vh] flex items-center justify-evenly  ">
          <div className=" cursor-pointer w-[20%] h-full ">
            <img
              className="w-full h-full"
              src="../assets/air-force-1.png"
              alt="img"
            />
          </div>

          <div className="w-[20%] h-full cursor-pointer ">
            <img
              className="w-full h-full"
              src="../assets/air-force-1.png"
              alt="img"
            />
          </div>

          <div className="w-[20%] h-full cursor-pointer ">
            <img
              className="w-full h-full"
              src="../assets/air-force-1.png"
              alt="img"
            />
          </div>

          <div className="w-[20%] h-full cursor-pointer ">
            <img
              className="w-full h-full"
              src="../assets/air-force-1.png"
              alt="img"
            />
          </div>
        </div>
      </div>

      {/* jdskfsdflfl */}

      <div className=" px-6 py-4 w-full md:w-1/2 xl:w-[40%] 2xl:w-[33%] flex flex-col gap-2 h-[70vh] sm:h-[90vh] bg-white ">
        <h1 className=" font-sans text-[8vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.3vw] font-semibold ">
          Seeds of Change Organic Quinoa, Brown
        </h1>

        <div className="flex text-2xl items-center gap-2">
          <span className="flex items-center text-orange-400 ">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
            <IoMdStarOutline />
          </span>
          <p className="text-slate-500">{"(3.5)"}</p>
        </div>

        <div className="font-sans text-[8vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.3vw] flex items-center gap-2">
          <p className="text-[#3BB77E] font-bold">$32</p>
        </div>

        <p className="md:text-2xl text-xl ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
          officia, corrupti reiciendis minima nisi modi, quasi, odio minus
          dolore impedit fuga eum eligendi.officia, corrupti reiciendis minima
          nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
        </p>

        <div className=" w-full h-[6vh] mt-[40px] md:mt-[60px] flex gap-4  ">
          {/* quantity selection */}
          <div className="h-full w-fit text-2xl items-center flex pl-4 md:pl-8 pr-2 md:pr-5 py-1 gap-3 md:gap-5 border-2 border-black rounded-md">
            <p className=" text-[25px]">1</p>
            <span className="h-full flex flex-col justify-between">
              <IoIosArrowUp className="cursor-pointer" />
              <IoIosArrowDown className="cursor-pointer" />
            </span>
          </div>

          {/* add to cart */}
          <div className="h-full w-fit  cursor-pointer text-xl md:text-2xl items-center flex  px-3 gap-5 bg-black text-white rounded-md">
            <LuShoppingCart />
            <p>Add to cart</p>
          </div>

          {/* wishlist */}
          <div className="h-full cursor-pointer w-fit text-2xl items-center flex  md:px-3   md:border border-black text-black  rounded-md">
            <IoIosHeart size={35} />
          </div>
        </div>

        {/* <table className=" w-full lg:w-4/5 text-xl mt-[40px] ">
          <tr>
            <td>lorem - lorem</td>
            <td>lorem - lorem</td>
          </tr>

          <tr>
            <td>lorem - lorem</td>
            <td>lorem - lorem</td>
          </tr>

          <tr>
            <td>lorem - lorem</td>
            <td>lorem - lorem</td>
          </tr>

          <tr>
            <td>lorem - lorem</td>
            <td>lorem - lorem</td>
          </tr>
        </table> */}
      </div>
    </div>
  );
}

export default ProductDetail;

import React, { useState } from "react";
import { TbSortAscending2 } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import SideBar from "../components/Siderbar";
import SidebarMobile from "../components/SidebarMobile";
import { products } from "../data/ProductData.js";

function Product() {
  const arr = [1, 2, 3, 4, 56, 7, 88, 8, 78, 888, 233333, 4555];

  console.log(products);

  const [isFilterActive, setFilterActive] = useState(false);

  return (
    <div className="w-full min-h-screen mt-[10vh] ">
      <div
        className={` ${
          isFilterActive && `w-4/5 ml-[20%]`
        } px-5 py-4 h-auto flex items-center justify-end text-[16px] md:text-xl  `}
      >
        <div className="border border-black py-1 md:py-2 px-1 md:px-2 flex">
          <label
            className="flex items-center gap-0 md:gap-2 font-semibold md:pr-2 "
            htmlFor="sort"
          >
            <TbSortAscending2 className="hidden md:block" size={30} /> Sort by :
          </label>
          <select
            className="w-fit outline-none border-none bg-transparent"
            name="sort"
            id="sort"
          >
            <option className="text-[15px]" value="price-inc">
              Price low to high
            </option>
            <option className="text-[15px]" value="price-dec">
              Price high to low
            </option>
            <option className="text-[15px]" value="new">
              Newest
            </option>
          </select>
        </div>
      </div>
      <div
        className={`  ${
          isFilterActive && `w-4/5 ml-[20%]`
        }  px-5 py-1 h-auto   flex items-center justify-between gap-1 text-[22px] md:text-xl `}
      >
        <h1> Found {products.length} items! </h1>

        <button
          onClick={() => {
            setFilterActive((prev) => !prev);
          }}
          className="flex cursor-pointer "
        >
          <span> Filter</span> <MdFilterList size={28} />
        </button>
      </div>

      {/* Product listing */}
      <div className="w-full h-auto relative flex ">
        {isFilterActive && <SideBar />}
        {isFilterActive && <SidebarMobile />}

        <div
          className={
            isFilterActive
              ? "w-full md:w-4/5 h-auto mt-10 flex items-center justify-evenly flex-wrap gap-10  "
              : `w-full px-5  h-auto mt-10 flex items-center justify-evenly flex-wrap gap-10  `
          }
        >
          {products.map((product) => (
            <div
              key={product.id}
              className=" cursor-pointer w-[150px] md:w-[200px] xl:w-[230px] h-[360px]  md:h-[410px]  flex flex-col border border-slate-300 shadow-md rounded-sm "
            >
              <div
                style={{ backgroundImage: `url(${product.images[0]})` }}
                className="w-full  h-2/5  md:h-1/2 bg-cover bg-center bg-no-repeat "
              ></div>
              <div className="w-full h-1/2 flex flex-col gap-2 p-1 px-2  ">
                <h1 className="md:text-2xl capitalize text-[20px] font-bold font-sans">
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
                  <div className="font-sans text-[20px] md:text-2xl flex items-center gap-2">
                    <p className="text-[#3BB77E] font-bold">₹{product.price}</p>
                    {/* <p className="hidden md:block text-slate-500 text-xl line-through mr-1">
                      $45
                    </p> */}
                  </div>

                  <div>
                    <button className="  p-2  flex items-center gap-2 text-[#3BB77E] bg-[#DEF9EC] rounded-sm  ">
                      <LuShoppingCart className="text-[20px] md:text-2xl " />
                      <p className="md:text-xl text-[18px] font-semibold">
                        Add
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

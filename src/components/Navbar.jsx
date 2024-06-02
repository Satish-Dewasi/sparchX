import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(false);
    }
  };

  const [viewCategories, setViewCategories] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 z-50  bg-white h-[10vh]  shadow-lg flex items-center justify-between px-5">
        <IoMdMenu
          className=" lg:hidden md:hidden "
          onClick={toggleNavbar}
          size={27}
        />

        <h1 className=" w-1/3 text-slate-800 font-sans text-[22px] tracking-wide font-bold ">
          URBAN<span className="text-[#ff5631]">TREK</span>
        </h1>
        <ul
          className={
            "list-none  hidden md:flex gap-7 md:gap-8 lg:gap-10  items-center font-roboto font-[400] text-[20px] lg:text-[22px] "
          }
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li
            className="h-full relative"
            onMouseEnter={() => setViewCategories(true)}
          >
            <NavLink to="">Categories </NavLink>
            {viewCategories && (
              <div
                onMouseLeave={() => setViewCategories(false)}
                className="w-[160px] h-[200px] absolute p-3 rounded-sm flex flex-col items-center justify-evenly top-[4vh] shadow-lg bg-white "
              >
                <NavLink className={"w-full hover:bg-slate-300 "} to="/">
                  Sneakers
                </NavLink>
                <NavLink className={"w-full hover:bg-slate-300 "} to="/">
                  Sports
                </NavLink>
                <NavLink className={"w-full hover:bg-slate-300 "} to="/">
                  Casual
                </NavLink>
                <NavLink className={"w-full hover:bg-slate-300 "} to="/">
                  Formal
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/product">Product</NavLink>
          </li>

          <li>
            <NavLink to="/product">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex gap-2 text-[22px]  ">
          <IoIosHeart />
          <IoMdCart />
          <MdAccountCircle />
        </div>
      </nav>

      <div
        className={`fixed w-full h-screen top-0 left-0 z-[999999] transition-transform duration-700 ${
          isActive ? "transform translate-x-0" : "transform -translate-x-full"
        } bg-white`}
      >
        <h1 className="w-full flex justify-end text-right pt-6 px-7">
          <IoCloseSharp onClick={toggleNavbar} size={28} />
        </h1>

        <ul className="list-none w-[100%] h-[70%] flex flex-col gap-8 items-center justify-center font-roboto font-[400] text-[20px] ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li className="relative ">
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

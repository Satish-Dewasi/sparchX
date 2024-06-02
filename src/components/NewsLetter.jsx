import React from "react";
import { GiPaperPlane } from "react-icons/gi";

function NewsLetter() {
  return (
    <div className="w-full h-[30vh] md:h-[40vh] rounded-[20px] overflow-hidden flex items-center justify-between bg-[#d8f1e5] ">
      <div className="md:w-[50%] w-full p-4   h-[100%] flex flex-col gap-4 md:gap-6 justify-center   ">
        <h1 className="md:text-4xl text-[22px] font-bold font-sans ">
          Subscribed to our newsletter & get update of new product launch...
        </h1>
        <p className="font-sans text-slate-500 text-[18px] md:text-[20px] ">
          Lorem ipsum dolor sit amet.
        </p>

        <div className="bg-white pl-6 w-[100%] xl:w-[60%] h-[45px] md:h-[90px] flex items-center justify-between rounded-[50px] ">
          <GiPaperPlane className="text-[16px] md:text-2xl" />
          <input
            className="border-none outline-none w-[55%] text-[16px] md:text-xl xl:text-2xl   h-full "
            type="email"
            placeholder="Your email address"
          />
          <button className="bg-[#3BB77E] h-full cursor-pointer rounded-[50px] w-[100px] md:w-[180px] p-2 text-[16px] md:text-xl xl:text-2xl text-white ">
            Subscribe
          </button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(../assets/b.png)` }}
        className="w-2/5 h-[100%] hidden md:block bg-center bg-no-repeat bg-cover "
      ></div>
    </div>
  );
}

export default NewsLetter;

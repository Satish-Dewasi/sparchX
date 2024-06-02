import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-auto bottom-2">
      <div className="w-full h-auto bg-[#212529] flex-wrap flex  justify-center gap-10 py-10">
        <div className="w-[200px] h-auto lg:h-[230px]   text-sm text-slate-400 flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[20px] font-semibold text-white mb-2">
            Conctact
          </h1>
          <p>9489985959</p>
          <p>Example@gmail.com</p>
        </div>

        <div className="w-[200px] h-auto lg:h-[230px]   text-sm text-slate-400 flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[20px] font-semibold text-white mb-2">Explore</h1>
          <p>Home</p>
          <p>Blog</p>
          <p>My Blog</p>
          <p>About</p>
          <p>Career</p>
        </div>

        <div className="w-[200px] h-auto lg:h-[230px]   text-sm text-slate-400 flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[20px] font-semibold text-white mb-2">
            Headquater
          </h1>
          <p>101 Main road </p>
          <p>Near Raj Place, Jaipur</p>
          <p>Rajasthan, India </p>
        </div>

        <div className="w-[200px] h-auto lg:h-[230px]  text-sm text-slate-400 flex flex-col items-start justify-start gap-4 ">
          <h1 className="text-[20px] font-semibold text-white mb-2">
            Connections
          </h1>
          <div className="flex gap-3 text-white">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaGithub />
          </div>
        </div>
      </div>

      <div className="w-full h-[60px] bg-[#343A40] text-white flex items-center justify-between px-10">
        <div>2024 | ⓒ Dewasi IT Soltutions firm </div>
      </div>
    </div>
  );
}

export default Footer;

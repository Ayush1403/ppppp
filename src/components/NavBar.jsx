import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const NavBar = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to(".navbar",{
            backgroundColor: "rgba(244, 241, 235, 1)",
            
            scrollTrigger:{
                trigger: ".navbar",
                
                endTrigger:".hero",
                start:"clamp(bottom bottom)"
            }
        })
    })
  return (
    <nav className="h-fit navbar fixed top-0 z-50 p-2 flex px-40 justify-between items-center w-full">
      <h1 className="text-[2.1rem] flex justify-center items-center font-display font-bold text-gray-900">
        <span className="text-amber-700 w-15 h-15 font-normal text-[3rem]">
          <img
            src="/images/logo.png"
            className="size-full object-covered"
            alt="/images/logo.png"
          />
        </span>
        Ayush{" "}
      </h1>

      <div className="flex gap-8 text-lg font-medium font-display-alt">
        <a
          href="#pricing"
          className="hover:text-amber-700 inline-block relative  after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
        >
          {" "}
          Features
        </a>
        <a
          href="#pricing"
          className="hover:text-amber-700 inline-block relative  after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
        >
          Pricing
        </a>
        <a
          href="#pricing"
          className="hover:text-amber-700 inline-block relative  after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
        >
          {" "}
          Contact
        </a>
      </div>
      <button className="bg-black text-white p-4 px-6 rounded-full">
        Download Resume
      </button>
    </nav>
  );
};

export default NavBar;

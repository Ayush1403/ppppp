import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const words = new SplitText(".hero-text", { type: "words,lines",
      mask: "lines"
     });
    gsap.from(words.words, {
     
      y: 100,
      
      opacity: 0,
      stagger: 0.06,
      duration: 0.5,
    });
    gsap.from(".line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power2.out",
    });
    return () => {
      words.revert();
    };
  });

  useGSAP(() => {
    const btn = document.querySelector(".btn-mask");

    const tl = gsap.timeline({ paused: true });

    tl.to(".btn-text", {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.out",
     
    });

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());
  });

  useGSAP(() => {
    const split = new SplitText(".btn2", {
      type: "chars",
    });
    const btn2 = document.querySelector(".btn-j");

    const tl2 = gsap.timeline({ paused: true });

    tl2.to(split.chars, {
      yPercent: -100,
      duration: 0.4,
      stagger: 0.01,
      ease: "power2.out",
    });
    btn2.addEventListener("mouseenter", () => tl2.play());
    btn2.addEventListener("mouseleave", () => tl2.reverse());

    gsap.to(".subhero", {
      yPercent: -30,
    
      opacity:0,
      scrollTrigger: {
        trigger: ".hero",
        start: "clamp(top center)",
        endTrigger: ".project",
        end: "clamp(top top)", // how long hero stays pinned
        pin: true,
        pinSpacing: false,
        scrub: true,
        
      
      },
    });

    return () => split.revert();
  });

  return (
    <div
    id="hero"
    className="w-full hero relative overflow-hidden min-h-dvh flex  justify-center px-10 bg-cover bg-center text-shadow-cards items-center"
    
    style={{backgroundImage: `url(${"images/herobg.jpg"})`}}>
        {/* <svg
          className="absolute inset-0 w-full h-full will-change-transform"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <rect width="60" height="60" fill="#171719" />
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#141416"
                strokeWidth="15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg> */}
      <div className="w-full z-0 subhero flex flex-col justify-center items-center">
      
          <h1 className="uppercase hero-text tracking-wider w-[75%] md:w-[55%] font-display text-primary text-xs md:text-xl">
            Your Creative buddy
          </h1>
          <h1 className="text-[2.1rem] md:text-[4rem] lg:text-[7rem] hero-text text-primary font-display font-bold leading-[0.95]">
            Ayush Srivastava
          </h1>
          
            <p className="uppercase hero-text w-full md:w-3/4 lg:w-1/2 tracking-wider font-display mt-10 text-primary text-center text-xs md:text-xl">
              Helping ambitious brands make their mark in the digital world.
            </p>
         
        

        <div className="flex flex-col mt-10 md:flex-row justify-center w-full md:gap-10 ">
          <button className="group bg-primary cursor-pointer text-cards px-8 py-4  rounded-full text-lg font-medium overflow-hidden relative">
            <span className="btn-mask block relative  overflow-hidden">
              <span className="btn-text block">View Our Work</span>
              <span className="btn-text absolute left-0 top-full">
                View Our Work
              </span>
            </span>
          </button>

          <button className="bg-transparent btn-j border-2 cursor-pointer group overflow-hidden border-primary text-primary px-8 py-4 mt-2  relative rounded-full text-lg font-medium transition">
            <span className="block relative overflow-hidden">
              <span className="btn2 block">Get in Touch</span>
              <span className="absolute btn2 left-0 top-full">
                Get In Touch
              </span>
            </span>
          </button>
        </div>
      </div>
    
      
    </div>
  );
};

export default Hero;

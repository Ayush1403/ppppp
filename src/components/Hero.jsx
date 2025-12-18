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
    const words = new SplitText(".hero-text", { type: "words" });
    gsap.from(words.words, {
      rotate: "5deg ",
      y: 20,
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
      skewY: 2,
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

    gsap.to(".hero", {
      y: 100,

      scrollTrigger: {
        trigger: ".hero",
        start: "clamp(top center)",
        endTrigger: ".project",
        end: "clamp(top top)", // how long hero stays pinned
        pin: true,
        pinSpacing: false, // 🔥 THIS enables overlap
        scrub: true,
      
      },
    });

    return () => split.revert();
  });

  return (
    <div className="w-full hero relative overflow-hidden h-dvh py-45 justify-center px-20 mt-20 flex text-shadow-cards items-center">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="polka-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1.5" fill="rgba(0, 0, 0, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#F4F1EB" />
        <rect width="100%" height="100%" fill="url(#polka-dots)" />
      </svg>
      <div className="w-3/4 z-0 flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="uppercase hero-text tracking-wider font-display text-black/40 text-xs md:text-xl">
            Your Creative buddy
          </h1>
          <h1 className="text-[2.1rem] md:text-[4rem] lg:text-[7rem] hero-text font-display font-bold leading-[0.95]">
            We craft <span className="digital bg-cards text-primary px-2 rounded-xl hover:animate-bounce">
              digital
            </span>
            <br /> experiences that
            <br />
            <span className="relative ">
              move people
              <div className="w-full line h-2 bg-amber-700 origin-left absolute left-0 -bottom-3"></div>
            </span>
          </h1>
          <div className="w-full mt-6">
            <p className="uppercase hero-text w-full md:w-3/4 lg:w-1/2 tracking-wider font-display mt-10 text-black/40 text-xs md:text-xl">
              Strategy, design, and development for ambitious brands ready to
              make their mark in the digital world.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start w-full md:gap-10 ">
          <button className="group bg-cards cursor-pointer text-white px-8 py-4 mt-10 rounded-full text-lg font-medium overflow-hidden relative">
            <span className="btn-mask block relative  overflow-hidden">
              <span className="btn-text block">View Our Work</span>
              <span className="btn-text absolute left-0 top-full">
                View Our Work
              </span>
            </span>
          </button>

          <button className="bg-transparent btn-j border-2 cursor-pointer group border-black/40 text-black/40 px-8 py-4 mt-10 overflow-hidden relative rounded-full text-lg font-medium hover:bg-gray-100 transition">
            <span className="block relative overflow-hidden">
              <span className="btn2 block">Get in Touch</span>
              <span className="absolute btn2 left-0 top-full">
                Get In Touch
              </span>
            </span>
          </button>
        </div>
      </div>
    
      <div className="w-1/2 z-50 hidden xl:block">
  <img
    src="/images/image.png"
    alt="Hero"
    className="w-full h-full object-contain"
  />
</div>
    </div>
  );
};

export default Hero;

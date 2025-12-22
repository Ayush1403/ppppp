import React from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger , SplitText } from "gsap/all";
const Services = () => {
  gsap.registerPlugin(ScrollTrigger , SplitText)
  const isMobile = useMediaQuery({
    query: "(max-width:1090px) "
  })


  useGSAP(()=>{
    const split = new SplitText(".about",{
      type: "words,lines",
      mask:"words",
    })

    gsap.from(split.words,{
      xPercent:-100,
      ease:"power2.in",
      duration:2,
      stagger:0.01,
      scrollTrigger:{
        trigger: ".services",
        start:"clamp(top 60%)",
       end:"clamp(bottom top)",
       toggleActions: "play none none reverse",
       markers:true,
      }
    })
  })
  
  return (
    <>
    {!isMobile ? (
      <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col relative items-center justify-center">
     <div className="w-[90%] flex">
       <div className="w-1/2 justify-center items-center">
        <h1 className="text-[64px] about text-primary  font-display font-stretch-90% tracking-tighter font-bold ">
          Hi! I’m{" "}
          <span className="bg-primary text-cards px-2 rounded-lg">Ayush</span>,{" "}
          <br />
          <span className="text-justify">
            I love building things that make the web feel simple and human.
          </span>
        </h1>
      </div>
      <div className="flex items-center flex-col w-1/2 text-[19.2px] text-primary/90 px-10 justify-center  font-display tracking-tighter font-medium ">
        <p>
          I’m a frontend developer based in India, focused on crafting clean,
        responsive, and intuitive web experiences using modern technologies like
        React and Tailwind CSS.
        </p>
        <p className="mt-6"> I enjoy working at the intersection of design
        and logic—turning ideas into interfaces that not only look good but feel
        right to use. Whether it’s building interactive maps, AI-powered
        dashboards, or thoughtful UI flows, I care deeply about performance,
        accessibility, and user experience.</p>
          <div className="w-full flex mt-8 gap-4">
 <div className="w-1/3 h-[150px] border border-primary/20 bg-primary/5 overflow-hidden rounded-xl p-3 sm:p-4 md:p-5 flex flex-col justify-between hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary">
    Design to Development
  </h3>
  <p className="text-xs sm:text-sm text-primary/80 leading-snug">
    I translate ideas and wireframes into clean, scalable UI while preserving visual intent from concept to code.
  </p>
  <span className="text-[10px] sm:text-xs text-primary/50">
    Figma • React • Component Systems
  </span>
</div>

<div className="w-1/3 h-[150px] border border-primary/20 overflow-hidden bg-primary/5 rounded-xl p-3 sm:p-4 md:p-5 flex flex-col justify-between hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary">
    Performance Matters
  </h3>
  <p className="text-xs sm:text-sm text-primary/80 leading-snug">
    I focus on fast loads, smooth interactions, and efficient state management.
  </p>
  <span className="text-[10px] sm:text-xs text-primary/50">
    Optimized Renders • Lazy Loading • Clean State
  </span>
</div>

<div className="w-1/3 h-[150px] border border-primary/20 overflow-hidden bg-primary/5 rounded-xl p-3 sm:p-4 md:p-5 flex flex-col justify-between hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary">
    Built for Humans
  </h3>
  <p className="text-xs sm:text-sm text-primary/80 leading-snug">
    I design intuitive, accessible, and responsive interfaces that feel effortless to use.
  </p>
  <span className="text-[10px] sm:text-xs text-primary/50">
    Accessibility • Responsiveness • UX Clarity
  </span>
</div>
</div>
      </div>
    
     </div>
    </section>
    ) : (
      <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col relative items-center justify-center ">
     <div className="w-3/4 flex  flex-col gap-10">
       <div className="w-full flex justify-center  items-center">
        <h1 className="text-[40px] about text-primary  font-display-alt uppercase font-stretch-90% leading-tight tracking-tightest font-bold ">
          Hi! I’m{" "}
          <span className="bg-primary text-cards px-2 rounded-lg">Ayush</span>,{" "}
          <br />
          <span className="text-justify">
          I build interfaces
where code meets clarity.
          </span>
        </h1>
      </div>
      <div className="flex items-center flex-col  text-[17.2px] text-primary/90 justify-center  font-display tracking-tighter font-medium ">
        <p>
  Frontend developer based in India, crafting clean and responsive interfaces
  with React and Tailwind CSS.
</p>

<p className="mt-6">
  I blend design and logic to build fast, accessible, and intuitive user
  experiences that feel right to use, focusing on clarity, performance, and
  real-world usability.
</p>

      </div>
     </div>
    </section>
    )}
    </>
  );
};

export default Services;

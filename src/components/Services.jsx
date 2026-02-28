import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const blobRef = useRef(null);
  const blobtRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutheadRef = useRef(null); // ✅ now points directly to h1

  useGSAP(() => {
    const Splitword = new SplitText(aboutheadRef.current, {
      type: "words", // ✅ just chars is enough
    });

    gsap.from(Splitword.words, {
      y: 60,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to(blobRef.current, {
      y: "-=200",
      x: "-=200",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

    gsap.to(blobtRef.current, {
      y: "+=200",
      x: "+=200",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });
    Splitword.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="w-full relative min-h-dvh px-10 md:px-20 py-16 bg-[#0A0A0B] flex items-center justify-center"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-10">
        {/* Text Side */}
        <div className="w-full 2xl:w-1/2 flex flex-col justify-center">
          <h1
            ref={aboutheadRef}
            className="text-white tracking-tight text-[clamp(3rem,8vw,7rem)]  leading-[0.95] font-black uppercase"
          >
            Crafting <br />
            Digital <br />
            Experiences
          </h1>

          <p className="text-white/60 md:text-base text-sm font-normal tracking-wider mt-8 max-w-lg">
            I am a Full Stack Architect specializing in high-performance web
            systems. My approach blends technical precision with visual
            storytelling to create applications that are as powerful as they are
            beautiful.
          </p>
        </div>

        {/* Image/Visual Side */}
        <div className="w-full 2xl:w-1/2 hidden 2xl:flex justify-center  items-center h-[500px]">
          <div className="w-[80%] h-[80%] overflow-hidden border-2  rounded-3xl border-white/10 bg-surface relative backdrop-blur-xl">
            <div
              ref={blobRef}
              className="w-[30%] h-[30%] absolute bg-accent blur-[120px] z-0 right-10 top-1/4"
            ></div>
            <div
              ref={blobtRef}
              className="w-1/4 h-1/4 absolute bg-accent blur-[120px] z-0 left-10 bottom-1/4"
            ></div>
            <div className="flex flex-col absolute top-10 right-10">
              <h1 className="text-white/60 text-lg font-normal tracking-[1rem]">
                01/Design
              </h1>
              <h1 className="text-white/60 text-lg font-normal tracking-[1rem]">
                02/Develop
              </h1>
              <h1 className="text-white/60 text-lg font-normal tracking-[1rem]">
                03/Deploy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

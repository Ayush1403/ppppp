import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Features = ({ projects }) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const isMobile = useMediaQuery({
    query: "(max-width: 1486px)",
  });

  const cardsRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(".heading", {
      type: "words,lines",
      mask: "lines",
    });

    if (isMobile) return;
    if (!cardsRef.current) return;

    const scrollCards = cardsRef.current;
    const totalWidth = scrollCards.scrollWidth;
    const viewPortWidth = window.innerWidth;

    gsap.to(scrollCards, {
      x: -(totalWidth - viewPortWidth + 300),
      delay: 1,
      scrollTrigger: {
        trigger: ".project",
        start: "clamp(top top)",
        end: `+=${totalWidth + 500}`,
        pin: true,
        scrub: 2,
      },
    });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.09,
      scrollTrigger: {
        trigger: ".project",
        start: "clamp(top top+=300)",
        toggleActions: "play none none reverse",
      },
    });
    return () => {
      split.revert(); // VERY important
    };
  });
  useGSAP(() => {
    const sourceBtn = document.querySelectorAll(".btn-mask");
    
    sourceBtn.forEach((btn) => {

      const btnn = btn.querySelectorAll(".btn")
      
      const tl2 = gsap.timeline({ paused: true });

      tl2.to(btnn, {
        yPercent: -100,

        stagger: 0.01,
        ease: "power3.inOut",
      });

      
      btn.addEventListener("mouseenter", () => tl2.play());
      btn.addEventListener("mouseleave", () => tl2.reverse());
    });
    
  });
  useGSAP(() => {
  const btns = document.querySelectorAll(".btnmask");

  btns.forEach((btn) => {
    const btnn2 = btn.querySelectorAll(".btnn");

    const tl = gsap.timeline({ paused: true });

    tl.to(btnn2, {
      yPercent: -100,
      stagger: 0.06,
      ease: "power3.inOut",
    });

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());
  });
});


    
    



  const techColor = {
    React: "#61DAFB",
    "React-Leaflet": "#199900",
    "Tailwind CSS": "#38BDF8",
    GSAP: "#88CE02",

    "Node.js": "#339933",
    "Express.js": "#ffffff",
    MongoDB: "#47A248",
    JWT: "#FB015B",
  };

  return (
    <section className="min-h-dvh project text-primary  bg-[url(/images/bg.svg)] flex justify-center items-center bg-center bg-cover z-20 relative w-full">
      {!isMobile ? (
        <div className="w-full px-10  overflow-hidden">
          <div
            ref={cardsRef}
            className="flex  items-center text-center  gap-20 cards-track"
          >
            <div className=" w-[40%]">
              <h1 className="text-xl heading font-poppins uppercase tracking-wide w-full text-start ">
                Selected Works
              </h1>
              <h1 className="text-[4rem] heading w-full text-start font-poppins font-bold">
                Featured{" "}
                <span className="text-cards bg-primary px-2">Projects</span>
              </h1>
            </div>
            <div className="flex gap-12  w-[60%]">
              {projects.map((pro, i) => (
                <div
                  className="min-w-[90%] flex font-display font-medium relative flex-col featureCards h-[700px] backdrop-blur-3xl overflow-hidden justify-start items-start border-white/20 group border-2  p-10 rounded-[34px] bg-cards"
                  key={i}
                >
                  <div className="w-full h-2/3 rounded-[17px] overflow-hidden">
                    <img
                      src={pro.image}
                      alt=""
                      className="size-full group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300 ease-linear object-cover"
                    />
                  </div>
                  <h1
                    className="text-cards z-30 
            mt-5 text-xl uppercase
             bg-primary/40 px-2 
             font-display tracking-wider
              font-medium backdrop-blur-3xl 
              drop-shadow-2xl rounded-lg"
                  >
                    {pro.title}
                  </h1>
                  <h1
                    className="text-primary z-30 
            mt-5 text-3xl capitalize
              px-2 
             font-display tracking-wider
              font-bold backdrop-blur-3xl 
              drop-shadow-2xl rounded-lg"
                  >
                    {pro.description}
                  </h1>
                  <span className="w-full flex pl-2 mt-2 gap-4">
                    {pro.tech.map((proj, i) => (
                      <span
                        key={i}
                        className={`border-2 px-2 rounded-sm`}
                        style={{
                          borderColor: `${techColor[proj]}`,
                          color: `${techColor[proj]}`,
                        }}
                      >
                        {proj}
                      </span>
                    ))}
                  </span>

                  <div className="w-fit h-fit flex gap-4 absolute bottom-10 right-10">
                       <button className="border-2 border-primary text-primary overflow-hidden cursor-pointer active:scale-95 px-2 py-2">
                      
                        <a href={pro.link}> <span className="relative block btnmask overflow-hidden">
                        <span className="block btnn">Live Demo</span>
                        <span className="absolute left-0 btnn top-full">
                          Live Demo
                        </span>
                      </span></a>
                      
                    </button>
                    <button className="bg-primary text-cards cursor-pointer active:scale-95 px-2 py-2">
                      <span className="relative block btn-mask overflow-hidden">
                        <span className="block btn">View Source Code</span>
                        <span className="absolute left-0 btn top-full">
                          View Source Code
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-10 py-10 overflow-hidden">
          <div
            ref={cardsRef}
            className="flex flex-col  items-center text-center  gap-20"
          >
            <div className=" w-full">
              <h1 className="text-xl heading font-poppins uppercase tracking-wide w-full text-start ">
                Selected Works
              </h1>
              <h1 className="text-[4rem] heading w-full text-start font-poppins font-bold">
                Featured{" "}
                <span className="text-cards bg-primary px-2">Projects</span>
              </h1>
            </div>
            <div className="flex flex-col gap-8  z-20 w-full">
              {projects.map((pro, i) => (
                <div
                  className="min-w-[90%] featureCards h-fit backdrop-blur-3xl overflow-hidden border-white/20 group border-2 p-4 rounded-[34px] bg-gray-600/25"
                  key={i}
                >
                  <div className="w-full h-1/2 rounded-[17px] overflow-hidden">
                    <img
                      src={pro.image}
                      alt=""
                      className="size-full group:hover:scale-105 transition-all duration-300 ease-linear object-cover"
                    />
                  </div>
                  <h1
                    className="text-cards z-30 
            mt-5 text-xl uppercase
             bg-primary/40 w-fit px-2 
             font-display tracking-wider
              font-medium backdrop-blur-3xl 
              drop-shadow-2xl rounded-lg"
                  >
                    {pro.title}
                  </h1>
                  <h1
                    className="text-primary z-30 
            mt-5 text-2xl capitalize
              px-2 
             font-poppins tracking-wider
              font-medium text-start 
              drop-shadow-2xl rounded-lg"
                  >
                    {pro.description}
                  </h1>
                  <span className="w-full flex flex-wrap pl-2 mt-2 gap-4">
                    {pro.tech.map((proj, i) => (
                      <span
                        key={i}
                        className={`border-2 text-[12px] px-2 rounded-sm`}
                        style={{
                          borderColor: `${techColor[proj]}`,
                          color: `${techColor[proj]}`,
                        }}
                      >
                        {proj}
                      </span>
                    ))}
                  </span>

                  <div className="w-full px-2 h-fit flex gap-4 bottom-10 mt-8 right-10">
                    <button className="border-2 w-1/2 border-primary rounded-[17px] text-primary overflow-hidden cursor-pointer active:scale-95 px-2 py-2">
                      
                        <a href={pro.link}> <span className="relative block btnmask overflow-hidden">
                        <span className="block btnn">Live Demo</span>
                        <span className="absolute left-0 btnn top-full">
                          Live Demo
                        </span>
                      </span></a>
                      
                    </button>
                    <button className="bg-primary w-1/2 text-cards cursor-pointer active:scale-95 px-2 py-2 rounded-[17px]">
                      <span className="relative block btn-mask overflow-hidden">
                        <span className="block btn">View Source Code</span>
                        <span className="absolute left-0 btn top-full">
                          View Source Code
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;

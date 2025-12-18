import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Features = ({ projects }) => {
  useGSAP(() => {
    const split = new SplitText(".heading", {
      type: "words,lines",
      mask: "lines",
    });

    gsap.from(split.words, {
      yPercent: 100,
      opacity: 0.8,
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".project",
        start: "clamp(top 80%)",
        end: "clamp(bottom bottom)",
        
        scrub: true,
      },
    });
    gsap.from(".cover", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".project",
        start: "clamp(top 80%)",
        end: "clamp(bottom bottom)",
        scrub: true,
      },
    });
    ScrollTrigger.create({
      trigger: ".project",
      start: "clamp(top top)",
      end: "+=" + projects.length * window.innerHeight,
      pin: true,
    });

    projects.forEach((proj, i) => {
      gsap.from(`.card-${i}`, {
        yPercent: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".card-c",
          start: () => `clamp(top+=${innerHeight * i} top)`,
          end: () => `clamp(top+=${(i + 1) * innerHeight} top)`,
          scrub: true,
          snap: true,
        },
      });
    });

    return () => {
      split.revert();
    };
  });

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".source").forEach((btn) => {
        const text = new SplitText(btn.querySelectorAll(".source-text"), {
          type: "chars",
        });

        const tl = gsap.timeline({ paused: true });

        tl.to(text.chars, {
          yPercent: -100,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
        });

        btn.addEventListener("mouseenter", () => tl.play());
        btn.addEventListener("mouseleave", () => tl.reverse());
      });
    });

    return () => ctx.revert();
  });

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".sourcee").forEach((btn) => {
        const text = new SplitText(btn.querySelectorAll(".source-textt"), {
          type: "chars",
        });

        const tl = gsap.timeline({ paused: true });

        tl.to(text.chars, {
          yPercent: -100,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
        });

        btn.addEventListener("mouseenter", () => tl.play());
        btn.addEventListener("mouseleave", () => tl.reverse());
      });
    });

    return () => ctx.revert();
  });

 const cardStackHeight = 
    window.innerWidth >= 1536 
      ? projects.length * 70 + 450 // Desktop: compact height
      : projects.length * 50 + 600; // Mobile: taller cards

  const techColors = {
    React: "border-[#38BDF8] text-[#38BDF8]",
    "React-Leaflet": "border-[#22C55E] text-[#22C55E]",
    "Tailwind CSS": "border-[#0891B2] text-[#0891B2]",
    GSAP: "border-[#84CC16] text-[#84CC16]",
    "Node.js": "border-[#22C55E] text-[#22C55E]",
    "Express.js": "border-[#E5E7EB] text-[#E5E7EB]",
    MongoDB: "border-[#4ADE80] text-[#4ADE80]",
    JWT: "border-[#FACC15] text-[#FACC15]",
  };

  return (
    <section id="features" className={` z-20 relative  text-primary  project`}>
      <svg
        className="absolute inset-0 w-full h-full"
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
            <rect width="60" height="60" fill="#1C1B21" />
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#19181D"
              strokeWidth="15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Headings */}
      <div className="pt-20 pb-5 mt-9 px-20">
        <h6 className="font-display uppercase heading text-[0.9rem] 3xl:text-2xl text-primary/70 tracking-wider">
          Selected works
        </h6>
        <h1
          id="heading"
          className="font-display text-primary mt-3 heading text-[2rem] leading-0.4 3xl:text-[3rem] lg:text-[5rem] font-bold "
        >
          Featured {" "}
          <span className="bg-primary cover text-cards px-2 rounded-lg">
            Projects
          </span>{" "}
          
        </h1>
      </div>

      <div
        style={{ height: `${cardStackHeight}px` }}
        className="w-full card-c flex flex-col items-center  gap-10 relative z-10"
      >
        {projects.map((proj, i) => (
          <div
            className={` card-${i} 3xl:w-[80%] w-[95%] h-[500px] md:h=[400px] border border-[#403F44] overflow-hidden shadow-3xl bg-cards rounded-4xl proj text-cards absolute flex flex-col 3xl:flex-row gap-10`}
            style={{ top: ` ${i * 30}px` }}
          >
            <div className="w-full 3xl:w-1/2 h-[40%] 3xl:h-full p-2 xl:p-6">
              <img
                src={proj.image}
                alt=""
                className="size-full object-cover rounded-[17px]"
              />
            </div>
            <div className="3xl:mt-8 w-full 3xl:w-1/2 px-4  pr-4  flex flex-col">
              <h1 className="font-display uppercase text-xs 3xl:text-xl font-bold bg-primary/40 text-cards w-fit p-2 rounded-lg">
                {proj.title}
              </h1>
              <h1
                key={i}
                className="3xl:text-3xl text-[20px] line-clamp-1 mt-3 font-poppins font-medium text-primary"
              >
                {proj.description}
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                {proj.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-1 text-sm rounded-lg border font-medium tracking-wide
        ${techColors[tech] || "border-gray-500 text-gray-400"}
      `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-[18px] hidden 3xl:block mt-6  text-justify mr-10 font-poppins font-light text-primary">
                {proj.explain}
              </p>
              <div className="flex justify-end mt-4 mb-4 3xl:absolute bottom-10 right-10 gap-6">
                <button className="text-[18px] source relative hover:scale-105 transition-all duration-200 cursor-pointer text-justify overflow-hidden border px-2  font-poppins font-light text-primary">
                  <span className="source-mask block relative  overflow-hidden">
                    <span className="source-text block">Source Code</span>
                    <span className="source-text absolute left-0 top-full">
                      Source Code
                    </span>
                  </span>
                </button>
                <button className="text-[18px]  sourcee text-justify border bg-primary p-2 font-poppins font-medium text-cards">
                  <a href={proj.link}>
                    <span className="source-maskk block relative  overflow-hidden">
                      <span className="source-textt block">Working Demo</span>
                      <span className="source-textt absolute left-0 top-full">
                        Working Demo
                      </span>
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

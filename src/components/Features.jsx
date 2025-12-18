import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Features = ({ projects }) => {
  // Heading animation (kept)
  useGSAP(() => {
    const split = new SplitText(".heading", {
      type: "words,lines",
      mask: "lines",
    });

    gsap.from(split.words, {
      yPercent: 100,
      opacity: 0.8,
      stagger: 0.06,
      scrollTrigger:{
        
          trigger:"#features",
          start:"clamp(top 90%)",
          end:"clamp(top top)",
          scrub:true,
          span:true
      }
    });

    gsap.from(".cover", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.06,
      scrollTrigger:{
         
          trigger:"#features",
          start:"clamp(top 90%)",
          end:"clamp(top top)",
          scrub:true
      }
    });

    return () => split.revert();
  });

  // Button hover animation (kept)
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
    <section id="features" className="z-20 relative text-primary">
      {/* Headings */}
      <div className="pt-20 pb-5 mt-20 px-20">
        <h6 className="font-poppins uppercase heading text-[0.9rem] 3xl:text-2xl text-primary/70 tracking-wider">
          Selected works
        </h6>
        <h1 className="font-poppins text-primary mt-3 heading text-[2rem] 3xl:text-[3rem] lg:text-[5rem] font-bold">
          Featured{" "}
          <span className="bg-primary cover text-cards px-2 py-1 rounded-lg">
            Projects
          </span>
        </h1>
      </div>

      {/* Cards (static layout) */}
      <div className="w-full flex flex-col items-center gap-10 mt-20 px-4">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="3xl:w-[80%] w-[95%] h-[500px] border border-[#403F44] shadow-3xl bg-cards rounded-4xl flex flex-col 3xl:flex-row gap-10"
          >
            <div className="w-full 3xl:w-1/2 h-[40%] 3xl:h-full p-2 xl:p-6">
              <img
                src={proj.image}
                alt=""
                className="size-full object-cover rounded-[17px]"
              />
            </div>

            <div className="3xl:mt-8 w-full 3xl:w-1/2 px-4 flex flex-col">
              <h1 className="font-display uppercase text-xs 3xl:text-xl font-bold bg-primary/40 text-cards w-fit p-2 rounded-lg">
                {proj.title}
              </h1>

              <h1 className="3xl:text-3xl text-[20px] mt-3 font-poppins font-medium text-primary">
                {proj.description}
              </h1>

              <div className="flex flex-wrap gap-3 mt-4">
                {proj.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-1 text-sm rounded-lg border font-medium tracking-wide ${
                      techColors[tech] || "border-gray-500 text-gray-400"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-[18px] hidden 3xl:block mt-6 text-justify mr-10 font-poppins font-light text-primary">
                {proj.explain}
              </p>

              <div className="flex justify-end mt-auto mb-6 gap-6">
                <button className="text-[18px] source relative border px-2 font-poppins font-light text-primary overflow-hidden">
                  <span className="source-mask block relative overflow-hidden">
                    <span className="source-text block">Source Code</span>
                    <span className="source-text absolute left-0 top-full">
                      Source Code
                    </span>
                  </span>
                </button>

                <a
                  href={proj.link}
                  className="text-[18px] border bg-primary p-2 font-poppins font-medium text-cards"
                >
                  Working Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

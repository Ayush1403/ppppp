import React from "react";
import { useMediaQuery } from "react-responsive";
const Services = () => {

  const isMobile = useMediaQuery({
    query: "(max-width:1090px) "
  })
  return (
    <>
    {!isMobile ? (
      <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col relative items-center justify-center">
     <div className="w-[90%] flex">
       <div className="w-1/2 justify-center items-center">
        <h1 className="text-[64px] text-primary  font-display font-stretch-90% tracking-tighter font-bold ">
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
      </div>
     </div>
    </section>
    ) : (
      <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col relative items-center justify-center ">
     <div className="w-3/4 flex  flex-col gap-10">
       <div className="w-full flex justify-center  items-center">
        <h1 className="text-[40px] text-primary  font-display-alt uppercase font-stretch-90% leading-tight tracking-tightest font-bold ">
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

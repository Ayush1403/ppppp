import React from "react";

const Services = () => {
  return (
    <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col 2xl:flex-row  relative items-center justify-center px-20">
      <div className="w-full 2xl:w-1/2 flex justify-center">
        <h1 className="text-[2rem] md:text-[5rem] text-primary  font-poppins font-stretch-90% tracking-tighter font-bold ">
          Hi! I’m{" "}
          <span className="bg-primary text-cards md:px-2 rounded-lg">Ayush</span>,{" "}
          <br />
          <span className="">
            I love building things that make the web feel simple and human.
          </span>
        </h1>
      </div>
      <div className="flex items-center flex-col w-full md:w-1/2 text-[1rem] xl:text-xl text-primary/80 md:px-40   font-poppins leading-wider tracking-wider font-normal ">
        <p className="hidden md:block">
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
    </section>
  );
};

export default Services;

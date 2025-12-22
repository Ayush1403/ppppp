import React from "react";

const Services = () => {
  return (
    <section className="services w-full z-20 bg-[#090909] h-dvh flex flex-col md:flex-row  relative items-center justify-center px-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <h1 className="text-[3rem] md:text-[5rem] text-primary  font-display font-stretch-90% tracking-tighter font-bold ">
          Hi! I’m{" "}
          <span className="bg-primary text-cards px-2 rounded-lg">Ayush</span>,{" "}
          <br />
          <span className="text-justify">
            I love building things that make the web feel simple and human.
          </span>
        </h1>
      </div>
      <div className="flex items-center flex-col w-full md:w-1/2 text-[2rem] text-primary/80 md:px-15   font-display tracking-tighter font-normal ">
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
    </section>
  );
};

export default Services;

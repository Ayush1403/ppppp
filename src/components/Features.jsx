import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';


  gsap.registerPlugin(ScrollTrigger);
const Features = ({projects}) => {

  const titleRefs = useRef([]);
  console.log(projects)
  useGSAP(() => {
  titleRefs.current.forEach((el) => {
    if (!el) return;
    gsap.from(el, {
      xPercent: -30,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",

        toggleActions: "play reverse play reverse",
        scrub: 10
      }
    });
  });
});
  return (

   <main className="w-full min-h-fit bg-[#0A0A0B] text-white">
  
   <div className='h-fit w-[90%]  lg:w-[70%] relative'>
     <h1 className='text-primary text-[clamp(2rem,10vw,12vw)] leading-[0.95] tracking-tight  font-main font-black'>Selected<br />

      Work</h1>
      <h4 className='absolute bottom-0 font-handwritten text-accent italic text-xl right-10' style={{
        fontFamily: "cursive"
      }}>Current Endeavour(2026)</h4>


   </div>
     <div className='w-full min-h-screen mt-40  overflow-x-hidden flex flex-col justify-center items-center'>
    {projects.map((project,index) => (
   <Link to={project.link} className='w-full'>
     <div className='w-full h-screen flex flex-col justify-center items-center bg-surface relative backdrop-blur-xl'>
      <div className='w-full h-[60%] md:h-full absolute' style={{backgroundColor: project.accentColor, filter: "blur(120px)", opacity: 0.04}}></div>
      <h1  ref={(el) => (titleRefs.current[index] = el)} className='text-2xl heading font-main uppercase absolute bottom-30 text-primary/10 tracking-tightest text-[clamp(35vw,20vw,100vw)] font-black z-10'>{project.title}.{project.title}.{project.title}.</h1>

      <div className='w-[80%] h-[80%]  relative flex justify-center items-center border-2 rounded-3xl border-white/10  gap-10'>
 <h1 className='text-2xl font-main uppercase tracking-wider text-[clamp(2rem,10vw,6vw)] font-black z-10'>{project.title}</h1>
 <div className='w-15 h-15 border-b-3 border-r-3  hidden md:block absolute bottom-20 right-20 border-accent'></div>
  <h1 className='absolute top-20 left-20 hidden md:block text-[14px] text-white/20 font-main font-black md:text-4xl'>Click TO See Demo</h1>
 <h1 className='absolute bottom-20 left-20 text-white/20 font-main font-black text-4xl'>{project.id}</h1>
<h6 className='absolute bottom-20 left-40 text-accent font-handwritten text-3xl'>{project.description}</h6>
 <div className='w-15 h-15 border-t-3 border-r-3 absolute top-20 right-20 border-accent'></div>
      </div>
    </div></Link>
   
    ))}
  </div>
   </main>
  )
}

export default Features
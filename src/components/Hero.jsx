import React,{useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const bgRef = useRef(null);


  useGSAP(() => {
    const splitHeading = new SplitText(headingRef.current,{
      type: "words,chars,lines",
      mask: "lines",
    })

    gsap.from(splitHeading.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
    }
    )

    gsap.to(bgRef.current, {
      y:"+=200",
      x:"+=200",
      z:"+=200",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    })
    gsap.to(headingRef.current, {
     
      y: -150,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
    })
  }
  , []);

  return (
    <section ref={heroRef} className='bg-black relative flex w-full justify-center items-center min-h-dvh '>
     <div ref={bgRef} className='w-1/4 h-1/4 absolute bg-accent rounded-full blur-[140px] z-0 right-10 top-1/4'></div>
      <div className='absolute inset-0 z-20 opacity-40'
      style={
       { backgroundImage : `url("https://grainy-gradients.vercel.app/noise.svg")`}
      }>
   </div>
       <div>
         <h1 ref={headingRef} className='text-primary text-[clamp(4rem,12vw,15rem)] font-main font-black text-9xl text-center  uppercase z-50'>AYush  <span className='text-accent uppercase'>srivastava</span></h1>
        <p ref={subheadingRef} className='text-secondary text-center text-[14.4px] tracking-[1rem] font-light font-main z-50 mt-[3rem] uppercase'>Full Stack Developer & VIsual Thinker</p>
       </div>
       
      
    </section>
  )
}

export default Hero
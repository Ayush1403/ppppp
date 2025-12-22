import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Preloader = ({onComplete}) => {

 useEffect(()=>{
            
                document.body.style.overflow="hidden"
          
           return()=>{
             document.body.style.overflow="auto"
           }
        },[])

    useGSAP(()=>{
        
       
        const obj = {value:0}
        const tl =gsap.timeline();
      tl.to(obj,{
        value:100,
        duration:3,
        ease: "power1.inOut",
        
        onUpdate:()=>{
            document.querySelector(".percentage").innerText = Math.floor(obj.value)
        }
      }).to(".progress",{
        width:"100%",
        duration:3,
        ease: "power1.inOut",
      },0)
     .to(".preloader",{
            yPercent:-100,
            duration:1,
            ease: "power1.inOut",
            onComplete:()=>{
                if(onComplete) onComplete()
            }
        })
    },[onComplete])
  return (
    <div className='preloader fixed inset-0 w-screen h-full no-scr bg-black z-999'>
        <h1 className='percentage font-poppins absolute bottom-10 right-10 text-[7rem] text-primary'>0</h1>
        <div className='progress h-4 absolute bottom-0 bg-primary'></div>
    </div>
  )
}

export default Preloader
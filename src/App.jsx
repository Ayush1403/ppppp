import React, { useState, useEffect, useRef } from 'react'
import { NavBar, Hero, Features, Services, Tech } from './components'
import Preloader from './components/Preloader'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const projects = [
    {
      id: "01",
      title: "Sanskriti",
      description: "Heritage Exploratory Platform",
      tech: ["React", "React-Leaflet", "Tailwind CSS", "GSAP"],
      accentColor: "#CBFF00",
      link: "https://sanskrit-omega.vercel.app/",
      explain:
        "An interactive heritage exploration platform featuring map-based navigation, state-wise heritage sites, smooth animations, and a responsive UI for cultural discovery.",
    },
    {
      id: "02",
      title: "TripOn",
      description: "AI Itinerary And Event Booking Platform",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      accentColor: "#FFFFFF",
      link: "https://tripon-kappa.vercel.app/",
      explain:
        "A full-stack platform for AI-based travel itinerary planning and event booking with secure authentication, REST APIs, and scalable backend architecture.",
    },
    {
      id: "03",
      title: "Zentry",
      description: "A Gaming Website",
      tech: ["React", "Tailwind CSS", "GSAP"],
      accentColor: "#CBFF00",
      link: "https://zentry-pink.vercel.app/",
      explain:
        "A modern gaming website with smooth navigation, performance optimizations, and engaging animations focused on user experience.",
    },
    {
      id: "04",
      title: "Makaan",
      description: "A Real Estate Website",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      accentColor: "#FFFFFF",
      link: "https://makaan-gray.vercel.app/",
      explain:
        "A real estate platform showcasing property listings with secure authentication, role-based access, clean UI, and responsive design for seamless browsing.",
    },
  ]

  const [loading, setLoading] = useState(true)
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
  }, [])

 

  return (
    <div className='relative overflow-x-hidden'>
      
      <NavBar />
      <Hero />
      <Services />
      <Features projects={projects} />
      <Tech />
    </div>
  )
}

export default App
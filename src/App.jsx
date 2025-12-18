import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Tech from './components/Tech'
import Services from './components/Services'

/* ================= INTRO SCREEN ================= */

const IntroScreen = ({ show, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const textRef = useRef(null)
  const containerRef = useRef(null)

  const welcomeMessages = [
  { text: "Welcome", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
  { text: "வரவேற்கிறோம்", lang: "Tamil" },
  { text: "ようこそ", lang: "Japanese" },
  { text: "ꯁ꯭ꯋꯥꯒꯠ", lang: "Meitei (Manipuri)" }
]

  useEffect(() => {
    if (!show) return

    const tl = gsap.timeline()

    tl.fromTo(
      textRef.current,
      { opacity: 0,scale:0.9 },
      { opacity: 1, duration: 0.5, ease: "back.out(1.7)",scale:1 }
    )
      .to(
        textRef.current,
        { opacity: 0, duration: 0.2, ease: "back.in(1.7)" },
        "+=0.4"
      )
      .eventCallback("onComplete", () => {
        if (currentIndex < welcomeMessages.length - 1) {
          setCurrentIndex(prev => prev + 1)
        } else {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power2.inOut",
            onComplete
          })
        }
      })

    return () => tl.kill()
  }, [currentIndex, show, onComplete])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-999 flex items-center overflow-y-hidden cursor-none min-h-full justify-center bg-black will-change-transform"
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <h1
        ref={textRef}
        className="text-7xl md:text-9xl font-bold font-display text-primary"
        style={{ perspective: '1000px' }}
      >
         <div className="flex flex-col items-center">
  <span className="text-4xl md:text-9xl font-bold">
    {welcomeMessages[currentIndex].text}
  </span>
  <span className="mt-4 text-sm tracking-widest opacity-70">
    {welcomeMessages[currentIndex].lang}
  </span>
</div>
      </h1>
    </div>
  )
}

/* ================= MAIN APP ================= */

const App = () => {
  const [showIntro, setShowIntro] = useState(true)
  const mainContentRef = useRef(null)

  const projects = [
    {
      title: "Sanskriti",
      description: "Heritage Exploratory Platform",
      tech: ["React", "React-Leaflet", "Tailwind CSS", "GSAP"],
      image: "/images/proj4.png",
      link: "https://sanskrit-omega.vercel.app/",
      explain:
        "An interactive heritage exploration platform featuring map-based navigation, state-wise heritage sites, smooth animations, and a responsive UI for cultural discovery.",
    },
    {
      title: "TripOn",
      description: "AI Itinerary And Event Booking Platform",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "/images/proj1.png",
      link: "https://tripon-kappa.vercel.app/",
      explain:
        "A full-stack platform for AI-based travel itinerary planning and event booking with secure authentication, REST APIs, and scalable backend architecture.",
    },
    {
      title: "Zentry",
      description: "A Gaming Website",
      tech: ["React", "Tailwind CSS", "GSAP"],
      image: "/images/proj2.png",
      link: "https://zentry-pink.vercel.app/",
      explain:
        "A modern gaming website with smooth navigation, performance optimizations, and engaging animations focused on user experience.",
    },
    {
      title: "Makaan",
      description: "A Real Estate Website",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      image: "/images/proj3.png",
      link: "https://makaan-gray.vercel.app/",
      explain:
        "A real estate platform showcasing property listings with secure authentication, role-based access, clean UI, and responsive design for seamless browsing.",
    },
  ]

  /* Fade in main app AFTER intro */
  useEffect(() => {
    if (!showIntro) {
      gsap.fromTo(
        mainContentRef.current,
        { yPercent: 0 },
        { opacity: 1, yPercent: 0, duration: 0.6, ease: "power2.out" }
      )
    }
  }, [showIntro])
  useEffect(() => {
  if (showIntro) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return () => {
    document.body.style.overflow = 'auto'
  }
}, [showIntro])


  return (
    <>
      {/* INTRO */}
      <IntroScreen
        show={showIntro}
        onComplete={() => setShowIntro(false)}
      />
<NavBar />
      {/* MAIN CONTENT */}
      <div
        ref={mainContentRef}
        className={`relative overflow-hidden font-stack min-h-dvh transition-opacity duration-500 ${
          showIntro ? 'pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* BACKGROUND GRID */}
        <svg
          className="absolute inset-0 w-full h-full will-change-transform"
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
              <rect width="60" height="60" fill="#171719" />
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#141416"
                strokeWidth="15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        
        <Hero startAnimation={!showIntro} />
        <Features projects={projects} />
        <Services />
        <Tech />
      </div>
    </>
  )
}

export default App

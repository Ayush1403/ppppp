import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Tech from './components/Tech'
const App = () => {
  
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
];


  return (
    <div className='overflow-x-hidden bg-primary  relative font-stack min-h-dvh'>
      <NavBar />
      <Hero />
     
        <Features projects={projects} />
         <Tech />
        
    </div>
  )
}

export default App
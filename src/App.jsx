import React , {useState} from 'react'
import { NavBar , Hero ,Features , Services ,Tech } from './components'
import Preloader from './components/Preloader'

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
  ]

  const [loading, setloading] = useState(true)
  return (
    
    <div className='relative overflow-x-auto'>
      {loading && <Preloader onComplete={()=>setloading(false)} />}
      <NavBar />
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

        
        <Hero/>
        <Features projects={projects} />
        <Services />
        <Tech />
    </div>
  )
}

export default App
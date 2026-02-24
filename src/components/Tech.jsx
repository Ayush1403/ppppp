import React from 'react'
import { Atom , Code2 , Braces , Paintbrush , Layout , Database , GitBranch , Globe , Zap , Cpu , GraduationCap } from 'lucide-react'
const TechStack = [
  {
    name: 'React',
    icon: Atom,
    category: "Frontend"
  },
  {
    name: 'Tailwind CSS',
    icon: Paintbrush,
    category: "Frontend"
  },
  {
    name: 'JavaScript',
    icon: Braces,
    category: "Frontend"
  },
  {
    name: "GSAP",
    icon: Zap,
    category: "Frontend"
  },
  {
    name: 'Node.js',
    icon: Layout,
    category: "Backend"

  },
  {
    name: 'Express.js',
    icon: Globe,
    category: "Backend"
  },
  {
    name: 'MongoDB',
    icon: Database,
    category: "Backend"
  },
  {
    name: 'Rest API',
    icon: Cpu,
    category: "Backend"
  },
  {
    name: 'Git',
    icon: GitBranch,
    category: "Tools"
  }
 

]
const Education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chandigarh University",
    year: "2021 - 2025"
  },
]
const Tech = () => {
  
  return (
     <section className={`relative z-0  w-full min-h-dvh bg-[#0A0A0B] text-primary flex flex-col lg:flex-row gap-16 justify-center items-center project`}>
    <div className='w-full lg:w-[40%] h-[80%] flex mt-90 lg:mt-0  flex-col'>
      <h6 className="text-secondary font-main tracking-widest text-xl uppercase">capabilities</h6>
      <h1 className='font-main text-[clamp(2rem,8vw,5rem)] leading-[0.95] mt-4  text-wrap tracking-wide  font-bold '>Technical <h6 className='text-gradient'>Stack</h6></h1>
      <div className='px-4 mt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full  gap-4 mt-8'>
          {TechStack.map((tech,i)=>(
          <div className='flex flex-col  overflow-hidden w-full justify-center  '>
            <div key={i} className='h-fit p-6 border-2 bg-[#1A1A1B]/50 backdrop-blur-3xl border-secondary/20 rounded-xl-accent text-[#0A0A0B]  flex rounded-2xl items-center  gap-3 '>
              <tech.icon className=' text-black bg-accent p-2 rounded-xl size-12'/>
             <h5 className='font-normal text-primary text-[16px]'>{tech.name}</h5>

            </div>
           
          </div>
        ))}
        </div>
           
      </div>
    </div>
    <div className='w-full lg:w-[40%] h-[80%] flex  flex-col justify-center items-center lg:justify-start'>
      <h6 className="text-secondary text-start w-[90%] font-main tracking-widest text-xl uppercase">Academics</h6>
      <h1 className='font-main text-start w-[90%]  text-[clamp(2rem,8vw,5rem)] leading-[0.95] mt-4  text-wrap tracking-wide  font-bold '>Education</h1>
      
        {Education.map((edu,i)=>(
          <div key ={i} className='w-[80%] h-[300px] relative flex flex-col overflow-hidden justify-center items-start gap-4 border-2 border-secondary/20 backdrop-blur-3xl bg-[#1A1A1B]/50 p-10 rounded-xl mt-10'>
            <div className='w-1/2 h-1/2 absolute top-0 -right-20 rounded-full bg-accent blur-[120px]'></div>
            <GraduationCap className='bg-accent size-18 p-2 rounded-xl text-[#0A0A0B]'/>
             <h4 className='text-secondary text-sm tracking-widest uppercase font-main'>{edu.institution}</h4>
             <h5 className='text-primary text-sm font-light'>{edu.year}</h5>
            <h3 className='text-primary text-2xl font-main font-bold'>{edu.degree}</h3>
          </div>
        ))}
    </div>
    </section>
  )
}

export default Tech
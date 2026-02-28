import React, { useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1253);
  const menuRef = useRef(null);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 740);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile menu animation
  useGSAP(() => {
    if (open && mobile && menuRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(menuRef.current, 
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.inOut" }
      )
      .from(".menu-item", {
        x: 50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.2");
    }
  }, [open, mobile]);

  const handleMenuClose = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => setOpen(false)
      });
    }
  };

  return (
    <div>
      {!mobile ? (
        <nav className="h-fit navbar bg-[#0A0A0B]/10 border border-gray-400 backdrop-blur-2xl fixed top-0 z-50 p-2 flex px-40 justify-between items-center w-3/4 left-1/2 -translate-x-1/2 mt-8 rounded-full">
         <a href="#main">
           <h1 className="text-3xl flex justify-center items-center font-bold text-primary">
            <span className="text-accent w-15 h-15 font-main text-5xl">
              <img
                src="/images/logo.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </span>
            Ayush
          </h1>
         </a>

          <div className="flex gap-8 text-lg text-primary font-main font-medium">
            <a
              href="#about"
              className="hover:text-accent inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-accent inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-accent inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Contact
            </a>
          </div>
          <a 
            href="https://drive.google.com/file/d/1LDDm20rVj4vV0H06VvL6eu9yZmCGlVs-/view?usp=drive_link"
            download
            className="bg-accent text-[#0A0A0B] font-medium font-main p-4 px-6 rounded-full hover:bg-accent/65 cursor-pointer transition-colors inline-block"
          >
            Download Resume
          </a>
        </nav>
      ) : (
        <>
          <div className="navbar bg-primary/10 backdrop-blur-2xl flex items-center justify-between px-6 py-4 fixed top-0 z-50 w-11/12 left-1/2 -translate-x-1/2 mt-4 rounded-full">
            <h1 className="flex items-center gap-2 font-bold text-primary text-3xl">
              <img
                src="/images/logo.png"
                className="w-10 h-10 object-contain"
                alt="logo"
              />
              Ayush
            </h1>

            <Menu
              className="text-primary cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          {/* MOBILE MENU */}
          <div
            ref={menuRef}
            className={`mobile-menu fixed inset-0 bg-cards z-998 flex flex-col justify-center px-10 ${
              open ? "block" : "hidden"
            }`}
            style={{ transform: "translateX(100%)" }}
          >
            <button
              className="absolute top-6 right-6 text-primary text-2xl"
              onClick={handleMenuClose}
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col text-primary gap-10 text-3xl font-medium">
              <a 
                href="#about" 
                onClick={handleMenuClose}
                className="menu-item hover:text-accent transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={handleMenuClose}
                className="menu-item hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={handleMenuClose}
                className="menu-item hover:text-accent transition-colors"
              >
                Contact
              </a>
              <a 
                href="https://drive.google.com/file/d/1LDDm20rVj4vV0H06VvL6eu9yZmCGlVs-/view?usp=drive_link"
                download
                className="menu-item mt-10 bg-accent text-[#0A0A0B] px-8 py-4 rounded-full text-lg font-medium hover:bg-accent/65 transition-colors cursor-pointer inline-block text-center"
              >
                Download Resume
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
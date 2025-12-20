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
        <nav className="h-fit navbar bg-primary/10 border border-gray-400 backdrop-blur-2xl fixed top-0 z-50 p-2 flex px-40 justify-between items-center w-3/4 left-1/2 -translate-x-1/2 mt-8 rounded-full">
          <h1 className="text-3xl flex justify-center items-center font-bold text-primary">
            <span className="text-amber-700 w-15 h-15 font-normal text-5xl">
              <img
                src="/images/logo.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </span>
            Ayush
          </h1>

          <div className="flex gap-8 text-lg text-primary font-medium">
            <a
              href="#features"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-primary after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Contact
            </a>
          </div>
          <button className="bg-black text-white p-4 px-6 rounded-full hover:bg-gray-800 transition-colors">
            Download Resume
          </button>
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
                href="#features" 
                onClick={handleMenuClose}
                className="menu-item hover:text-amber-700 transition-colors"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={handleMenuClose}
                className="menu-item hover:text-amber-700 transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                onClick={handleMenuClose}
                className="menu-item hover:text-amber-700 transition-colors"
              >
                Contact
              </a>
              <button 
                className="menu-item mt-10 bg-primary text-cards px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
              >
                Download Resume
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
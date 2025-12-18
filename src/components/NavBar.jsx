import React, { useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [open, setOpen] = useState(false);
  const mobile = window.innerWidth <= 740;
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.to(".navbar", {
      backgroundColor: "#F4F1EB",
      scrollTrigger: {
        trigger: ".navbar",
        endTrigger: ".hero",
        start: "clamp(bottom bottom)"
      }
    });
  });

  // Mobile menu animation
  useGSAP(() => {
    if (open && mobile) {
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
  }, [open]);

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
        <nav className="h-fit navbar bg-primary fixed top-0 z-50 p-2 flex px-40 justify-between items-center w-full">
          <h1 className="text-[2.1rem] flex justify-center items-center font-display font-bold text-gray-900">
            <span className="text-amber-700 w-15 h-15 font-normal text-[3rem]">
              <img
                src="/images/logo.png"
                className="size-full object-covered"
                alt="/images/logo.png"
              />
            </span>
            Ayush{" "}
          </h1>

          <div className="flex gap-8 text-lg font-medium font-display-alt">
            <a
              href="#pricing"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              {" "}
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              Pricing
            </a>
            <a
              href="#pricing"
              className="hover:text-amber-700 inline-block relative after:transition-transform after:w-full after:scale-x-0 after:origin-center after:absolute after:content-[''] after:bg-black after:h-1 after:left-0 after:-bottom-2 hover:after:scale-x-100"
            >
              {" "}
              Contact
            </a>
          </div>
          <button className="bg-black text-white p-4 px-6 rounded-full">
            Download Resume
          </button>
        </nav>
      ) : (
        <>
          <div className="w-full  navbar flex items-center justify-between px-6 py-4 fixed top-0 z-50">
            <h1 className="flex items-center gap-2 font-display font-bold text-gray-900 text-[2.1rem]">
              <img
                src="/images/logo.png"
                className="w-10 h-10 object-contain"
                alt="logo"
              />
              Ayush
            </h1>

            <Menu
              className="text-cards cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          {/* MOBILE MENU */}
          <div
            ref={menuRef}
            className={`mobile-menu fixed inset-0 bg-cards z-[999] flex flex-col justify-center px-10 ${
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

            <nav className="flex flex-col text-primary gap-10 text-3xl font-display font-medium">
              <a 
                href="#features" 
                onClick={handleMenuClose}
                className="menu-item"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={handleMenuClose}
                className="menu-item"
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                onClick={handleMenuClose}
                className="menu-item"
              >
                Contact
              </a>
              <button 
                className="menu-item mt-10 bg-primary text-cards px-8 py-4 rounded-full text-lg"
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
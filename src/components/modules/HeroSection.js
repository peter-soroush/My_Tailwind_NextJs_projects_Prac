"use client";
import React, { useState } from "react";
import HamburgerMenu from "../elements/HamburgerMenu";
import MobileMenu from "../elements/MobileMenu";
import Image from "next/image";

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
        <nav className="flex items-center justify-between font-bold text-white">
          <Image
            src="/loopstudio/images/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <div className="max-md:hidden font-alata h-10 md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
          {/* hamburger Button */}
          <HamburgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        </nav>
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} />
        <div
          className="max-w-lg
            mt-32
            mb-32
            p-4
            font-sans
            text-4xl
            text-white
            uppercase
            border-2 md:p10 md:m-32 md:mx-0 md:text-6xl"
        >
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

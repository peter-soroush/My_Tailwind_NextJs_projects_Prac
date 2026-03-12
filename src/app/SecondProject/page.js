import React from "react";
import "./style.css";
import Image from "next/image";
import CreationImages from "@/components/modules/CreationImages";
import Footer from "@/components/modules/Footer";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import MobileMenu from "@/components/elements/MobileMenu";
import HeroSection from "@/components/modules/HeroSection";
import Features from "@/components/modules/Features";
import Creation from "@/components/modules/Creation";
import "../../utils/functions";

export const metadata = {
  title: "LoopStudios",
  description: "Created by Ahmadreza Soroush",
};

function LoopStudio() {
  return (
    <>
      <HeroSection />
      <Features />
      <Creation />
      <Footer />
    </>
  );
}

export default LoopStudio;

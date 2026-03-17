import Image from "next/image";
import React from "react";
import "./style.css";
import FyloHeader from "@/components/modules/FyloHeader";
import FyloHeroSection from "@/components/modules/FyloHeroSection";
import FyloBenefits from "@/components/modules/FyloBenefits";
import FyloDownloads from "@/components/modules/FyloDownloads";
import FyloFAQ from "@/components/modules/FyloFAQ";

function Fylo() {
  return (
    <>
      <div>
        <FyloHeader />
        <FyloHeroSection />
        <FyloBenefits />
        <FyloDownloads />
        <FyloFAQ />
      </div>
    </>
  );
}

export default Fylo;

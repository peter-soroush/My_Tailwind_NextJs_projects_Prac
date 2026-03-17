import Image from "next/image";
import React from "react";
import "./style.css";
import FyloHeader from "@/components/modules/FyloHeader";
import FyloHeroSection from "@/components/modules/FyloHeroSection";
import FyloBenefits from "@/components/modules/FyloBenefits";
import FyloDownloads from "@/components/modules/FyloDownloads";
import FyloFAQ from "@/components/modules/FyloFAQ";
import FyloEarlyAccess from "@/components/modules/FyloEarlyAccess";
import FyliFooter from "@/components/modules/FyliFooter";

function Fylo() {
  return (
    <>
      <div>
        <FyloHeader />
        <FyloHeroSection />
        <FyloBenefits />
        <FyloDownloads />
        <FyloFAQ />
        <FyloEarlyAccess />
        <FyliFooter />
      </div>
    </>
  );
}

export default Fylo;

import React from "react";
import FyloTabs from "../elements/FyloTabs";

function FyloBenefits() {
  return (
    <section
      id="Benefits"
      className="container max-w-2xl mx-auto mb-10  leading-normal mt-14 md:text-4xl"
    >
      <div className="container mx-auto px-6 text-center pb-10 ">
        <div className="">
          <h1 className="text-accentCyan text-3xl font-bold">Why Fylo?</h1>
          <FyloTabs />
        </div>
      </div>
    </section>
  );
}

export default FyloBenefits;

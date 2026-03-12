import React from "react";
import CreationImages from "./CreationImages";

function Creation() {
  return (
    <section id="creation">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="max-md:hidden btn md:block">See ALL</button>
        </div>
        <div className="item-container">
          <CreationImages section="1" />
        </div>
        <div className="item-container mt-10">
          <CreationImages section="2" />
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See ALL</button>
        </div>
      </div>
    </section>
  );
}

export default Creation;

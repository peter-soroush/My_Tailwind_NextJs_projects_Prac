import React from "react";
import "./style.css";
import Image from "next/image";
import CreationImages from "@/components/modules/CreationImages";

export const metadata = {
  title: "LoopStudios",
  description: "Created by Ahmadreza Soroush",
};

function LoopStudio() {
  return (
    <>
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
          </nav>
          {/* Mobile Menu */}
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
      <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md-flex-row md:px-0">
          <Image
            src="/loopstudio/images/desktop/image-interactive.jpg"
            alt="interactive"
            width={800}
            height={800}
          />
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sansa text-4xl text-center text-grey-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in Interactive VR
            </h2>
            <p className="max-w-md font-sansa text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default LoopStudio;

import React from "react";
import "./style.css";
import Image from "next/image";

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
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            <div className="group relative overflow-hidden md:w-1/4">
              <Image
                src="/loopstudio/images/desktop/image-deep-earth.jpg"
                alt="deep Earth"
                width={500}
                height={500}
                className="max-md:hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <Image
                src="/loopstudio/images/mobile/image-deep-earth.jpg"
                alt="deep Earth"
                width={500}
                height={500}
                className="w-full md:hidden"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-linear-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Deep Earth
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoopStudio;

import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width="200"
            height="200"
            className="mx-auto my-16"
          />
          <h3>A history of everything you copy</h3>
          <p className="max-w-2xl mx-auto mb-10 text-2xl text-grayish-blue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strong-cyan duration-200 hover:opacity-80"
            >
              Download for IOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-light-blue duration-200 hover:opacity-80"
            >
              Download for MAC
            </a>
          </div>
        </div>
      </section>

      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayish-blue">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and IOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2 ">
              <Image
                src="/images/image-computer.png"
                width={500}
                height={200}
                alt="Computer"
                className="md:absolute top-0 right-[50%] "
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
              <div>
                <h5>Quick Search</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

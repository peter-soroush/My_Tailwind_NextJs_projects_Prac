"use client";
import Image from "next/image";
import React, { useState } from "react"; // useState باید حتماً ایمپورت شود

function FyloTabs() {
  // تعریف صحیح State
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="fyloTabs">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        {/* ===================== TABS ===================== */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* Tab 1 */}
          <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-accentBlue md:w-1/3 tab">
            <div
              className={`py-5 text-xl md:text-3xl dark:text-white cursor-pointer transition-colors duration-300 ${
                activeTab === 1
                  ? "border-b-4 border-accentBlue"
                  : "border-transparent border-b-4 hover:border-accentBlue"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Universal Access
            </div>
          </div>

          {/* Tab 2 */}
          <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-accentBlue md:w-1/3 tab ">
            <div
              className={`py-5 text-xl md:text-3xl dark:text-white cursor-pointer transition-colors duration-300 ${
                activeTab === 2
                  ? "border-b-4 border-accentBlue"
                  : "border-transparent border-b-4 hover:border-accentBlue"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Trusted Security
            </div>
          </div>

          {/* Tab 3 */}
          <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-accentBlue md:w-1/3 tab">
            <div
              className={`py-5 text-xl md:text-3xl dark:text-white cursor-pointer transition-colors duration-300 ${
                activeTab === 3
                  ? "border-b-4 border-accentBlue"
                  : "border-transparent border-b-4 hover:border-accentBlue"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Reliable
            </div>
          </div>
        </div>

        {/* ===================== PANELS ===================== */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          <div
            className={`flex-col py-5 md:flex-row md:space-x-7 panel ${
              activeTab === 1 ? "flex animate-fade-in" : "hidden"
            }`}
          >
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/Fylo/images/icon-access-anywhere.svg"
                alt="panel1"
                width={1000}
                height={500}
                className="relative z-10 md:absolute md:pr-50"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Access your file from anywhere
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left md:text-2xl">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="text-2xl px-4 py-1 mt-2 font-semibold dark:text-white border-2 dark:hover:text-black dark:border-white rounded-lg md:inline-flex md:hover:bg-accentCyan hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div
            className={`flex-col py-5 md:flex-row md:space-x-7 panel ${
              activeTab === 2 ? "flex animate-fade-in" : "hidden"
            }`}
          >
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/Fylo/images/icon-security.svg"
                alt="panel2"
                width={500}
                height={500}
                className="relative z-10 md:absolute md:pr-50"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Security you can trust
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left md:text-2xl">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="text-2xl px-4 py-1 mt-2font-semibold dark:text-white border-2 dark:hover:text-black dark:border-white rounded-lg md:inline-flex md:hover:bg-accentCyan hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div
            className={`flex-col py-5 md:flex-row md:space-x-7 panel ${
              activeTab === 3 ? "flex animate-fade-in" : "hidden"
            }`}
          >
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/Fylo/images/icon-collaboration.svg"
                alt="panel3"
                width={1000}
                height={500}
                className="relative z-10 md:absolute md:pr-50"
              />
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Real-time Collaboration
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left md:text-2xl">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="text-2xl px-4 py-1 mt-2 font-semibold dark:text-white border-2 dark:hover:text-black dark:border-white rounded-lg md:inline-flex md:hover:bg-accentCyan hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FyloTabs;

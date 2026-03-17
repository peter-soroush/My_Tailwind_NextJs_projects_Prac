import Image from "next/image";
import React from "react";

function FyliFooter() {
  return (
    <>
      <footer className="py-16 bg-veryDarkBlue">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <div
              className="w-25 h-10 md:mb-0 bg-logo-light-mode dark:bg-logo-dark-mode bg-contain bg-no-repeat"
              aria-label="Logo"
            />

            <a href="#features" className="uppercase hover:text-lightRed">
              Features
            </a>
            <a href="#download" className="uppercase hover:text-lightRed">
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-lightRed">
              FAQ
            </a>
          </div>

          <div className="flex space-x-10">
            <a href="#">
              <Image
                src="images/icon-facebook.svg"
                alt=""
                className="h-6 ficon"
                width={25}
                height={10}
              />
            </a>
            <a href="#">
              <Image
                src="images/icon-twitter.svg"
                alt=""
                className="h-6 ficon"
                width={25}
                height={10}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FyliFooter;

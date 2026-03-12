import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8 ">
                <Image
                  className="w-44 md:ml-3"
                  src="/loopstudio/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center space-x-4 md:justify-end">
                <div className="h-8 group">
                  <a href="#">
                    <Image
                      src="/loopstudio/images/icon-facebook.svg"
                      alt="Facebook"
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image
                      src="/loopstudio/images/icon-pinterest.svg"
                      alt="pinterest"
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image
                      src="/loopstudio/images/icon-twitter.svg"
                      alt="twitter"
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <Image
                      src="/loopstudio/images/icon-instagram.svg"
                      alt="Facebook"
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
              </div>
              <div className="font-bold">
                &copy; {new Date().getUTCFullYear()} Loopstudios. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

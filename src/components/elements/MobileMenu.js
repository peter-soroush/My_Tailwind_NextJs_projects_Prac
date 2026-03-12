import React from "react";

function MobileMenu({ isOpen }) {
  return (
    <div
      id="menu"
      className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <a className="hover:text-pink-500" href="#">
        About
      </a>
      <a className="hover:text-pink-500" href="#">
        Careers
      </a>
      <a className="hover:text-pink-500" href="#">
        Events
      </a>
      <a className="hover:text-pink-500" href="#">
        Products
      </a>
      <a className="hover:text-pink-500" href="#">
        Support
      </a>
    </div>
  );
}

export default MobileMenu;

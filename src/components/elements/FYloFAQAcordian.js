import React from "react";
import data from "../../utils/fylofaq.json";

function FYloFAQAcordian() {
  const items = data;
  return (
    <>
      <section id="faq-accordian">
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {items.map((item) => (
              <div
                className="py-1 borer-b outline-none group"
                tabIndex={item.id}
                key={item.id}
              >
                <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                  <div className="transition duration-500 ease group-hover:text-red-500">
                    {item.Question}
                  </div>
                  <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                  <p className="py-2 text-justify text-gray-400">
                    {item.Answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FYloFAQAcordian;

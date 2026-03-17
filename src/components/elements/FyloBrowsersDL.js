import Image from "next/image";
import React from "react";

function FyloBrowsersDL({ Browser, minVersion, BrowserLogo, MarginTop }) {
  return (
    <>
      <div
        className={`flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 dark:shadow-white ${Browser === "Chrome" ? "md:mt-0" : Browser === "Opera" ? "md:mt-20" : "md:mt-10"}`}
      >
        <div className="flex justify-center">
          <Image
            src={`/Fylo/images/${BrowserLogo}.svg`}
            alt={`${Browser}`}
            width={100}
            height={100}
          />
        </div>
        <h5 className="pt-6 text-xl font-bold">Add to {Browser}</h5>
        <p className="text-gray-400">Minimum Version {minVersion}</p>
        <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize"></div>
        <a
          href="#"
          className="block md:w-70 w-90 mx-auto py-3 text-white duration-200 border-2 rounded-lg bg-darkBlue3 hover:text-darkBlue3 hover:bg-white border-darkBlue3"
        >
          Add & Install Extension
        </a>
      </div>
    </>
  );
}

export default FyloBrowsersDL;

import Image from "next/image";
import React from "react";
import data from "../../utils/Info.json";

function CreationImages({ section }) {
  const items = data;
  const firstRow = items.slice(0, 4);

  // Items 5, 6, 7, and 8 (Indices 4, 5, 6, 7)
  const secondRow = items.slice(4, 8);
  return (
    <>
      {section === "1"
        ? firstRow.map((item) => (
            <div className="group item" key={item.id}>
              <Image
                src={`/loopstudio/images/desktop/${item.image}.jpg`}
                alt="deep Earth"
                width={500}
                height={500}
                className="max-md:hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <Image
                src={`/loopstudio/images/mobile/${item.image}.jpg`}
                alt="deep Earth"
                width={500}
                height={500}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5 className="">{item.Title}</h5>
            </div>
          ))
        : secondRow.map((item) => (
            <div className="group item" key={item.id}>
              <Image
                src={`/loopstudio/images/desktop/${item.image}.jpg`}
                alt="deep Earth"
                width={500}
                height={500}
                className="max-md:hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <Image
                src={`/loopstudio/images/mobile/${item.image}.jpg`}
                alt="deep Earth"
                width={500}
                height={500}
                className="w-full md:hidden"
              />
              <div className="item-gradient"></div>
              <h5 className="">{item.Title}</h5>
            </div>
          ))}
    </>
  );
}

export default CreationImages;

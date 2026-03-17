import React from "react";
import FyloMenu from "../elements/FyloMenu";

function FyloHeader() {
  return (
    <>
      <header className="container mx-auto mt-10 px-6 text-center h-40 md:h20">
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:,x-0 md:absolute top-10 left-10"></div>
        <FyloMenu />
      </header>
    </>
  );
}

export default FyloHeader;

import React from "react";
import FyloBrowsersDL from "./FyloBrowsersDL";

function FyloDownloadExtinctions() {
  return (
    <>
      <section id="download-boxes" className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <FyloBrowsersDL
            Browser="Chrome"
            minVersion="62"
            BrowserLogo="logo-chrome"
            MarginTop="0"
          />
          <FyloBrowsersDL
            Browser="Firefox"
            minVersion="55"
            BrowserLogo="logo-firefox"
            MarginTop="20"
          />
          <FyloBrowsersDL
            Browser="Opera"
            minVersion="46"
            BrowserLogo="logo-opera"
            MarginTop="30"
          />
        </div>
      </section>
    </>
  );
}

export default FyloDownloadExtinctions;

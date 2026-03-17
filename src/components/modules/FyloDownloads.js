import React from "react";
import FyloDownloadExtinctions from "../elements/FyloDownloadExtinctions";

function FyloDownloads() {
  return (
    <>
      <section id="downloads">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download Fylo
          </h2>
          <p className="max-w-lg mx-auto text-center text-darkBlue1 dark:text-white">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. Securely share files
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
        </div>
      </section>
      <section>
        <FyloDownloadExtinctions />
      </section>
    </>
  );
}

export default FyloDownloads;

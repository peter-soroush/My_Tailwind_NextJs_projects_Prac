import React from "react";
import FYloFAQAcordian from "../elements/FYloFAQAcordian";

function FyloFAQ() {
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg pxx-6 mx-auto text-center text-darkBlue2 dark:text-white">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>
      <FYloFAQAcordian />
    </>
  );
}

export default FyloFAQ;

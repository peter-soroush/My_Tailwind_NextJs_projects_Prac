import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width="200"
            height="200"
            className="mx-auto my-16"
          />
          <h3>A history of everything you copy</h3>
          <p className="max-w-2xl mx-auto mb-10 text-2xl text-grayish-blue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strong-cyan duration-200 hover:opacity-80"
            >
              Download for IOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-light-blue duration-200 hover:opacity-80"
            >
              Download for MAC
            </a>
          </div>
        </div>
      </section>

      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and IOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2 ">
              <Image
                src="/images/image-computer.png"
                width={500}
                height={200}
                alt="Computer"
                className="md:absolute top-0 right-[50%] md:my-20 "
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
              <div>
                <h5>Quick Search</h5>
                <p className="msx-w-md text-grayish-blue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div>
                <h5>ICloud Sync</h5>
                <p className="msx-w-md text-grayish-blue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h5>Completely History</h5>
                <p className="msx-w-md text-grayish-blue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-24">
            Whether you&apos;re on the go, or at your computer, you can access
            all your Clipboard snippets in a few simple clicks.
          </p>
          <Image
            src="/images/image-devices.png"
            alt="Logo"
            width="1000"
            height="500"
            className="mx-auto"
          />
        </div>
      </section>
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16">
            We&apos;ve got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <Image
                src="images/icon-blacklist.svg"
                alt="icon-blacklist"
                width="35"
                height="35"
                className="mb-6"
              />
              <h5>Create Blacklists</h5>
              <p className="section-content mb-16">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <Image
                src="images/icon-text.svg"
                alt="icon-text"
                width="35"
                height="35"
                className="mb-6"
              />
              <h5>Plain Text Snippets</h5>
              <p className="section-content mb-16">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image
                src="images/icon-preview.svg"
                alt="icon-preview"
                width="35"
                height="35"
                className="mb-6"
              />
              <h5>Sneak Preview</h5>
              <p className="section-content mb-16">
                Quick preview of all your snippets on your clipboard for easy
                access.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <Image
            src="/images/logo-google.png"
            alt="logo-google"
            width="150"
            height="150"
          />
          <Image
            src="/images/logo-hp.png"
            alt="logo-hp"
            width="150"
            height="150"
          />
          <Image
            src="/images/logo-ibm.png"
            alt="logo-ibm"
            width="150"
            height="150"
          />
          <Image
            src="/images/logo-microsoft.png"
            alt="logo-microsoft"
            width="150"
            height="150"
          />
          <Image
            src="/images/logo-vector-graphics.png"
            alt="logo-graphics"
            width="150"
            height="150"
          />
        </div>
      </section>
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for IOS and MacOS</h3>

          <p className="max-w-2xl mx-auto mb-10 text-2xl text-grayish-blue">
            Available for free on the App Store. download for Mac or IOS, Sync
            with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strong-cyan duration-200 hover:opacity-80"
            >
              Download for IOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-light-blue duration-200 hover:opacity-80"
            >
              Download for MAC
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width="100"
              height="100"
              className="scale-50"
            />
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayish-blue">
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strong-cyan">
                      FAQ
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strong-cyan">
                      Contact us
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strong-cyan">
                      Privacy & Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strong-cyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strong-cyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <Image
                    className="duration-200 ficon"
                    src="/images/icon-facebook.svg"
                    alt="facebook"
                    height={25}
                    width={25}
                  />
                </a>
                <a href="#">
                  <Image
                    className="duration-200 ficon"
                    src="/images/icon-instagram.svg"
                    alt="instagram"
                    height={25}
                    width={25}
                  />
                </a>
                <a href="#">
                  <Image
                    className="duration-200 ficon"
                    src="/images/icon-twitter.svg"
                    alt="twitter"
                    height={25}
                    width={25}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;

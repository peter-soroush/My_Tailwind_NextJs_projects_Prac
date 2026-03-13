import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black">
      {/* پدینگ در موبایل و دسکتاپ برای فاصله از لبه‌ها تنظیم شده است */}
      <div className="container max-w-6xl mx-auto px-6 py-12 md:py-10">
        {/* کانتینر اصلی: در دسکتاپ دو طرفه و در موبایل زیر هم */}
        <div className="flex max-md:flex-col items-center md:flex-row md:justify-between gap-12 md:gap-0">
          {/* ================= بلوک سمت چپ ================= */}
          <div className="flex flex-col max-md:items-center md:items-start gap-8 md:gap-6">
            <Image
              src="/loopstudio/images/logo.svg"
              alt="Logo"
              width={144}
              height={24}
              className="w-36 md:w-40"
            />

            {/* لینک‌ها - جایگزینی قطعی gap-6 به جای space-x برای رفع مشکل کلمه Support */}
            <div className="flex max-md:flex-col md:flex-row items-center gap-6 font-bold text-white">
              <div className="group flex flex-col items-center">
                <a href="#">About</a>
                <div className="h-0.5 w-1/2 mt-1 bg-transparent group-hover:bg-white transition-colors"></div>
              </div>
              <div className="group flex flex-col items-center">
                <a href="#">Careers</a>
                <div className="h-0.5 w-1/2 mt-1 bg-transparent group-hover:bg-white transition-colors"></div>
              </div>
              <div className="group flex flex-col items-center">
                <a href="#">Events</a>
                <div className="h-0.5 w-1/2 mt-1 bg-transparent group-hover:bg-white transition-colors"></div>
              </div>
              <div className="group flex flex-col items-center">
                <a href="#">Products</a>
                <div className="h-0.5 w-1/2 mt-1 bg-transparent group-hover:bg-white transition-colors"></div>
              </div>
              <div className="group flex flex-col items-center">
                <a href="#">Support</a>
                <div className="h-0.5 w-1/2 mt-1 bg-transparent group-hover:bg-white transition-colors"></div>
              </div>
            </div>
          </div>

          {/* ================= بلوک سمت راست ================= */}
          <div className="flex flex-col max-md:items-center md:items-start gap-6 text-gray-500">
            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="flex items-center gap-4">
              <a href="#" className="group">
                <Image
                  src="/loopstudio/images/icon-facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="group">
                <Image
                  src="/loopstudio/images/icon-twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="group">
                <Image
                  src="/loopstudio/images/icon-pinterest.svg"
                  alt="Pinterest"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="group">
                <Image
                  src="/loopstudio/images/icon-instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>

            {/* متن کپی‌رایت */}
            <div className="font-bold">
              &copy; {new Date().getUTCFullYear()} Loopstudios. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

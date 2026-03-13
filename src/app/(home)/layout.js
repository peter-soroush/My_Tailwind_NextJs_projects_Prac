import "../globals.css";
import "./style.css"; // فراخوانی استایل‌های مختص صفحه اصلی
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "Tailwind Projects",
  description: "Created by Ahmadreza Soroush",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

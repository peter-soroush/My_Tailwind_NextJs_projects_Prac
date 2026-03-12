import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Alata } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "Clipboard Website",
  description: "Created by Ahmadreza Soroush",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} antialiased`}>{children}</body>
    </html>
  );
}

import "./style.css"; // وارد کردن استایل ایزوله‌شده مخصوص همین پروژه
import { Alata } from "next/font/google";
export default function SecondProjectLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

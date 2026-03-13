import "./style.css";
import { Bai_Jamjuree } from "next/font/google";
export default function FirstProjectLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

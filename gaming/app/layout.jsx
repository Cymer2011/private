
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";

const poppins = Poppins({ subsets: ["latin"],weight:"500" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

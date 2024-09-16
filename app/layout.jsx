import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";
import { Fugaz_One, Questrial, Raleway } from "next/font/google";

const default_font = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-default",
});
const fancy = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-fancy",
});

export const metadata = {
  title: "Mood Tracker",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  //TODO : CREATE HEADER AND FOOTER COMPONENTS AND MOVE HEADER AND FOOTER THERE.
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className="text-base sm:text-lg textGradient font-fancy">
          Mood Tracker
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className="text-indigo-500 font-fancy ">Made with 💛</p>
    </footer>
  );

  return (
    <html lang="en" className={`${default_font.variable} ${fancy.variable}`}>
      <Head />
      <AuthProvider>
        <body className="w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 bg-purple-50 font-default">
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}

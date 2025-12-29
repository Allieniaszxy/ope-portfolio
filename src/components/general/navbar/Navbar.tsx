"use client";

import LinkButton from "@/components/general/LinkButton";
import Logo from "./Logo";
import Link from "next/link";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#skills", label: "Skills" },
  { url: "#resume", label: "Resume" },
  { url: "#about", label: "About" },
  { url: "#projects", label: "Projects" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavbackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavbackground(true);
      if (window.scrollY < 90) setNavbackground(false);
    };
    window.addEventListener("scroll", navHandler);
    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <nav
      className={`h-18 fixed z-50 w-full transition-all duration-300 ${
        navBackground ? "bg-slate-900 shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        <Logo />
        <ul className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/play.pdf"
            label="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
        <button
          className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>

        <MobileNav navOpen={navOpen} />
      </div>
    </nav>
  );
}

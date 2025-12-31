import Link from "next/link";
import { navLinks } from "./Navbar";
import { LuDownload } from "react-icons/lu";
import LinkButton from "../LinkButton";
interface MobileNavProps {
  navOpen: boolean;
}

export default function MobileNav({ navOpen }: MobileNavProps) {
  return (
    <>
      {/* insetBackground */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300
          ${
            navOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          lg:hidden`}
      ></div>

      {/* navLinks */}
      <ul
        className={`fixed right-0 top-0 z-50 h-full w-[80%] sm:w-[60%]
          bg-slate-800 text-white flex flex-col justify-center items-center space-y-2
          transform transition-transform duration-300
          ${navOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden`}
      >
        {navLinks.map((link) => (
          <li key={link.url}>
            <Link
              className="flex justify-center text-xl items-center rounded-lg font-medium hover:bg-slate-700/50 hover:text-cyan-300 transition-all duration-300 border-b border-slate-700/30 w-full text-center py-4 px-6"
              href={link.url}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <LinkButton
          href="/documents/LESHI OPEYEMI SOFIAT-1.pdf"
          label="Download CV"
          download
          icon={LuDownload}
          iconPosition="left"
        />
      </ul>
    </>
  );
}

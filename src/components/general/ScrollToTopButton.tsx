"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-slate-800 cursor-pointer text-white rounded-full grid place-items-center fixed bottom-4 right-4 transition-all`}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

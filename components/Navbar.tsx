"use client";

import { useEffect, useState } from "react";

import useScorllDirection from "../lib/hooks/useScrollDirection";
import useIsScrolledToTop from "../lib/hooks/useIsScrolledToTop";
import MainLogo from "./MainLogo";
import Menu from "./Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScorllDirection();
  const isScrolledToTop = useIsScrolledToTop();

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      // toggle classes when isMenuOpen is true
      document.body.classList.toggle("max-md:overflow-hidden", isMenuOpen);
      document
        ?.getElementById("content")
        ?.classList.toggle("max-md:blur-sm", isMenuOpen);
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isScrolledToTop
          ? "h-24"
          : "h-16 bg-primary-500/50 shadow-lg backdrop-blur-xl"
      } ${scrollDirection === "up" && !isScrolledToTop ? "top-0" : ""} ${
        scrollDirection === "down" && !isScrolledToTop ? "-top-full" : ""
      } fixed z-30 flex w-screen items-center justify-between px-6 transition-all duration-200 lg:px-12 `}
    >
      {/* main logo */}
      <div className="aspect-square w-10 lg:w-11">
        <MainLogo />
      </div>
      {/* mobile menu */}
      <Menu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
      />
    </header>
  );
}

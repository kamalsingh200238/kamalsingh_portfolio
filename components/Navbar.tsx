"use client";
import { useState } from "react";
import Link from "next/link";

import useScorllDirection from "../lib/hooks/useScrollDirection";
import useIsScrolledToTop from "../lib/hooks/useIsScrolledToTop";
import useClickOutsideToClose from "../lib/hooks/useClickOutsideToClose";

const navbarLinks = [
  {
    link: "#about",
    displayName: "About",
  },
  {
    link: "#work",
    displayName: "Work",
  },
  {
    link: "#contact",
    displayName: "Contact",
  },
];

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScorllDirection();
  const isScrolledToTop = useIsScrolledToTop();
  const domNode = useClickOutsideToClose(closeMenu);

  // this function converts 1 => 01 or 2 => 02
  const addZeroInFront = (index: Number): String => {
    return String("0" + index).slice(-2);
  };

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`h-24 top-0 fixed z-30 flex w-screen items-center justify-between px-6 transition-all duration-200 lg:px-12`}
    >
      <div className="aspect-square w-10 lg:w-11">
        <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="main logo">
            <path
              id="Polygon 1"
              d="M3.81347 11.5773L21 1.6547L38.1865 11.5773V31.4226L21 41.3453L3.81347 31.4226V11.5773Z"
              stroke="#60FFD9"
              strokeWidth="2"
            />
            <path
              id="K"
              d="M18.008 28.5V15.54H19.816V21.652L22.792 15.54H24.472L21.912 21.252L24.888 28.5H23.128L20.648 22.42L19.816 23.924V28.5H18.008Z"
              fill="#60FFD9"
            />
          </g>
        </svg>
      </div>
      <div ref={domNode}>
        <button
          className="relative z-50 h-10 w-10 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`${
              isMenuOpen ? "rotate-180" : ""
            } z-50 h-full w-full stroke-secondary-500 transition-all duration-200`}
            viewBox="0 0 148 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className={`${
                isMenuOpen ? "rotate-45" : ""
              } origin-center fill-secondary-500 transition-all duration-200`}
              x="18"
              y={isMenuOpen ? "62" : "27"} // for better animations
              width="112"
              height="10"
              rx="5"
            />
            <rect
              className={`${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } fill-secondary-500 transition-all duration-200`}
              x="18"
              y="62"
              width="112"
              height="10"
              rx="5"
            />
            <rect
              className={`${
                isMenuOpen ? "-rotate-45" : ""
              } origin-center fill-secondary-500 transition-all duration-200`}
              x="18"
              y={isMenuOpen ? "62" : "97"} // for better animations
              width="112"
              height="10"
              rx="5"
            />
          </svg>
        </button>
        <aside
          className={`${
            isMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
          } z-40 grid place-items-center text-sm transition-all duration-200 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:h-screen max-md:w-3/4 max-md:max-w-sm max-md:bg-primary-400 max-md:text-lg`}
        >
          <nav className="flex items-center justify-between gap-8 max-md:flex-col max-md:gap-8">
            <ol className="flex items-center justify-between gap-8 text-tertiary-500 max-md:flex-col max-md:gap-8">
              {navbarLinks.map((link, index) => (
                <li key={link.displayName}>
                  <a
                    href={link.link}
                    title={link.displayName}
                    onClick={toggleMenu}
                    className="hover-underline-animation inline-block py-2 text-center hover:text-secondary-500"
                  >
                    <span className="font-fira text-secondary-500 max-md:block">
                      {addZeroInFront(index + 1)}.{" "}
                    </span>
                    {link.displayName}
                  </a>
                </li>
              ))}
            </ol>
            <button>
              <div className="hover-button-animation rounded-md px-4 py-2 text-sm max-md:mt-4 max-md:px-12 max-md:py-4">
                <Link href={"/"}>Resume</Link>
              </div>
            </button>
          </nav>
        </aside>
      </div>
    </header>
  );
}

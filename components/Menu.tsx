import Link from "next/link";
import { motion } from "framer-motion";

import useClickOutsideToClose from "../lib/hooks/useClickOutsideToClose";
import HamburgerIcon from "./HamburgerIcon";
import {
  linksChildrenVariant,
  linksContainerVariant,
  resumeVariant,
} from "@/lib/animations/navbar";

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

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

export default function Menu({ closeMenu, toggleMenu, isMenuOpen }: Props) {
  const domNode = useClickOutsideToClose(closeMenu);

  // this function converts 1 => 01 or 2 => 02
  const addZeroInFront = (index: Number): String => {
    return String("0" + index).slice(-2);
  };

  return (
    <div ref={domNode}>
      <button
        className="relative z-50 h-10 w-10 md:hidden"
        onClick={toggleMenu}
      >
        <HamburgerIcon isMenuOpen={isMenuOpen} />
      </button>
      <aside
        className={`${
          isMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
        } z-40 grid place-items-center text-sm transition-all duration-200 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:h-screen max-md:w-3/4 max-md:max-w-sm max-md:bg-primary-400 max-md:text-lg`}
      >
        <nav className="flex items-center justify-between gap-8 max-md:flex-col max-md:gap-8">
          <motion.ol
            className="flex items-center justify-between gap-8 text-tertiary-500 max-md:flex-col max-md:gap-8"
            initial="hidden"
            animate="visible"
            variants={linksContainerVariant}
          >
            {navbarLinks.map((link, index) => (
              <motion.li variants={linksChildrenVariant} key={link.displayName}>
                <a
                  href={link.link}
                  title={link.displayName}
                  onClick={toggleMenu}
                  className="hover-underline-animation inline-block py-2 text-center hover:text-secondary-500"
                >
                  <span className="font-fira text-secondary-500 max-md:block md:mr-1">
                    {addZeroInFront(index + 1)}.
                  </span>
                  <span>{link.displayName}</span>
                </a>
              </motion.li>
            ))}
          </motion.ol>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={resumeVariant}
          >
            <Link
              href={"/"}
              className="hover-button-animation rounded-md px-4 py-2 text-sm max-md:mt-4 max-md:px-12 max-md:py-4"
              onClick={toggleMenu}
            >
              Resume
            </Link>
          </motion.div>
        </nav>
      </aside>
    </div>
  );
}

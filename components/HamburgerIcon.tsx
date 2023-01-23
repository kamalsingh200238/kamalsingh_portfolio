import { motion } from "framer-motion";
import { hamburgerVariant } from "@/lib/animations/navbarAnimations";

interface Props {
  isMenuOpen: boolean;
}

export default function HamburgerIcon({ isMenuOpen }: Props) {
  return (
    <motion.svg
      className={`${
        isMenuOpen ? "rotate-180" : ""
      } z-50 h-full w-full stroke-secondary-500 transition-all duration-200`}
      viewBox="0 0 148 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={hamburgerVariant}
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
    </motion.svg>
  );
}

import { motion } from "framer-motion";
import {
  mainLogoPolygonVariant,
  mainLogoTextVariant,
} from "@/lib/animations/navbarAnimations";

export default function MainLogo() {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="42"
      height="43"
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="main logo">
        <motion.path
          id="Polygon 1"
          d="M3.81347 11.5773L21 1.6547L38.1865 11.5773V31.4226L21 41.3453L3.81347 31.4226V11.5773Z"
          stroke="#60FFD9"
          strokeWidth="2"
          variants={mainLogoPolygonVariant}
        />
        <motion.path
          id="K"
          d="M15.598 28.5V13.9545H17.7926V20.9006H17.9702L24.071 13.9545H26.8338L20.9673 20.5028L26.8551 28.5H24.2131L19.5114 22.0014L17.7926 23.9759V28.5H15.598Z"
          fill="#60FFD9"
          variants={mainLogoTextVariant}
        />
      </g>
    </motion.svg>
  );
}

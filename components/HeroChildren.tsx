"use client";

import { motion } from "framer-motion";
import {
  heroChildrenVariant,
  heroContainerVariant,
} from "@/lib/animations/heroAnimations";
import { HeroData } from "@/types/HeroData";

interface Props {
  heroData: HeroData;
}
export default function HeroChildren({ heroData }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroContainerVariant}
      id="hero-section-content"
    >
      <motion.div
        variants={heroChildrenVariant}
        className="mb-5 font-fira text-secondary-500"
      >
        <p>Hi, my name is</p>
      </motion.div>
      <motion.div
        variants={heroChildrenVariant}
        className="mb-5 font-oswald text-4xl font-bold text-tertiary-500 md:text-5xl lg:text-6xl"
      >
        <h1 className="capitalize">kamal singh</h1>
      </motion.div>
      <motion.div
        variants={heroChildrenVariant}
        className="mb-5 font-oswald text-4xl font-bold text-gray-400 md:text-5xl lg:text-6xl"
      >
        <h2>I build things for the web</h2>
      </motion.div>
      <motion.div
        variants={heroChildrenVariant}
        className="mb-12 max-w-lg text-lg lg:text-xl"
      >
        <p>{heroData.description}</p>
      </motion.div>
      <motion.div variants={heroChildrenVariant} className="">
        <Link
          href={"/"}
          className="hover-button-animation inline-block rounded-md px-6 py-3"
        >
          Contact Me
        </Link>
      </motion.div>
    </motion.div>
  );
}

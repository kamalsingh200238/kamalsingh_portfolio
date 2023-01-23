"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  heroChildrenVariant,
  heroContainerVariant,
} from "@/lib/animations/heroAnimations";

export default function HeroChildren({
  heroData,
}: {
  heroData: {
    description: String;
  };
}) {
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
        <h1>Kamal Singh</h1>
      </motion.div>
      <motion.div
        variants={heroChildrenVariant}
        className="mb-5 font-oswald text-4xl font-bold text-gray-400 md:text-5xl lg:text-6xl"
      >
        <h2>I build things for the web</h2>
      </motion.div>
      <motion.div
        variants={heroChildrenVariant}
        className="mb-12 max-w-lg md:text-xl lg:text-lg"
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

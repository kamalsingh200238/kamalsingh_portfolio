"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import { socialsVariant } from "@/lib/animations/socialAnimation";

const socials = {
  github: "https://github.com/kamalsingh200238",
  twitter: "https://twitter.com/Kamalsingh1605",
  linkedIn: "https://www.linkedin.com/in/kamal--singh/",
  emailId: "kamalsingh200239@gmail.com",
};

export default function FixedSocials() {
  return (
    <>
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={socialsVariant}
        className="group fixed bottom-0 left-5 h-72 w-11 max-md:hidden lg:left-8"
      >
        <nav className="relative flex h-full flex-col gap-5 px-3 text-xl">
          <a
            href={socials.github}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href={socials.linkedIn}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <div className="absolute bottom-0 right-1/2 z-10 h-20 w-0.5 translate-x-1/2 bg-gray-400 transition-all duration-200 group-hover:bg-secondary-500" />
        </nav>
      </motion.aside>
      <motion.aside 
        initial="hidden"
        animate="visible"
        variants={socialsVariant}
        className="group fixed bottom-0 right-5 h-80 w-11 px-3 max-md:hidden lg:right-8">
        <nav className="relative h-full text-sm">
          <a
            href={"/"}
            target="_blank"
            className="vertical-text inline-block cursor-pointer text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <p>{socials.emailId}</p>
          </a>
          <div className="absolute bottom-0 right-1/2 z-10 h-20 w-0.5 translate-x-1/2 bg-gray-400 transition-all duration-200 group-hover:bg-secondary-500" />
        </nav>
      </motion.aside>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { scrollVariant } from "@/lib/animations/scrollAnimations";

const contactData = {
  heading: "04. What's next?",
  subHeading: "Get in touch",
  description:
    "If my portfolio has sparked your intrest and you'd like to work with me, do not hesitate to contact me. Currently I'm openly looking for new opportunities and would love to connect with you.",
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mb-12 px-6 py-20 sm:px-12 md:px-28 md:py-24 lg:px-36"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={scrollVariant}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="mb-4 font-fira text-secondary-500">
          {contactData.heading}
        </p>
        <p className="mb-5 font-oswald text-4xl font-semibold text-tertiary-500">
          {contactData.subHeading}
        </p>
        <p className="mb-12 text-lg lg:text-xl">{contactData.description}</p>
        <a
          href="mailto:kamalsingh200238@gmail.com"
          className="hover-button-animation inline-block rounded-md px-6 py-3"
        >
          Say hello
        </a>
      </motion.div>
    </section>
  );
}

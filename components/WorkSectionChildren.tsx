"use client";
import { WorkData } from "@/types/WorkData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css/sea-green'; // this doesn't work
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { scrollVariant } from "@/lib/animations/scrollAnimations";

interface Props {
  workData: WorkData;
}

export default function WorkSectionChildren({ workData }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scrollVariant}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading headingNumber={"02"} headingText={"My Projects"} />
      {/* grid for Featured projects */}
      <div className="grid gap-16 md:gap-24">
        {/* grid for single Featured project */}
        {workData.featured.map((singleFeaturedProject, index) => {
          return (
            <FeaturedProjectGrid
              key={singleFeaturedProject.name}
              index={index}
              singleFeaturedProject={singleFeaturedProject}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

function FeaturedProjectGrid({
  singleFeaturedProject,
  index,
}: {
  singleFeaturedProject: WorkData["featured"][0];
  index: number;
}) {
  // to change position of image in the grid
  const order = index % 2 === 0 ? "" : "lg:order-1";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scrollVariant}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid items-center gap-5 rounded-md p-6 shadow-2xl lg:grid-cols-2 lg:gap-10 lg:p-10">
        <div className={`${order}`}>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              gap: "1rem",
            }}
          >
            {singleFeaturedProject.images.map((image) => {
              return (
                <SplideSlide key={image.link}>
                  <div className="relative aspect-square w-full">
                    <Image
                      className="object-contain"
                      src={image.link}
                      alt={image.alt}
                      fill={true}
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className="text-lg">
          <p className="mb-2 font-fira text-xs text-secondary-500">
            Featured Poject
          </p>
          <p className="mb-3 font-oswald text-xl font-semibold text-tertiary-500 lg:text-2xl">
            {singleFeaturedProject.name}
          </p>
          <p className="mb-5">{singleFeaturedProject.description}</p>
          <ul className="mb-5 list-outside list-disc pl-4 text-tertiary-500 marker:text-secondary-500">
            {singleFeaturedProject.features.map((singleFeature) => {
              return (
                <li key={singleFeature} className="">
                  {singleFeature}
                </li>
              );
            })}
          </ul>
          <ul className="mb-5 flex flex-wrap gap-5">
            {singleFeaturedProject.techUsed.map((tech) => {
              return (
                <li key={tech} className="font-fira text-sm">
                  {tech}
                </li>
              );
            })}
          </ul>
          <div className="flex text-xl">
            <a
              target="_blank"
              className="inline-block p-3 text-tertiary-500 transition-all duration-200 hover:text-secondary-500"
              href={singleFeaturedProject.repoLink}
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              className="inline-block p-3 text-tertiary-500 transition-all duration-200 hover:text-secondary-500"
              href={singleFeaturedProject.liveLink}
              rel="noreferrer"
            >
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

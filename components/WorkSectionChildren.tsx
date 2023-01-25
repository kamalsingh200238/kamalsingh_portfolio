"use client";
import { WorkData } from "@/types/WorkData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css/sea-green'; // this doesn't work
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeading from "./SectionHeading";

interface Props {
  workData: WorkData;
}

export default function WorkSectionChildren({ workData }: Props) {
  return (
    <div>
      <SectionHeading headingNumber={"02"} headingText={"My Projects"} />
      {/* grid for Featured projects */}
      <div className="">
        {/* grid for single Featured project */}
        {workData.featured.map((singleFeaturedProject) => {
          return (
            <div
              key={singleFeaturedProject.name}
              className="grid items-center gap-5 lg:gap-10 rounded-md p-6 lg:p-10 shadow-2xl lg:grid-cols-2"
            >
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
              <div className="text-lg">
                <p className="mb-2 font-fira text-xs text-secondary-500">
                  Featured Poject
                </p>
                <p className="mb-3 font-oswald text-xl font-bold text-tertiary-500">
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
                <ul className="flex flex-wrap gap-5 mb-5">
                  {singleFeaturedProject.techUsed.map((tech) => {
                    return (
                      <li key={tech} className="font-fira text-sm">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <div className="text-xl flex">
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
          );
        })}
      </div>
    </div>
  );
}

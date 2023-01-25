"use client";
import { WorkData } from "@/types/WorkData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css/sea-green'; // this doesn't work
import Image from "next/image";
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
              className="grid md:grid-cols-2 gap-5 items-center drop-shadow-lg"
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
                <p className="font-fira text-secondary-500 text-xs mb-2">Featured Poject</p>
                <p className="font-oswald font-semibold text-tertiary-500 text-xl mb-3 tracking-wide">
                  {singleFeaturedProject.name}
                </p>
                <p className="mb-5">{singleFeaturedProject.description}</p>
                <ul className="list-outside list-disc marker:text-secondary-500 text-tertiary-500 pl-4 mb-5">
                  {singleFeaturedProject.features.map((singleFeature) => {
                    return <li key={singleFeature} className="">{singleFeature}</li>;
                  })}
                </ul>
                <ul className="flex flex-wrap gap-5">
                  {singleFeaturedProject.techUsed.map((tech) => {
                    return (
                      <li key={tech} className="font-fira text-sm">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

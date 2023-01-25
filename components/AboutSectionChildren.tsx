import Image from "next/image";
import { AboutData } from "@/types/AboutData";
import SectionHeading from "./SectionHeading";

interface Props {
  aboutData: AboutData;
}

export default function AboutSectionChildren({ aboutData }: Props) {
  return (
    <div className="">
      <SectionHeading headingNumber={"01"} headingText={"About Me"} />
      <div className="lg:px-5">
        <div className="mb-14 grid place-items-center gap-12 md:mb-16 md:grid-cols-2">
          <div>
            <p className="text-lg lg:text-xl">{aboutData.description}</p>
          </div>
          <div className="group relative isolate aspect-square h-52 rounded-md lg:h-72">
            <Image
              priority={true}
              fill={true}
              src={aboutData.image.link}
              className="rounded-md object-cover mix-blend-multiply transition-all duration-200 group-hover:mix-blend-normal"
              alt={aboutData.image.alt}
            />
            {/* backroung in which image blends */}
            <div className="absolute inset-0 -z-10 aspect-square w-full rounded-md bg-secondary-500 transition-all duration-200" />
            {/* moving border behind the image */}
            <div className="absolute top-5 left-5 -z-20 aspect-square w-full rounded-md border-2 border-secondary-500  transition-all duration-200 group-hover:left-3 group-hover:top-3" />
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-oswald text-lg font-bold text-tertiary-500 md:mb-6 md:text-xl lg:mb-8 lg:text-2xl">
            Technologies I{"'"}ve worked with
          </h3>
          <ul className="grid list-inside list-disc grid-cols-2 justify-items-start text-center text-tertiary-500 md:grid-cols-3 md:px-5 lg:grid-cols-4 lg:px-6">
            {aboutData.techstack.map((singleTech: String, index) => {
              return (
                <li
                  key={index}
                  className="marker:text-secondary-500 md:text-lg"
                >
                  {singleTech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

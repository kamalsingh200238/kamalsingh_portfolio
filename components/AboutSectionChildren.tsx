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
            <p className="md:text-lg">{aboutData.description}</p>
          </div>
          <div className="group relative aspect-square h-52 rounded-md lg:h-72">
            <Image
              priority={true}
              fill={true}
              src={aboutData.image.link}
              className="z-10 rounded-md object-cover"
              alt={aboutData.image.alt}
            />
            {/* see through color overlay on image */}
            <div className="absolute inset-0 z-20 aspect-square w-full rounded-md bg-secondary-500 opacity-60 transition-all duration-200 group-hover:bg-transparent" />
            {/* moving border behind the image */}
            <div className="absolute top-5 left-5 aspect-square w-full rounded-md border-2 border-secondary-500  transition-all duration-200 group-hover:left-3 group-hover:top-3" />
          </div>
        </div>
        <div>
          <h3 className="font-oswald text-lg mb-5 md:mb-6 lg:mb-8 font-bold text-tertiary-500 md:text-xl lg:text-2xl">
            Technologies I{"'"}ve worked with
          </h3>
          <ul className="grid list-inside list-disc grid-cols-2 justify-items-start text-center text-gray-400 md:grid-cols-3 md:px-5 lg:grid-cols-4 lg:px-6">
            {aboutData.techstack.map((singleTech: String, index) => {
              return (
                <li key={index} className="marker:text-secondary-500 md:text-lg">
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
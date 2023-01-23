import AboutSectionChildren from "./AboutSectionChildren";
import { AboutData } from "@/types/AboutData";

import fsPromises from "fs/promises";
import path from "path";
async function getData() {
  // get the file path
  const filePath = path.join(process.cwd(), "/lib/data/AboutData.json");
  // use the file path to read the json
  const fileContent = await fsPromises.readFile(filePath);

  const objectData = JSON.parse(fileContent.toString());

  return objectData as AboutData;
}

export default async function AboutSection() {
  const aboutData = await getData();
  return (
    <section
      id="about"
      className="px-6 py-20 sm:px-12 md:px-28 md:py-24 lg:px-36"
    >
      <div className="mx-auto max-w-4xl">
        <AboutSectionChildren aboutData={aboutData} />
      </div>
    </section>
  );
}

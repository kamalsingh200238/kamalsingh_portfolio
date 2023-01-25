import { WorkData } from "@/types/WorkData";
import WorkSectionChildren from "./WorkSectionChildren";

import fsPromises from "fs/promises";
import path from "path";
async function getData() {
  // get the file path
  const filePath = path.join(process.cwd(), "/lib/data/WorkData.json");
  // use the file path to read the json
  const fileContent = await fsPromises.readFile(filePath);

  const objectData = JSON.parse(fileContent.toString());

  return objectData as WorkData;
}

export default async function WorkSection() {
  const workData = await getData();
  return (
    <section
      id="work"
      className="px-6 py-20 sm:px-12 md:py-24 md:px-28 lg:px-36"
    >
      <div className="mx-auto max-w-5xl">
        <WorkSectionChildren workData={workData} />
      </div>
    </section>
  );
}

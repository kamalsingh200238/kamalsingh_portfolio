import fsPromises from "fs/promises";
import path from "path";
import HeroChildren from "./HeroChildren";
async function getData() {
  // get the file path
  const filePath = path.join(process.cwd(), "/lib/data/HeroData.json");
  // use the file path to read the json
  const fileContent = await fsPromises.readFile(filePath);

  const objectData = JSON.parse(fileContent.toString());

  return objectData;
}

export default async function HeroSection() {
  // read the data from json file
  const heroData = await getData();

  return (
    <section
      id="hero-section-wrapper"
      className="px-6 sm:px-12 md:px-28 lg:px-36"
    >
      <div
        id="hero-section-container"
        className="hero-size mx-auto grid max-w-5xl items-center"
      >
        <HeroChildren heroData={heroData} />
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

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
      className="px-6 py-20 sm:px-12 md:px-28 md:py-24 lg:px-36"
    >
      <div className="">
        <p>{contactData.heading}</p>
        <p>{contactData.subHeading}</p>
        <p>{contactData.description}</p>
      </div>
    </section>
  );
}

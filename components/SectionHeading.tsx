interface Props {
  headingNumber: String;
  headingText: String;
}

export default function SectionHeading({ headingNumber, headingText }: Props) {
  return (
    <div className="mb-10 flex items-center gap-4 text-tertiary-500">
      <div>
        <span className="mr-2 font-fira text-secondary-500 sm:text-lg lg:text-xl">
          {headingNumber}.
        </span>
        <h2 className="capitalize inline-block font-oswald text-xl font-bold text-tertiary-500 sm:text-2xl lg:text-3xl">
          {headingText}
        </h2>
      </div>
      <div className="h-px grow bg-gray-400 opacity-20" />
    </div>
  );
}

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socials = {
  github: "https://github.com/kamalsingh200238",
  twitter: "https://twitter.com/Kamalsingh1605",
  linkedIn: "https://www.linkedin.com/in/kamal--singh/",
  emailId: "kamalsingh200239@gmail.com",
};

export default function Footer() {
  return (
    <footer className="p-5">
      <div>
        <nav className="mb-5 flex justify-center gap-10 text-xl md:hidden">
          <a
            href={socials.github}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href={socials.linkedIn}
            target="_blank"
            className="inline-block py-3 transition-all duration-200 hover:-translate-y-1 hover:text-secondary-500"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </nav>
        <div className="flex flex-col items-center gap-3 text-xs">
          <a
            href="https://github.com/kamalsingh200238/kamalsingh_portfolio"
            className="capitalize hover:text-secondary-500"
            target="_blank"
            rel="noreferrer"
          >
            Built by Kamal Singh
          </a>
          <a
            className="capitalize hover:text-secondary-500"
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noreferrer"
          >
            Designed by brittany chiang
          </a>
        </div>
      </div>
    </footer>
  );
}

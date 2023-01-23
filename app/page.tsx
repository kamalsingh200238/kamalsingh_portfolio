import { Fira_Code, Oswald, Roboto } from "@next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FixedSocials from "@/components/FixedSocials";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira-code-font",
});

const oswald = Oswald({ subsets: ["latin"], variable: "--oswald-font" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto-font",
});

export default function Home() {
  return (
    <div
      className={`${firaCode.variable} ${oswald.variable} ${roboto.variable}`}
    >
      <div className="min-h-screen bg-primary-500 font-roboto text-gray-400">
        <Navbar />
        <main id="content" className="">
          <FixedSocials />
          {/* @ts-expect-error Server Component */}
          <HeroSection />
        </main>
      </div>
    </div>
  );
}

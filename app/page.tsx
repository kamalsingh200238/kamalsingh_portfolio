import { Fira_Code, Roboto, Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FixedSocials from "@/components/FixedSocials";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira-code-font",
});

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto-font",
});

export default function Home() {
  return (
    <div
      className={`${firaCode.variable} ${roboto.variable} ${inter.variable}`}
    >
      <div className="min-h-screen bg-primary-500 font-roboto text-gray-400">
        <Navbar />
        <main id="content" className="">
          <FixedSocials />
          {/* @ts-expect-error Server Component */}
          <HeroSection />
          {/* @ts-expect-error Server Component */}
          <AboutSection />
          {/* @ts-expect-error Server Component */}
          <WorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

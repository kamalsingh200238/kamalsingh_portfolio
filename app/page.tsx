import { Fira_Code, Oswald, Roboto } from "@next/font/google";

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
    <div className={`${firaCode.variable} ${oswald.variable} ${roboto.variable}`}>
    </div>
  )
}

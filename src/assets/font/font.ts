import { Square_Peg, KoHo, Bubbler_One, Andika } from "next/font/google";

export const squarePeg = Square_Peg({
  variable: "--font-square-peg",
  subsets: ["latin"],
  weight: ["400"],
});

//bhavuka alternative
export const koho = KoHo({
  variable: "--font-koho",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const bubblerOne = Bubbler_One({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400"],
});

export const andika = Andika({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

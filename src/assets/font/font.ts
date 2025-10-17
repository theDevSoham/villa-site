import {
  Square_Peg,
  KoHo,
  Bubbler_One,
  Andika,
  Amita,
  Source_Sans_3,
} from "next/font/google";

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
  variable: "--font-bubbler-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const andika = Andika({
  variable: "--font-andika",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const amita = Amita({
  variable: "--font-amita",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

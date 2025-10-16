import { Square_Peg, KoHo } from "next/font/google";

export const squarePeg = Square_Peg({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const koho = KoHo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

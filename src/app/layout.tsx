import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getSettings } from "./client/settings";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: settings.data.site_name || "Villa Charlestine",
    description:
      settings.data.site_description || "Villa Charelstine description",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
    icons: {
      icon: settings.data.favicon.url || "",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

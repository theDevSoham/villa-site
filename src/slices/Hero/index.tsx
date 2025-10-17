import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { squarePeg } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import Button from "@/components/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="w-full h-[90vh] absolute inset-0 z-0">
        <PrismicNextImage
          field={slice.primary.hero_image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-1 top-20 left-1/6 md:top-20 md:left-60">
        <PrismicRichText
          field={slice.primary.hero_caption}
          components={{
            heading1: ({ children }) => (
              <h1
                className={`${squarePeg.className} text-6xl lg:text-8xl`}
                style={{ color: slice.primary.text_hex_color_code || "" }}
              >
                {children}
              </h1>
            ),
          }}
        />
      </div>
      <div className="absolute inset-0 top-80 z-20 flex justify-center items-center px-4">
        <div className={`${container} w-full`}>
          <form className="flex flex-col lg:flex-row items-stretch gap-3 bg-white/90 rounded-xl shadow-lg p-4 backdrop-blur-sm">
            {/* Search Field */}
            <input
              type="text"
              placeholder="Search for villas..."
              className="flex-1 min-w-[180px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />

            {/* Check-in Date */}
            <input
              type="datetime-local"
              aria-label="Check-in date"
              className="flex-1 min-w-[180px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />

            {/* Check-out Date */}
            <input
              type="datetime-local"
              aria-label="Check-out date"
              className="flex-1 min-w-[180px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />

            {/* Category Dropdown */}
            <select className="flex-1 min-w-[180px] px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">All Categories</option>
              <option value="spices">Premium</option>
              <option value="millets">Deluxe</option>
              <option value="vegetables">Suite</option>
              <option value="nuts">Penthouse</option>
            </select>

            {/* Search Button */}
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { squarePeg } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import VillaSearchForm from "@/components/VillaSearchForm";

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
      className="relative h-[90vh] w-full overflow-hidden"
    >
      <div className="w-full h-full absolute inset-0 z-0">
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
      <div className="absolute inset-0 z-20 flex justify-center items-center px-4">
        <div className={`${container} w-full`}>
          <VillaSearchForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;

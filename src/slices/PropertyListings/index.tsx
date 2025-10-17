import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { andika, bubblerOne, koho } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";

/**
 * Props for `PropertyListings`.
 */
export type PropertyListingsProps =
  SliceComponentProps<Content.PropertyListingsSlice>;

/**
 * Component for "PropertyListings" Slices.
 */
const PropertyListings: FC<PropertyListingsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${container}`}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2
              className={`${bubblerOne.className} uppercase text-4xl md:text-6xl lg:text-7xl font-normal mb-10 text-[#3C6125]`}
            >
              {children}
            </h2>
          ),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {slice.primary.property_list_item.map((item, index) => (
          <div key={index}>
            <PrismicNextImage
              field={item.property_image}
              className="max-h-[273px] rounded-lg"
            />
            <PrismicRichText
              field={item.title}
              components={{
                heading3: ({ children }) => (
                  <h3
                    className={`${andika.className} lg:text-4xl md:text-3xl text-2xl font-semibold`}
                  >
                    {children}
                  </h3>
                ),
              }}
            />
            <PrismicRichText
              field={item.description}
              components={{
                paragraph: ({ children }) => (
                  <p
                    className={`${koho.className} lg:text-xl md:text-lg text-base font-normal`}
                  >
                    {children}
                  </p>
                ),
              }}
            />
            {item.lowest_price}
            {item.highest_price}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;

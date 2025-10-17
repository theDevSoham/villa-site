import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { andika, bubblerOne, koho } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import { createClient } from "@/prismicio";
import Link from "next/link";

/**
 * Props for `PropertyListings`.
 */
export type PropertyListingsProps =
  SliceComponentProps<Content.PropertyListingsSlice>;

/**
 * Component for "PropertyListings" Slices.
 */
const PropertyListings: FC<PropertyListingsProps> = async ({ slice }) => {
  const client = createClient();

  const rentalPropertyListings = await Promise.all(
    slice.primary.rental_property_listings.map((item) => {
      if (
        isFilled.contentRelationship(item.rental_property) &&
        item.rental_property.uid
      ) {
        return client.getByUID("rental_properties", item.rental_property.uid);
      }
    })
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${container} py-16`}
    >
      {/* Section Heading */}
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2
              className={`${bubblerOne.className} uppercase text-center text-4xl md:text-6xl lg:text-7xl font-normal mb-12 text-[#3C6125]`}
            >
              {children}
            </h2>
          ),
        }}
      />

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rentalPropertyListings.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 w-full">
                  <PrismicNextImage
                    field={item.data.property_image}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 space-y-3">
                  {/* Title */}
                  <PrismicRichText
                    field={item.data.title}
                    components={{
                      heading2: ({ children }) => (
                        <h3
                          className={`${andika.className} text-2xl md:text-3xl font-semibold text-[#2C3E1F]`}
                        >
                          {children}
                        </h3>
                      ),
                    }}
                  />

                  {/* Description */}
                  <PrismicRichText
                    field={item.data.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p
                          className={`${koho.className} text-gray-700 text-base md:text-lg leading-relaxed line-clamp-3`}
                        >
                          {children}
                        </p>
                      ),
                    }}
                  />

                  {/* Price Range */}
                  {(item.data.lowest_price || item.data.highest_price) && (
                    <div
                      className={`${koho.className} mt-4 text-lg font-medium text-[#3C6125]`}
                    >
                      <span className="block">
                        From{" ₹"}
                        <span className="font-bold text-xl">
                          {item.data.lowest_price}
                        </span>{" "}
                        to{" ₹"}
                        <span className="font-bold text-xl">
                          {item.data.highest_price}
                        </span>
                      </span>
                    </div>
                  )}

                  {/* View Details Button */}
                  {isFilled.keyText(item.uid) && (
                    <div className="mt-auto pt-4">
                      <Link
                        href={`/rental-properties/${item.uid}`}
                        className="inline-block text-center w-full bg-[#3C6125] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#2A481A] focus:ring-2 focus:ring-offset-2 focus:ring-[#3C6125]"
                      >
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default PropertyListings;

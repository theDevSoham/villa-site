import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getEventProperties } from "@/app/client/event_properties";
import Link from "next/link";
import { andika, bubblerOne, koho } from "@/assets/font/font";
import { PrismicNextImage } from "@prismicio/next";
import { container } from "@/constants/tailwind-constants";

/**
 * Props for `EventPropertyListings`.
 */
export type EventPropertyListingsProps =
  SliceComponentProps<Content.EventPropertyListingsSlice>;

/**
 * Component for "EventPropertyListings" Slices.
 */
const EventPropertyListings: FC<EventPropertyListingsProps> = async ({
  slice,
}) => {
  const eventPropertyListings = await Promise.all(
    slice.primary.event_properties.map((item) => {
      if (
        isFilled.contentRelationship(item.event_property) &&
        item.event_property.uid
      ) {
        return getEventProperties(item.event_property.uid);
      }
    })
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`py-16 bg-[#CAC7A8]`}
    >
      <div className={`${container}`}>
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
          {eventPropertyListings.map(
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

                    {/* View Details Button */}
                    {isFilled.keyText(item.uid) && (
                      <div className="mt-auto pt-4">
                        <Link
                          href={`/property/event/${item.uid}-page`}
                          className="inline-block text-center w-full bg-[#3C6125] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#2A481A] focus:ring-2 focus:ring-offset-2 focus:ring-[#3C6125]"
                        >
                          Contact to get Quote
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default EventPropertyListings;

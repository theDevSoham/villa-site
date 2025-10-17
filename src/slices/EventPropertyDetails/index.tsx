import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { andika, koho } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import { Button } from "@/components/ui/button";

/**
 * Props for `EventPropertyDetails`.
 */
export type EventPropertyDetailsProps =
  SliceComponentProps<Content.EventPropertyDetailsSlice>;

/**
 * Component for "EventPropertyDetails" Slices.
 */
const EventPropertyDetails: FC<EventPropertyDetailsProps> = ({ slice }) => {
  const rel = slice.primary.event_property;

  if (isFilled.contentRelationship(rel) && rel.uid && rel.data) {
    const eventProperty = rel;
    const { data } = eventProperty;

    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`${container} py-12`}
        aria-labelledby={`event-title-${eventProperty.uid}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left: Event image */}
            <div className="lg:col-span-2">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3]">
                  <PrismicNextImage
                    field={data?.property_image}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Availability badge */}
                <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md flex items-center gap-3">
                  <span
                    className={`${koho.className} text-xs uppercase text-gray-600`}
                  >
                    Status
                  </span>
                  <span
                    className={`${andika.className} text-lg font-semibold ${
                      data?.is_available
                        ? "text-emerald-700"
                        : "text-red-600 line-through"
                    }`}
                  >
                    {data?.is_available ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Details / CTA */}
            <aside className="w-full flex flex-col gap-6">
              {/* Event title */}
              <header>
                <div
                  id={`event-title-${eventProperty.uid}`}
                  className={`${andika.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-800`}
                >
                  <PrismicRichText field={data?.title} />
                </div>

                {/* meta row */}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="capitalize">{data?.event}</span>
                  <span aria-hidden="true" className="mx-1">
                    •
                  </span>
                  <span>{eventProperty.lang?.toUpperCase()}</span>
                  {!data?.is_available && (
                    <>
                      <span aria-hidden="true" className="mx-1">
                        •
                      </span>
                      <span className="text-red-600 font-medium">
                        Not Available
                      </span>
                    </>
                  )}
                </div>
              </header>

              {/* Description */}
              <div
                className={`${koho.className} text-gray-700 prose max-w-none`}
              >
                <PrismicRichText field={data?.description} />
              </div>

              {/* Event-specific details */}
              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <dt className="text-xs text-gray-500 uppercase">
                    Event Type
                  </dt>
                  <dd
                    className={`${andika.className} text-lg font-medium text-gray-800 mt-1`}
                  >
                    {data?.event}
                  </dd>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <dt className="text-xs text-gray-500 uppercase">
                    Event Description
                  </dt>
                  <dd className="mt-1 text-gray-700 leading-relaxed">
                    <PrismicRichText field={data?.event_description} />
                  </dd>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 w-full mt-4">
                <Button
                  variant="default"
                  className="w-full lg:w-auto px-8 py-3 h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={!data?.is_available}
                >
                  {data?.is_available
                    ? "Book This Event"
                    : "Currently Unavailable"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full lg:w-auto px-8 py-3 h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Other Events
                </Button>
              </div>

              {/* Accessibility note */}
              <p className="sr-only">
                This section contains event details for {data?.event}.
                Availability may vary depending on booking and season.
              </p>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default EventPropertyDetails;

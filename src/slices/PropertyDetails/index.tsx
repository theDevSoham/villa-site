import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { andika, koho } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import { Button } from "@/components/ui/button";

/**
 * Props for `PropertyDetails`.
 */
export type PropertyDetailsProps =
  SliceComponentProps<Content.PropertyDetailsSlice>;

/**
 * Utility: format price (INR fallback). Adjust locale/currency as needed.
 */
const formatCurrency = (value?: number | null) => {
  if (typeof value !== "number") return "";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Component for "PropertyDetails" Slices.
 *
 * - Server component (async) to allow use with Prismic relationships if needed.
 * - Renders image, title, description, price range, tags, meta and CTA.
 */
const PropertyDetails: FC<PropertyDetailsProps> = async ({ slice }) => {
  const rel = slice.primary.property_details;

  // Validate relationship shape from Prismic
  if (isFilled.contentRelationship(rel) && rel.uid && rel.data) {
    const property = rel;
    const { data } = property;

    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`${container} py-12`}
        aria-labelledby={`property-title-${property.uid}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left: Hero image */}
            <div className="lg:col-span-2">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                {/* Background image with aspect ratio */}
                <div className="w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3]">
                  <PrismicNextImage
                    field={data?.property_image}
                    className="w-full h-full object-cover"
                    // PrismicNextImage handles sizes; class used to control object-fit
                  />
                </div>

                {/* Price badge overlay */}
                {(data?.lowest_price || data?.highest_price) && (
                  <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md flex items-baseline gap-3">
                    <span
                      className={`${koho.className} text-xs uppercase text-gray-600`}
                    >
                      Price
                    </span>
                    <span
                      className={`${andika.className} text-lg font-semibold text-emerald-800`}
                    >
                      {data.lowest_price && formatCurrency(data.lowest_price)}
                      {data.highest_price ? (
                        <span className="text-base font-medium text-gray-700">
                          {" "}
                          — {formatCurrency(data.highest_price)}
                        </span>
                      ) : null}
                    </span>
                  </div>
                )}
              </div>

              {/* Small gallery / image placeholders (optional) */}
              {/* If you add gallery images later, map here */}
            </div>

            {/* Right: Details / CTA */}
            <aside className="w-full flex flex-col gap-6">
              {/* Title */}
              <header>
                <div
                  id={`property-title-${property.uid}`}
                  className={`${andika.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-800`}
                >
                  <PrismicRichText field={data?.title} />
                </div>

                {/* meta row */}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  {/* <time dateTime={property?.first_publication_date}>
                    Published:{" "}
                    {new Date(
                      property?.first_publication_date
                    ).toLocaleDateString()}
                  </time> */}
                  <span aria-hidden="true" className="mx-1">
                    •
                  </span>
                  <span>{property.lang?.toUpperCase()}</span>
                  {data?.is_enabled === false && (
                    <>
                      <span aria-hidden="true" className="mx-1">
                        •
                      </span>
                      <span className="text-red-600 font-medium">
                        Unavailable
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

              {/* Features / quick facts */}
              <div className="flex flex-col gap-4">
                <dl className="flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <dt className="text-xs text-gray-500">Min price</dt>
                    <dd className="mt-1 font-semibold text-gray-800">
                      {formatCurrency(data?.lowest_price)}
                    </dd>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <dt className="text-xs text-gray-500">Max price</dt>
                    <dd className="mt-1 font-semibold text-gray-800">
                      {formatCurrency(data?.highest_price)}
                    </dd>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <dt className="text-xs text-gray-500">UID</dt>
                    <dd className="mt-1 font-mono text-sm text-gray-700">
                      {property.uid}
                    </dd>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <dt className="text-xs text-gray-500">Tags</dt>
                    <dd className="mt-1 text-sm text-gray-700">
                      {property.tags && property.tags.length > 0 ? (
                        property.tags.join(", ")
                      ) : (
                        <span className="text-gray-400">No tags</span>
                      )}
                    </dd>
                  </div>
                </dl>

                {/* CTA */}
                <div className="flex flex-col gap-3 w-full mt-4 sm:mt-0">
                  <Button
                    variant="default"
                    className="w-full lg:w-auto px-8 py-3 h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Now
                  </Button>

                  {/* Secondary action */}
                  <Button
                    variant="outline"
                    className="w-full lg:w-auto px-8 py-3 h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Find Other Villas
                  </Button>
                </div>
              </div>

              {/* Accessibility: hidden but useful structured data / note */}
              <p className="sr-only">
                This property is available for rental bookings. Prices shown are
                per stay and may vary.
              </p>
            </aside>
          </div>
        </div>
      </section>
    );
  }
};

export default PropertyDetails;

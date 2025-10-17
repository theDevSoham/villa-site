import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { container } from "@/constants/tailwind-constants";
import { PrismicNextImage } from "@prismicio/next";
import { bubblerOne, koho } from "@/assets/font/font";

// Simple Star Icon component using inline SVG, colored teal/cyan
const StarIcon = ({
  isActive = true,
  size = 16,
}: {
  isActive?: boolean;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={isActive ? "currentColor" : "none"}
    stroke={isActive ? "currentColor" : "currentColor"}
    strokeWidth="1.5"
    className={`h-${size / 4} w-${size / 4} transition-colors duration-200`}
  >
    <path
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      className={
        isActive
          ? "text-teal-500 dark:text-teal-400"
          : "text-gray-300 dark:text-gray-600"
      }
      fill={isActive ? "currentColor" : "none"}
    />
  </svg>
);

// Simple Rating Component replacement
const RatingDisplay = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} isActive={index < roundedRating} size={16} />
      ))}
    </div>
  );
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  if (!slice.primary.testimonial || slice.primary.testimonial.length === 0) {
    return null;
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${container} py-6 lg:py-16 relative`}
    >
      {/* Testimonials Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.primary.testimonial.map((item, index) => (
          <div
            key={index}
            // Styled as a clean card
            className="flex flex-col p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            {/* Header: Avatar, Author, and Rating (Aligned using flex) */}
            <div className="flex items-center mb-6">
              {/* Avatar - Circular and Ringed (Green/Yellow border) */}
              <div className="w-16 h-16 relative mr-4 shrink-0 overflow-hidden rounded-full">
                {/* Replaced PrismicNextImage with standard <img> tag */}
                <PrismicNextImage field={item.avatar} />
              </div>

              {/* Author and Rating (Vertical Stack) */}
              <div className="flex flex-col">
                <p
                  className={`${bubblerOne.className} font-normal text-xl md:text-2xl text-gray-900 dark:text-white`}
                >
                  {item.author}
                </p>
                {/* Replaced Rating component with custom RatingDisplay */}
                <RatingDisplay rating={Math.min(item.rating || 0, 5)} />
              </div>
            </div>

            {/* Quote Text */}
            <p
              className={`${koho.className} text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed flex-1 my-4`}
            >
              {item.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

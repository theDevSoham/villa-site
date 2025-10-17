import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Branding`.
 */
export type BrandingProps = SliceComponentProps<Content.BrandingSlice>;

/**
 * Component for "Branding" Slices.
 */
const Branding: FC<BrandingProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full flex justify-center items-center py-10 px-4 md:px-0">
        <PrismicNextImage field={slice.primary.brand_image} className="grayscale" />
      </div>
    </section>
  );
};

export default Branding;

import { getSettings } from "@/app/client/settings";
import { amita, sourceSans3 } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import React from "react";

const Footer = async () => {
  const settings = await getSettings();
  const footerContent = settings.data.footer_content;

  return (
    <footer className={`py-2 w-full bg-[#211914] text-white`}>
      <div className={`${container} w-full py-4 lg:py-6`}>
        {footerContent.map((item, index) => (
          <div key={index} className="w-full h-full flex flex-col justify-center items-center gap-10">
            <p
              className={`${amita.className} lg:text-2xl md:text-xl text-lg font-normal`}
            >
              {item.branding}
            </p>
            <p
              className={`${sourceSans3.className} lg:text-2xl md:text-xl text-lg font-semibold`}
            >
              {item.declaration}
            </p>

            <p
              className={`${amita.className} lg:text-xl md:text-lg text-base font-normal text-center`}
            >
              {item.copyright}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

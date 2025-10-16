import { getSettings } from "@/app/client/settings";
import { koho } from "@/assets/font/font";
import { container } from "@/constants/tailwind-constants";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const settings = await getSettings();

  return (
    <header className={`py-2 w-full nav-bg`}>
      <div className={`${container}`}>
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
          <Link href="/">
            <PrismicNextImage field={settings.data.website_icon} />
          </Link>

          <nav>
            <ul className="flex">
              {settings.data.nav_links.map(({ label, link }) => (
                <li
                  key={label}
                  className={`${koho.className} text-2xl font-bold link-color`}
                >
                  <PrismicNextLink field={link} className="p-3">
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

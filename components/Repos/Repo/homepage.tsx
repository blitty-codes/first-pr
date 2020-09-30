import HomeSiteIcon from "icons/homeSite";
import React from "react";

interface homePageProps {
  website: string;
}

const HomePage = ({website}: homePageProps) => (
  <a
    href={website}
    target="_blanck"
    className={`flex flex-row ${
      website === null ? "cursor-not-allowed no-underline" : "underline"
    }`}
  >
    <abbr
      title={`${website === null ? "No homepage" : "homepage"}`}
      className="flex no-underline"
      style={{
        textDecoration: "none",
      }}
    >
      <HomeSiteIcon width={20} height={20} isNull={website === null} />{" "}
      <p
        className={`w-min-0 text-base align-top font-bold ${
          website === null ? "text-gray-600 text-opacity-75" : "default"
        }`}
      >
        homepage
      </p>
    </abbr>
  </a>
);

export default HomePage;
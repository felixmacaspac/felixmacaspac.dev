import React from "react";
import images from "../../constants/image";

const projects = [
  {
    image: images.bluecheckImage,
    heading: "Bluecheck",
    link: "https://www.bluecheck.me/",
  },

  {
    image: images.catifyImage,
    heading: "Catify",
    link: "https://catify-app.netlify.app/",
  },
  {
    image: images.shortlyImage,
    heading: "Shortly",
    link: "https://shorten-app.netlify.app/",
  },
  {
    image: images.sunnysideImage,
    heading: "Sunnyside",
    link: "https://sunny-page.netlify.app/",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, index) => (
        <a href={proj.link} key={index} className="flex" target="_blank">
          <div className="relative">
            <img
              className="h-full cursor-pointer ease-in transition-all hover:filter hover:shadow-xl dark:opacity-20 dark:hover:opacity-100"
              src={proj.image}
              alt={proj.heading}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardGrid;

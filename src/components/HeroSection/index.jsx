import React from "react";
import images from "../../constants/image";

const HeroSection = () => {
  return (
    <div className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen">
            <h1 className="hero__heading">Felix M.</h1>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-2/3">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            <SocialIcons
              src={images.linkedinIcon}
              link="#linkedin"
              alt="linkedin"
            />
            <SocialIcons src={images.githubIcon} link="#github" alt="github" />
            <SocialIcons src={images.emailIcon} link="#email" alt="email" />
          </ul>
        </div>
      </div>
    </div>
  );
};

const SocialIcons = ({ link, src, alt }) => {
  return (
    <>
      <li className="bg-neutral w-max rounded-full dark:bg-primary-400">
        <a href={link}>
          <img
            className="h-14 w-14 p-4 transition-all dark:invert"
            src={src}
            alt={alt}
          />
        </a>
      </li>
    </>
  );
};

export default HeroSection;

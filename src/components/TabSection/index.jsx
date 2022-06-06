import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";

const logos = [
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS3",
  },
  {
    image: images.javascriptLogo,
    title: "JavaScript",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  {
    image: images.githubLogo,
    title: "Github",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.nextLogo,
    title: "NextJS",
  },
  {
    image: images.hubspotLogo,
    title: "HubSpot",
  },
];

const TabSection = () => {
  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
          <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            Know me more
          </Tab>
          <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
            Technical Skills
          </Tab>
        </TabList>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <div className="w-full text-primary md:w-1/2 dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">
              React Developer | HubSpot CMS Developer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              I've been into front-end development for almost ONE year & working
              professionally for almost TEN months, still learning, and failing.
            </p>
            <br />
            <h3 className="font-semibold text-xl mb-2">
              How can I help you 🔨 :
            </h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
              <li>
                I'll help you convert your Figma/PSD/XD design into a perfect
                pixel-responsive website or landing page. ✨
              </li>
              <li>
                I'll help you fix bugs/issues that have something to do with
                HTML, CSS & JS. 🐛
              </li>
              <li>
                I'll help you implement new features on your current website. 👷{" "}
              </li>
              <li>
                I'll help you create new modules/templates for your HubSpot CMS
                Website 🎉
              </li>
            </ul>
            <br />
            <h3 className="font-semibold text-xl mb-2">Certifications 📝:</h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
              <li>
                <a
                  href="https://app.hubspot.com/academy/achievements/9z322p95/en/1/felix-macaspac/hubspot-marketing-software"
                  className="underline"
                  target="_blank"
                >
                  Hubspot Marketing Software
                  <span className="ml-1 inline-flex align-middle">
                    <ExternalLinkIcon className="h-5 w-5" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.hubspot.com/academy/achievements/clt3bnwb/en/1/felix-macaspac/hubspot-cms-for-developers"
                  className="underline"
                  target="_blank"
                >
                  Hubspot CMS for Developers
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://app.hubspot.com/academy/achievements/4nsfl59x/en/1/felix-macaspac/hubspot-cms-for-marketers"
                  className="underline"
                  target="_blank"
                >
                  Hubspot CMS for Marketers
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 md:h-[450px]">
            <img
              src={images.felixImage}
              className="h-full w-full object-cover object-top rounded-lg filter shadow-lg"
              alt="Image Felix"
              loading="lazy"
            />
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;

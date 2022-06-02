import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";

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
      <Tabs defaultIndex={0} className="container">
        <TabList className="bg-primary flex flex-col justify-center gap-4 items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
          <Tab className="text-white w-full text-center cursor-pointer rounded-xl px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary">
            Know me more
          </Tab>
          <Tab className="text-white w-full text-center cursor-pointer rounded-xl px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary">
            Technical Skills
          </Tab>
        </TabList>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <div className="w-full text-primary md:w-1/2 dark:text-white">
            <h2 className="text-2xl font-semibold mb-5">
              Hello! Kumusta? I'm a self-taught developer️
            </h2>
            <p className="text-base font-normal">
              I started self-studying programming during the pandemic (2020) as
              a hobby. Landed my first internship job after studying for 10
              months! Currently working as a Junior Frontend Developer. Still
              learning and getting passionate about new interesting stuff in the
              web development industry.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:h-[450px]">
            <img
              src="/src/assets/whacky-felix.png"
              className="h-full w-full object-cover object-top rounded-lg filter shadow-lg"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-primary-50 rounded-xl filter shadow-lg dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
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

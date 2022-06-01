import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionWrapper from "../Global/SectionWrapper";

const TabSection = () => {
  return (
    <SectionWrapper heading="ABOUT ME">
      <Tabs defaultIndex={0} className="container">
        <TabList className="bg-primary-500 w-max flex justify-center gap-4 items-center mx-auto rounded-xl mb-16">
          <Tab className="text-white cursor-pointer rounded-xl px-8 py-4 font-semibold focus-within:bg-secondary">
            Know me more
          </Tab>
          <Tab className="text-white cursor-pointer rounded-xl px-8 py-4 font-semibold focus-within:bg-secondary">
            Technical Skills
          </Tab>
          <Tab className="text-white cursor-pointer rounded-xl px-8 py-4 font-semibold focus-within:bg-secondary">
            Soft Skills
          </Tab>
        </TabList>
        <TabPanel className="flex gap-20 items-center flex-row-reverse transition-all">
          <div className="w-1/2 text-white">
            <h2 className="text-2xl font-semibold mb-5">
              Hello! Kumusta? I'm a self-taught developer️
            </h2>
            <p className="text-base font-normal">
              I started self-studying programming during the pandemic (2020) as
              a hobby. Landed my first internship job after studying for 10
              months! Currently working as a Junior Frontend Developer. Still
              learning and getting passionate about new interesting stuff in the
              web development industry.{" "}
            </p>
          </div>
          <div className="w-1/2 h-[450px]">
            <img
              src="/src/assets/whacky-felix.png"
              className="h-full w-full object-cover object-top rounded-lg filter shadow-lg"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-row-reverse transition-all">
          <div className="w-full text-center text-white h-[450px]">
            <h2 className="text-2xl font-semibold mb-5">Technical Skills</h2>
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-row-reverse transition-all">
          <div className="w-full text-center text-white h-[450px]">
            <h2 className="text-2xl font-semibold mb-5">Soft Skills</h2>
          </div>
        </TabPanel>
      </Tabs>
    </SectionWrapper>
  );
};

export default TabSection;

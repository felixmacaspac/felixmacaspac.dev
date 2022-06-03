import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";

const TwoColumnCard = () => {
  return (
    <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2">
      <div className="bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500">
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.hububble.co/"
            target="_blank"
            className="hover:underline"
          >
            Hububble
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            MAY, 2021 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            JUNIOR FRONT-END ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed web apps using JavaScript, React, NextJS, and Tailwind.
            Also responsible on making the websites responsive from{" "}
            <strong> mobile {">"} big screen monitors!</strong>
          </li>
          <li>Developed CMS Websites through HubSpot CMS</li>
          <li>
            Responsible on maintaining and fixing bugs on current websites
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500">
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.upwork.com/freelancers/~013e0372898b53a69e"
            target="_blank"
            className="hover:underline"
          >
            Upwork
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            OCTOBER, 2021 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            FREELANCE FRONT-END ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>Implementing CMS websites from scratch using HubSpot CMS</li>
          <li>Helped clients with simple bug fixes</li>
          <li>
            Received top rated badge after working with 6 clients within 4
            months!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TwoColumnCard;

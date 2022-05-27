import React from "react";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";

const navlinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Certifications",
    href: "#certifications",
  },
];

export default function NavBar() {
  return (
    <Popover className="bg-primary fixed top-0 w-full z-50">
      <div className="container">
        <div className="flex justify-end items-center px-4 py-6 sm:px-6 md:justify-start md:gap-12">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <span className="sr-only">Open menu</span>
              <MenuAlt1Icon
                className="h-6 w-6 transform rotate-180"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navlinks.map((navlink) => (
              <a
                key={navlink.name}
                href={navlink.href}
                className="text-base font-medium text-white hover:text-neutral"
              >
                {navlink.name}
              </a>
            ))}
          </Popover.Group>
          <div className="ml-auto text-white hidden md:block">
            <MoonIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg bg-primary-700 filter drop-shadow-lg">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="text-white block">
                    <MoonIcon className="h-6 w-6 cursor-pointer" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {navlinks.map((navlink) => (
                      <a
                        key={navlink.name}
                        href={navlink.href}
                        className="text-base font-medium text-white"
                      >
                        {navlink.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}

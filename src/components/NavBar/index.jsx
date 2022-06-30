import React, { useState, useEffect } from "react";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ContactModal from "../ContactModal";
import { Form } from "../ContactModal/Form";

import useDarkMode from "../../hooks/useDarkMode";

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
];

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  const [addBlur, setAddBlur] = useState(false);

  const addBlurScroll = () => {
    if (window.scrollY >= 100) {
      setAddBlur(true);
    } else {
      setAddBlur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBlurScroll);
    return () => {
      window.removeEventListener("scroll", addBlurScroll);
    };
  }, []);

  const [modalIsOpen, modalSetItOpen] = useState(false);
  const toggleModal = () => {
    modalSetItOpen(!modalIsOpen);
  };

  return (
    <Popover
      className={` ${
        addBlur && "drop-shadow-lg"
      } fixed top-0 w-full z-50 bg-white transition-all duration-300 dark:bg-primary`}
    >
      <div className="container">
        <div className="flex justify-end items-center px-0 py-6 gap-4 sm:px-6 md:justify-start lg:gap-12">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary dark:text-white">
              <span className="sr-only">Open menu</span>
              <MenuAlt1Icon
                className="h-6 w-6 transform rotate-180"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-6 md:flex lg:space-x-10"
          >
            {navlinks.map((navlink) => (
              <a
                key={navlink.name}
                href={navlink.href}
                className="text-base font-medium text-primary dark:hover:text-neutral dark:text-white"
              >
                {navlink.name}
              </a>
            ))}
          </Popover.Group>

          <div
            className="ml-auto text-primary hidden transition-opacity md:mr-4 md:block dark:text-white"
            onClick={handleMode}
          >
            {darkTheme ? (
              <SunIcon className="h-6 w-6 cursor-pointer opacity-100" />
            ) : (
              <MoonIcon className="h-6 w-6 cursor-pointer opacity-100" />
            )}
          </div>
          <div className="hidden md:flex">
            <ContactModal toggleOpen={modalIsOpen} toggleClose={toggleModal}>
              <Form />
            </ContactModal>
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
            <div className="rounded-lg shadow-lg filter drop-shadow-lg bg-primary-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div
                    className="text-primary transition-opacity block dark:text-white"
                    onClick={handleMode}
                  >
                    {darkTheme ? (
                      <SunIcon className="h-6 w-6 cursor-pointer opacity-100 text-white" />
                    ) : (
                      <MoonIcon className="h-6 w-6 cursor-pointer opacity-100 text-white" />
                    )}
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
                  <div className="mt-10 flex md:hidden">
                    <ContactModal
                      toggleOpen={modalIsOpen}
                      toggleClose={toggleModal}
                    >
                      <Form />
                    </ContactModal>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}

import React, { useState, useEffect } from "react";
import images from "../../constants/image";
import { Fragment } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ContactModal from "../ContactModal";
import { Form } from "../ContactModal/Form";
import { motion } from "framer-motion";
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
  {
    name: "Uses",
    href: "#uses",
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

  // TODO: make the dark mode as the default theme.

  return (
    <Popover
      className={` ${
        addBlur && "drop-shadow-lg backdrop-blur-md"
      } fixed top-0 w-full z-[100] transition-all duration-300`}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
        className="container"
      >
        <div className="flex justify-end items-center px-0 py-4 gap-4 sm:px-6 lg:py-8 lg:gap-10">
          <div className="mr-auto">
            <a href="#home">
              {darkTheme ? (
                <img
                  className="h-12 w-auto"
                  src={images.brandLogoDark}
                  alt="brand icon"
                  height={12}
                  width={245}
                />
              ) : (
                <img
                  className="h-12 w-auto"
                  src={images.brandLogoLight}
                  alt="brand icon"
                  height={12}
                  width={245}
                />
              )}
            </a>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
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
            className="hidden space-x-6 lg:flex lg:space-x-10"
          >
            {navlinks.map((navlink) => (
              <a
                key={navlink.name}
                href={navlink.href}
                className={
                  navlink.href
                    ? "text-base font-medium text-primary relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:transition before:bg-primary hover:before:scale-x-100 dark:hover:text-neutral dark:text-white dark:before:bg-secondary-400"
                    : "text-base font-medium text-primary relative dark:text-white dark:before:bg-secondary-400 cursor-not-allowed"
                }
              >
                {navlink.name}
                {navlink.type === "new" && (
                  <span className="block absolute -bottom-6 right-0 text-xs bg-green-400 text-primary py-1 px-2 rounded-md font-bold">
                    NEW
                  </span>
                )}
                {navlink.type === "wip" && (
                  <span className="block absolute -bottom-6 right-0 text-xs bg-yellow-400 text-primary py-1 px-2 rounded-md font-bold">
                    WIP
                  </span>
                )}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex">
            <ContactModal toggleOpen={modalIsOpen} toggleClose={toggleModal}>
              <Form />
            </ContactModal>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            whileTap={{ y: -5 }}
            className="text-primary hidden transition-opacity lg:block dark:text-white"
            onClick={handleMode}
          >
            {darkTheme ? (
              <SunIcon className="h-6 w-6 cursor-pointer opacity-100" />
            ) : (
              <MoonIcon className="h-6 w-6 cursor-pointer opacity-100" />
            )}
          </motion.div>
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
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg filter drop-shadow-lg bg-primary-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      default: {
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      },
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                    whileTap={{ y: -5 }}
                    className="text-primary transition-opacity block dark:text-white"
                    onClick={handleMode}
                  >
                    {darkTheme ? (
                      <SunIcon className="h-6 w-6 cursor-pointer opacity-100 text-white" />
                    ) : (
                      <MoonIcon className="h-6 w-6 cursor-pointer opacity-100 text-white" />
                    )}
                  </motion.div>
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
                        className="text-base font-medium text-white w-max relative"
                      >
                        {navlink.name}
                        {navlink.type === "new" && (
                          <span className="block absolute right-0 text-xs bg-green-400 text-primary py-1 px-2 rounded-md font-bold">
                            NEW
                          </span>
                        )}
                        {navlink.type === "wip" && (
                          <span className="block absolute top-0 -right-12 text-xs bg-yellow-400 text-primary py-1 px-2 rounded-md font-bold">
                            WIP
                          </span>
                        )}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-10 flex lg:hidden">
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
      </motion.div>
    </Popover>
  );
}

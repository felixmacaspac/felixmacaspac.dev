import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import classnames from "classnames";

const ContactModal = ({ toggleOpen, toggleClose, children, className }) => {
  const modalClassNames = classnames(
    className,
    "modal",
    // eslint-disable-next-line comma-dangle
    "absolute my-auto mx-6 top-0 bottom-0 right-0 left-0 bg-white rounded-lg max-w-[565px] h-[600px] bg-primary-500 sm:mx-auto dark:bg-white"
  );

  return (
    <div className="w-full">
      <button
        onClick={toggleClose}
        className="bg-secondary-400 w-full justify-center font-semibold text-center px-4 py-3 rounded-xl text-white dark:bg-secondary dark:hover:bg-secondary-400 dark:active:scale-105 transition-all duration-300 lg:w-[150px]"
      >
        Say Hi! 👋
      </button>
      <Modal
        ariaHideApp={false}
        className={modalClassNames}
        overlayClassName={"modal-overlay"}
        isOpen={toggleOpen}
        onRequestClose={toggleClose}
      >
        <button
          className="absolute flex justify-end right-4 top-4 z-[150] text-white dark:text-primary-500"
          onClick={toggleClose}
        >
          {" "}
          <XIcon className="w-10 h-10" />
        </button>
        <div className="w-full flex justify-center h-full items-center dark:text-white">
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;

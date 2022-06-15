import React, { useState } from "react";
import Modal from "react-modal";

const ContactModal = ({ closeButton, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button
        onClick={toggleModal}
        className={`bg-secondary-400 justify-center font-semibold text-center px-4 py-3 rounded-xl text-white dark:bg-secondary dark:hover:bg-secondary-400 dark:active:scale-105 transition-all duration-300 lg:w-[150px] ${className}`}
      >
        Say Hi! 👋
      </button>
      <Modal
        style={{
          overlay: {
            zIndex: 100,
          },
          content: {
            color: "white",
            inset: "30% 0",
            height: "500px",
            background: "#1B2027",
            borderRadius: "1rem",
            border: "none",
            maxWidth: "600px",
            width: "100%",
            marginInline: "auto",
          },
        }}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <button
          className="relative w-full flex justify-end"
          onClick={toggleModal}
        >
          {" "}
          {closeButton}
        </button>
        <div className="flex justify-center items-center dark:text-white">
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;

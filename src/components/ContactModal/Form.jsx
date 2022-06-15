import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nmou3v",
        "template_21082ug",
        form.current,
        "RZpmaXyI41au3u5bf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="z-50 flex flex-col gap-4 w-full px-10 pt-10 pb-20 overflow-hidden md:px-20"
      ref={form}
      onSubmit={sendEmail}
    >
      <div>
        <input
          className="w-full bg-neutral text-primary rounded-md py-4 px-4"
          type="text"
          name="user_name"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          className="w-full bg-neutral text-primary rounded-md py-4 px-4"
          type="email"
          name="user_email"
          placeholder="Email"
        />
      </div>

      <div className="mb-2">
        <textarea
          className="text-primary bg-neutral w-full rounded-md py-4 px-4"
          name="message"
          placeholder="Message"
        />
      </div>

      <input
        className="bg-secondary cursor-pointer py-4 text-xl font-bold rounded-md"
        type="submit"
        value="Send"
      />
    </form>
  );
};

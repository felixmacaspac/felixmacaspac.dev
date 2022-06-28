import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_8nmou3v",
        "template_21082ug",
        formData,
        "RZpmaXyI41au3u5bf"
      )
      .then(
        (result) => {
          setSuccessState(true);
          return result;
        },
        (error) => {
          setErrorState(true);
          return error;
        }
      );
  };

  const [successState, setSuccessState] = useState(false);
  const [errorState, setErrorState] = useState(false);

  return (
    <>
      {!successState && !errorState && (
        <form
          className="z-50 flex flex-col gap-4 w-full px-10 pt-10 pb-20 overflow-hidden md:px-20"
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="pb-6 relative">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full bg-neutral text-primary rounded-md py-4 px-4 transition-all appearance-none focus:outline-secondary"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 absolute left-0 w-full -bottom-1">
                Name is required!
              </span>
            )}
          </div>

          <div className="pb-6 relative">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-full bg-neutral text-primary rounded-md py-4 px-4 transition-all appearance-nonefocus:outline-secondary"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 absolute left-0 w-full -bottom-1">
                Email is required!
              </span>
            )}
          </div>

          <div className="pb-6 relative">
            <textarea
              placeholder="Send me a message! I don't bite"
              name="message"
              className="text-primary bg-neutral w-full rounded-md py-4 px-4 transition-all appearance-none focus:outline-secondary"
              {...register("message", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 absolute left-0 w-full -bottom-1">
                Message is required!
              </span>
            )}
          </div>
          {isSubmitting ? (
            <button
              className="flex items-center justify-center text-base font-semibold text-white bg-secondary px-10 py-3 rounded-md transition-colors hover:bg-neutral-90"
              type="submit"
              value="send"
            >
              Sending
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="animate-spin ml-2 h-5 w-5 text-white"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </button>
          ) : (
            <button
              className="text-base font-semibold text-white bg-secondary px-10 py-3 rounded-md transition-colors hover:bg-neutral-90"
              type="submit"
              value="send"
            >
              Send
            </button>
          )}
        </form>
      )}
      {successState && <div>SUCCESS</div>}
      {errorState && <div>ERROR</div>}
    </>
  );
};

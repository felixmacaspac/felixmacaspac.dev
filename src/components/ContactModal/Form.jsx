import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import images from "../../constants/image";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, // EmailJS template ID
        formData,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY // EmailJS public key
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

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const [successState, setSuccessState] = useState(false);
  const [errorState, setErrorState] = useState(false);

  return (
    <>
      {!successState && !errorState && (
        <form
          className="z-50 flex flex-col gap-4 w-full overflow-hidden px-6 py-10 md:px-10"
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="pb-3 relative md:pb-6">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full bg-neutral text-primary rounded-md py-4 px-4 transition-all text-sm border border-solid border-transparent outline-none focus:border-secondary md:text-base"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && (
              <span className="text-red-500 absolute left-0 w-full text-xs -bottom-1.5 md:-bottom-1 md:text-base">
                Name is required!
              </span>
            )}
          </div>

          <div className="pb-3 relative md:pb-6">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-full bg-neutral text-primary rounded-md py-4 px-4 transition-all text-sm border border-solid border-transparent outline-none focus:border-secondary md:text-base"
              {...register("user_email", { required: true })}
            />
            {errors.user_email && (
              <span className="text-red-500 absolute left-0 w-full text-xs -bottom-1.5 md:-bottom-1 md:text-base">
                Email is required!
              </span>
            )}
          </div>

          <div className="pb-3 relative md:pb-6">
            <textarea
              placeholder="Send me a message! I don't bite"
              name="message"
              className="text-primary resize-none bg-neutral w-full rounded-md py-4 px-4 transition-all text-sm border border-solid border-transparent outline-none focus:border-secondary md:text-base"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500 absolute left-0 w-full text-xs -bottom-1.5 md:-bottom-1 md:text-base">
                Message is required!
              </span>
            )}
          </div>
          {isSubmitting ? (
            <button
              className="flex items-center justify-center text-base font-semibold text-white bg-secondary px-10 py-3 rounded-md transition-colors hover:bg-neutral-90"
              type="submit"
            >
              Sending
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white ml-2"
              >
                <path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="0.75s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </button>
          ) : (
            <button
              className="text-base font-semibold text-white bg-secondary px-10 py-3 rounded-md transition-colors hover:bg-neutral-90"
              type="submit"
            >
              Send
            </button>
          )}
        </form>
      )}
      {successState && (
        <div className="px-10 py-10">
          <h3 className="text-3xl font-semibold text-center text-white dark:text-primary">
            Email sent!
          </h3>
          <div className="mb-4">
            <img
              className="w-full h-[200px] md:h-[270px]"
              src={images.successIllustration}
              alt="error image"
            />
          </div>

          <div className="w-full flex">
            <a
              href="/"
              className="bg-secondary text-center font-medium uppercase px-4 py-4 rounded-lg w-full text-white"
            >
              GO BACK TO HOMEPAGE
            </a>
          </div>
        </div>
      )}
      {errorState && (
        <div className="px-10 py-10">
          <h3 className="text-3xl font-semibold text-center text-white dark:text-primary">
            Oops, Something went wrong!
          </h3>
          <div className="mb-4">
            <img
              className="w-full h-[200px] md:h-[270px]"
              src={images.errorIllustration}
              alt="error image"
            />
          </div>

          <div className="w-full flex">
            <a
              href="/"
              className="bg-secondary text-center font-medium uppercase px-4 py-4 rounded-lg w-full text-primary dark:text-white"
            >
              GO BACK TO HOMEPAGE
            </a>
          </div>
        </div>
      )}
    </>
  );
};

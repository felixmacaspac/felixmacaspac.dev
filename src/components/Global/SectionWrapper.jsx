import React from "react";
import classnames from "classnames";

const SectionWrapper = ({
  heading,
  fullWidth,
  id,
  className,
  textCenter,
  ...props
}) => {
  const sectionClassNames = classnames(
    className, // className from props
    "bg-white py-16 relative lg:py-32 dark:bg-primary"
  );

  return (
    <section id={id} className={sectionClassNames}>
      <div className={`container ${fullWidth && "max-w-full px-0"}`}>
        <div className="mb-8 lg:mb-16">
          <h1
            className={`${
              textCenter && "xl:text-center"
            }  font-display uppercase text-primary text-3xl text-center xl:text-left lg:text-5xl dark:text-white`}
          >
            {heading}
          </h1>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;

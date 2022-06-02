import React from "react";

const SectionWrapper = ({ heading, id, ...props }) => {
  return (
    <section
      id={`#${id}`}
      className="bg-white py-16 relative lg:py-32 dark:bg-primary"
    >
      <div className="container">
        <div className="mb-8 lg:mb-16">
          <h1 className="font-display uppercase text-primary text-3xl text-center xl:text-left lg:text-5xl dark:text-white">
            {heading}
          </h1>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;

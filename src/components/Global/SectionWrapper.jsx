import React from "react";

const SectionWrapper = ({ heading, ...props }) => {
  return (
    <section className="bg-white lg:py-32 dark:bg-primary">
      <div className="container">
        <div className="mb-8 lg:mb-16">
          <h1 className="font-display uppercase text-primary text-3xl lg:text-5xl dark:text-white">
            {heading}
          </h1>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;

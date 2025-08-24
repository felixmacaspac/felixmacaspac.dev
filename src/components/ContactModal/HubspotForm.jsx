import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "22288485",
          formId: "e81642ee-ab30-4597-8125-45fe41cd9fd7",
          region: "na1",
          target: "#hubspot-form-container",
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="hubspot-form-container"
      className="z-50 flex flex-col gap-4 w-full bg-white rounded-lg px-6 py-10 md:px-10"
    ></div>
  );
};

export default HubSpotForm;

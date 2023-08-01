import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import TwoColumnCard from "./components/TwoColumnCard";
import FeaturedAlternate from "./components/FeaturedAlternate";
import Footer from "./components/Footer";
import UsesList from "./components/UsesList";

import "./index.css";
import SectionWrapper from "./components/Global/SectionWrapper";

function App() {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", (e) => {
    setLoading(true);
  });

  return (
    <div>
      {loading ? (
        <>
          <NavBar />
          <HeroSection />
          <SectionWrapper id="about" heading="ABOUT ME">
            <TabSection />
          </SectionWrapper>
          <SectionWrapper id="experience" heading="EXPERIENCE">
            <TwoColumnCard />
          </SectionWrapper>
          <SectionWrapper id="projects" heading="PROJECTS">
            <FeaturedAlternate />
          </SectionWrapper>
          <SectionWrapper id="uses" heading="USES">
            <UsesList />
          </SectionWrapper>
          <Footer />
        </>
      ) : (
        <div className="loading-wrapper">
          <div className="flex gap-8 items-center justify-center">
            <span className="text-white font-display md:text-7xl">Loading</span>
            <svg
              className="animate-spin -ml-1 mr-3 h-16 w-16 text-secondary fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="current"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25 fill-current text-secondary-300"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="current"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import TwoColumnCard from "./components/TwoColumnCard";
import FeaturedAlternate from "./components/FeaturedAlternate";
import Footer from "./components/Footer";

import "./index.css";
import SectionWrapper from "./components/Global/SectionWrapper";

function App() {
  return (
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
      <Footer />
    </>
  );
}

export default App;

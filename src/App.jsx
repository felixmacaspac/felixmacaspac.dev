import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import CardSlider from "./components/CardSlider";
import CardGrid from "./components/CardGrid";
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
      {/* 
      <CardSlider/>
      <CardGrid />
      <Footer/> */}
    </>
  );
}

export default App;

// About.jsx

import React from "react";

import AboutHero from "../components/About/AboutHero";
import WhoWeAre from "../components/About/WhoWeAre";
import CompanyStats from "../components/About/CompanyStats";
import MissionVision from "../components/About/MissionVision";
import CoreValues from "../components/About/CoreValues";
import WhyChooseUs from "../components/About/WhyChooseUs";
import DevelopmentProcess from "../components/About/DevelopmentProcess";
import Technologies from "../components/About/Technologies";
import TeamSection from "../components/About/TeamSection";
import CTASection from "../components/About/CTASection";
import Navbar from "../components/NavBar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <WhoWeAre />

      <CompanyStats />

      <MissionVision />

      <CoreValues />

      <WhyChooseUs />

      <DevelopmentProcess />

      <Technologies />

      <TeamSection />

      <CTASection />
    </>
  );
}
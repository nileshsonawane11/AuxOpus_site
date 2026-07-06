import React from "react";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioOverview from "../components/portfolio/PortfolioOverview";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import ProjectCategories from "../components/portfolio/ProjectCategories";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";

import CaseStudies from "../components/portfolio/CaseStudies";
import DevelopmentProcess from "../components/portfolio/DevelopmentProcess";
import TechnologiesUsed from "../components/portfolio/TechnologiesUsed";
import ClientTestimonials from "../components/portfolio/ClientTestimonials";
import Footer from "../section/Footer";
import Navbar from "../components/NavBar/Navbar";

export default function Portfolio() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>

      <PortfolioHero />

      <PortfolioOverview />

      <PortfolioStats />

      <ProjectCategories />

      <FeaturedProjects />

      <CaseStudies />

      <DevelopmentProcess />

      <TechnologiesUsed />

      <ClientTestimonials />

      <Footer />
    </main>
  );
}
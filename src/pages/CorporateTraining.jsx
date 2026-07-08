// src/pages/services/CorporateTraining.jsx

import CorporateTrainingHero from "../components/services/corporate-training/CorporateTrainingHero";
import CorporateTrainingOverview from "../components/services/corporate-training/CorporateTrainingOverview";
import CorporateTrainingOffer from "../components/services/corporate-training/CorporateTrainingOffer";
import CorporateTrainingTechnologies from "../components/services/corporate-training/CorporateTrainingTechnologies";
import CorporateTrainingIndustries from "../components/services/corporate-training/CorporateTrainingIndustries";
import CorporateTrainingPortfolio from "../components/services/corporate-training/CorporateTrainingPortfolio";
import CorporateTrainingCaseStudy from "../components/services/corporate-training/CorporateTrainingCaseStudy";
import CorporateTrainingFAQ from "../components/services/corporate-training/CorporateTrainingFAQ";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../section/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function CorporateTraining() {
  return (
    <>
        <Navbar />
        <CorporateTrainingHero />
        <CorporateTrainingOverview />
        <CorporateTrainingOffer />
        <CorporateTrainingTechnologies />
        <CorporateTrainingIndustries />
        <CorporateTrainingPortfolio />
        <CorporateTrainingCaseStudy />
        <CorporateTrainingFAQ />
        <Footer />
    </>
  );
}
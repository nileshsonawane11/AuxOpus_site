import React from "react";

import SolutionsHero from "../components/solutions/SolutionsHero";
import SolutionsOverview from "../components/solutions/SolutionsOverview";
import SolutionCategories from "../components/solutions/SolutionCategories";

import BusinessSolutions from "../components/solutions/BusinessSolutions";
import AISolutions from "../components/solutions/AISolutions";
import CloudSolutions from "../components/solutions/CloudSolutions";
import DataAnalytics from "../components/solutions/DataAnalytics";
import AutomationSolutions from "../components/solutions/AutomationSolutions";

import EnterpriseSolutions from "../components/solutions/EnterpriseSolutions";
import IndustrySolutions from "../components/solutions/IndustrySolutions";
import BenefitsSection from "../components/solutions/BenefitsSection";
import TechnologyIntegration from "../components/solutions/TechnologyIntegration";

import SolutionProcess from "../components/solutions/SolutionProcess";
import SuccessStories from "../components/solutions/SuccessStories";
import SolutionStats from "../components/solutions/SolutionStats";
import SolutionsFAQ from "../components/solutions/SolutionsFAQ";
import OurProducts from "../components/solutions/OurProducts.jsx";
import ProductAdvantages from "../components/solutions/ProductAdvantages.jsx";
import Navbar from "../components/NavBar/Navbar.jsx";
import Footer from "../section/Footer.jsx";

export default function Solutions() {
  return (
    <main className="overflow-x-hidden">

        <Navbar />

        {/* Hero */}
        <SolutionsHero />

        {/* Overview */}
        <SolutionsOverview />

        {/* Categories */}
        <SolutionCategories />

        {/* Core Solutions */}
        <BusinessSolutions />

        <OurProducts />
        <ProductAdvantages />

        <AISolutions />
        <CloudSolutions />
        <DataAnalytics />
        <AutomationSolutions />

        {/* Enterprise */}
        <EnterpriseSolutions />

        {/* Industries */}
        <IndustrySolutions />

        {/* Benefits */}
        <BenefitsSection />

        {/* Technologies */}
        <TechnologyIntegration />

        {/* Process */}
        <SolutionProcess />

        {/* Portfolio */}
        <SuccessStories />

        {/* Statistics */}
        <SolutionStats />

        {/* FAQ */}
        <SolutionsFAQ />

        <Footer />

    </main>
  );
}
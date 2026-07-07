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
import ScrollReveal from "../components/ScrollReveal.jsx";

export default function Solutions() {
  return (
    <main className="overflow-x-hidden">

        <Navbar />

        {/* Hero */}
        <ScrollReveal><SolutionsHero /></ScrollReveal>

        {/* Overview */}
        <ScrollReveal><SolutionsOverview /></ScrollReveal>

        {/* Categories */}
        <ScrollReveal><SolutionCategories /></ScrollReveal>

        {/* Core Solutions */}
        <ScrollReveal><BusinessSolutions /></ScrollReveal>

        <ScrollReveal><OurProducts /></ScrollReveal>
        <ScrollReveal><ProductAdvantages /></ScrollReveal>

        <ScrollReveal><AISolutions /></ScrollReveal>
        <ScrollReveal><CloudSolutions /></ScrollReveal>
        <ScrollReveal><DataAnalytics /></ScrollReveal>
        <ScrollReveal><AutomationSolutions /></ScrollReveal>

        {/* Enterprise */}
        <ScrollReveal><EnterpriseSolutions /></ScrollReveal>

        {/* Industries */}
        <ScrollReveal><IndustrySolutions /></ScrollReveal>

        {/* Benefits */}
        <ScrollReveal><BenefitsSection /></ScrollReveal>

        {/* Technologies */}
        <ScrollReveal><TechnologyIntegration /></ScrollReveal>

        {/* Process */}
        <ScrollReveal><SolutionProcess /></ScrollReveal>

        {/* Portfolio */}
        <ScrollReveal><SuccessStories /></ScrollReveal>

        {/* Statistics */}
        <ScrollReveal><SolutionStats /></ScrollReveal>

        {/* FAQ */}
        <ScrollReveal><SolutionsFAQ /></ScrollReveal>

        <Footer />

    </main>
  );
}
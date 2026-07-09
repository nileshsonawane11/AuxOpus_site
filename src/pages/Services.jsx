import React from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServiceStats from "../components/services/ServiceStats";
import TrustedBy from "../components/services/TrustedBy";

import WebDevelopment from "../components/services/WebDevelopment";
import AppDevelopment from "../components/services/AppDevelopment";
import AIAutomation from "../components/services/AIAutomation";
import UIUXDesign from "../components/services/UIUXDesign";
import DigitalMarketing from "../components/services/DigitalMarketing";
import MaintenanceSupport from "../components/services/MaintenanceSupport";
import CorporateTraining from "../components/services/CorporateTraining";

import TechnologyStack from "../components/services/TechnologyStack";
import DevelopmentProcess from "../components/services/DevelopmentProcess";
import IndustriesServed from "../components/services/IndustriesServed";
import ClientBenefits from "../components/services/ClientBenefits";
import WhyChooseServices from "../components/services/WhyChooseServices";

import CaseStudyPreview from "../components/services/CaseStudyPreview";
import ServiceComparison from "../components/services/ServiceComparison";
import NumbersSection from "../components/services/NumbersSection";

import FAQ from "../components/services/FAQ";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../section/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Services() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <ServicesHero />

      {/* Company Highlights */}
      <ScrollReveal>
        <ServiceStats />
      </ScrollReveal>

      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

      {/* Core Services */}
      <ScrollReveal><WebDevelopment /></ScrollReveal>

      <ScrollReveal><AppDevelopment /></ScrollReveal>

      <ScrollReveal><AIAutomation /></ScrollReveal>

      <ScrollReveal><UIUXDesign /></ScrollReveal>

      <ScrollReveal><DigitalMarketing /></ScrollReveal>

      <ScrollReveal><MaintenanceSupport /></ScrollReveal>

      <ScrollReveal><CorporateTraining /></ScrollReveal>


      {/* Technologies & Process */}
      <ScrollReveal><TechnologyStack /></ScrollReveal>
      <ScrollReveal><DevelopmentProcess /></ScrollReveal>

      {/* Business Value */}
      <ScrollReveal><IndustriesServed /></ScrollReveal>
      <ScrollReveal><ClientBenefits /></ScrollReveal>
      <ScrollReveal><WhyChooseServices /></ScrollReveal>

      {/* Portfolio & Packages */}
      {/* <ScrollReveal><CaseStudyPreview /></ScrollReveal> */}
      <ScrollReveal><ServiceComparison /></ScrollReveal>

      {/* Company Numbers */}
      <ScrollReveal><NumbersSection /></ScrollReveal>

      {/* FAQs */}
      <ScrollReveal><FAQ /></ScrollReveal>

      <Footer />

    </main>
  );
}
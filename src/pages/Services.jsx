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

export default function Services() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <ServicesHero />

      {/* Company Highlights */}
      <ServiceStats />
      <TrustedBy />

      {/* Core Services */}
      <WebDevelopment />
      <AppDevelopment />
      <AIAutomation />
      <UIUXDesign />
      <DigitalMarketing />
      <MaintenanceSupport />
      <CorporateTraining />

      {/* Technologies & Process */}
      <TechnologyStack />
      <DevelopmentProcess />

      {/* Business Value */}
      <IndustriesServed />
      <ClientBenefits />
      <WhyChooseServices />

      {/* Portfolio & Packages */}
      <CaseStudyPreview />
      <ServiceComparison />

      {/* Company Numbers */}
      <NumbersSection />

      {/* FAQs */}
      <FAQ />

      <Footer />

    </main>
  );
}
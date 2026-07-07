// src/pages/services/MaintenanceSupport.jsx

import MaintenanceSupportHero from "../components/services/maintenance-support/MaintenanceSupportHero";
import MaintenanceSupportOverview from "../components/services/maintenance-support/MaintenanceSupportOverview";
import MaintenanceSupportOffer from "../components/services/maintenance-support/MaintenanceSupportOffer";
import MaintenanceSupportTechnologies from "../components/services/maintenance-support/MaintenanceSupportTechnologies";
import MaintenanceSupportIndustries from "../components/services/maintenance-support/MaintenanceSupportIndustries";
import MaintenanceSupportPortfolio from "../components/services/maintenance-support/MaintenanceSupportPortfolio";
import MaintenanceSupportCaseStudy from "../components/services/maintenance-support/MaintenanceSupportCaseStudy";
import MaintenanceSupportFAQ from "../components/services/maintenance-support/MaintenanceSupportFAQ";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../section/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function MaintenanceSupport() {
  return (
    <>
        <Navbar />
        <ScrollReveal><MaintenanceSupportHero /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportOverview /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportOffer /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportTechnologies /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportIndustries /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportPortfolio /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportCaseStudy /></ScrollReveal>
        <ScrollReveal><MaintenanceSupportFAQ /></ScrollReveal>
        <Footer />
    </>
  );
}
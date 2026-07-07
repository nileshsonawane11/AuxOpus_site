// src/pages/services/UIUXDesign.jsx

import UIUXHero from "../components/services/ui-ux/UIUXHero";
import UIUXOverview from "../components/services/ui-ux/UIUXOverview";
import UIUXOffer from "../components/services/ui-ux/UIUXOffer";
import UIUXTools from "../components/services/ui-ux/UIUXTools";
import UIUXIndustries from "../components/services/ui-ux/UIUXIndustries";
import UIUXPortfolio from "../components/services/ui-ux/UIUXPortfolio";
import UIUXCaseStudy from "../components/services/ui-ux/UIUXCaseStudy";
import UIUXFAQ from "../components/services/ui-ux/UIUXFAQ";
import Footer from "../section/Footer";
import Navbar from "../components/NavBar/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export default function UIUXDesign() {
  return (
    <>
        <Navbar />
        <ScrollReveal><UIUXHero /></ScrollReveal>
        <ScrollReveal><UIUXOverview /></ScrollReveal>
        <ScrollReveal><UIUXOffer /></ScrollReveal>
        <ScrollReveal><UIUXTools /></ScrollReveal>
        <ScrollReveal><UIUXIndustries /></ScrollReveal>
        <ScrollReveal><UIUXPortfolio /></ScrollReveal>
        <ScrollReveal><UIUXCaseStudy /></ScrollReveal>
        <ScrollReveal><UIUXFAQ /></ScrollReveal>
        <Footer />
    </>
  );
}
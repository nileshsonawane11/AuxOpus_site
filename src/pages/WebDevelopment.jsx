import React from "react";

import WebHero from "../components/services/web-development/WebHero";
import WebOverview from "../components/services/web-development/WebOverview";
import WebOffer from "../components/services/web-development/WebOffer";
import WebTechnologies from "../components/services/web-development/WebTechnologies";
import WebIndustries from "../components/services/web-development/WebIndustries";
import WebPortfolio from "../components/services/web-development/WebPortfolio";
import WebCaseStudy from "../components/services/web-development/WebCaseStudy";
import WebFAQ from "../components/services/web-development/WebFAQ";
import Footer from "../section/Footer.jsx";
import Navbar from "../components/NavBar/Navbar.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

export default function WebDevelopment() {
  return (
    <>
        <Navbar />
        <ScrollReveal><WebHero /></ScrollReveal>
        <ScrollReveal><WebOverview /></ScrollReveal>
        <ScrollReveal><WebOffer /></ScrollReveal>
        <ScrollReveal><WebTechnologies /></ScrollReveal>
        <ScrollReveal><WebIndustries /></ScrollReveal>
        <ScrollReveal><WebPortfolio /></ScrollReveal>
        <ScrollReveal><WebCaseStudy /></ScrollReveal>
        <ScrollReveal><WebFAQ /></ScrollReveal>
        <Footer />
    </>
  );
}
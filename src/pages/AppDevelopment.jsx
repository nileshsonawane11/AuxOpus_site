import React from "react";

import AppHero from "../components/services/app-development/AppHero";
import AppOverview from "../components/services/app-development/AppOverview";
import AppOffer from "../components/services/app-development/AppOffer";
import AppTechnologies from "../components/services/app-development/AppTechnologies";
import AppIndustries from "../components/services/app-development/AppIndustries";
import AppPortfolio from "../components/services/app-development/AppPortfolio";
import AppCaseStudy from "../components/services/app-development/AppCaseStudy";
import AppFAQ from "../components/services/app-development/AppFAQ";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../section/Footer";

export default function AppDevelopment() {
  return (
    <>
        <Navbar />
        <AppHero />
        <AppOverview />
        <AppOffer />
        <AppTechnologies />
        <AppIndustries />
        <AppPortfolio />
        <AppCaseStudy />
        <AppFAQ />
        <Footer />
    </>
  );
}
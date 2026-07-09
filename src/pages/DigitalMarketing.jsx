// src/pages/services/DigitalMarketing.jsx

import DigitalMarketingHero from "../components/services/digital-marketing/DigitalMarketingHero";
import DigitalMarketingOverview from "../components/services/digital-marketing/DigitalMarketingOverview";
import DigitalMarketingOffer from "../components/services/digital-marketing/DigitalMarketingOffer";
import DigitalMarketingTechnologies from "../components/services/digital-marketing/DigitalMarketingTechnologies";
import DigitalMarketingIndustries from "../components/services/digital-marketing/DigitalMarketingIndustries";
import DigitalMarketingPortfolio from "../components/services/digital-marketing/DigitalMarketingPortfolio";
import DigitalMarketingCaseStudy from "../components/services/digital-marketing/DigitalMarketingCaseStudy";
import DigitalMarketingFAQ from "../components/services/digital-marketing/DigitalMarketingFAQ";
import Navbar from "../components/NavBar/Navbar.jsx";
import Footer from "../section/Footer.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

export default function DigitalMarketing() {
  return (
    <>
        <Navbar />
        <DigitalMarketingHero />
        <DigitalMarketingOverview />
        <DigitalMarketingOffer />
        <DigitalMarketingTechnologies />
        <DigitalMarketingIndustries />
        {/* <DigitalMarketingPortfolio /> */}
        <DigitalMarketingCaseStudy />
        <DigitalMarketingFAQ />
        <Footer />
    </>
  );
}
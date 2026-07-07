import AIHero from "../components/services/ai-automation/AIHero";
import AIOverview from "../components/services/ai-automation/AIOverview";
import AIOffer from "../components/services/ai-automation/AIOffer";
import AITechnologies from "../components/services/ai-automation/AITechnologies";
import AIIndustries from "../components/services/ai-automation/AIIndustries";
import AIPortfolio from "../components/services/ai-automation/AIPortfolio";
import AICaseStudy from "../components/services/ai-automation/AICaseStudy";
import AIFAQ from "../components/services/ai-automation/AIFAQ";
import Footer from "../section/Footer";
import Navbar from "../components/NavBar/Navbar";

export default function AIAutomation() {
  return (
    <>
        <Navbar />
        <AIHero />
        <AIOverview />
        <AIOffer />
        <AITechnologies />
        <AIIndustries />
        <AIPortfolio />
        <AICaseStudy />
        <AIFAQ />
        <Footer />
    </>
  );
}
import React from 'react';
import ScrollReveal from "../components/ScrollReveal"; 
import Navbar from '../components/NavBar/Navbar.jsx';
import Hero from '../section/Hero.jsx';
import Overview from '../section/Overview.jsx';
import MissionVision from "../components/About/MissionVision";
import WhyToChoose from '../section/WhyToChoose.jsx';
import Industries from '../section/Industries.jsx';
import ContactHome from '../section/ContactHome.jsx';
import Testimonials from '../section/Testimonials.jsx';
import Footer from '../section/Footer.jsx';

export default function Home() {
  return (
    <>
      
        <Navbar />

        <Hero />

        <ScrollReveal delay={200}>
          <Overview />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <MissionVision />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <WhyToChoose />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Industries />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <ContactHome />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Testimonials />
        </ScrollReveal>

        <Footer />
    </>
  )
}

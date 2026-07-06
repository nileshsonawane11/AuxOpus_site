import React from 'react';
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

        <Overview />

        <MissionVision />

        <WhyToChoose />

        <Industries />

        <ContactHome />

        <Testimonials />

        <Footer />
    </>
  )
}

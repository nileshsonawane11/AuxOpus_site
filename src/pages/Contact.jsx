import React from "react";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactCards from "../components/contact/ContactCards";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";
import ContactSocial from "../components/contact/ContactSocial";
import Footer from "../section/Footer";
import Navbar from "../components/NavBar/Navbar";
import ScrollReveal from "../components/ScrollReveal"

export default function Contact() {
  return (
    <main className="bg-slate-50">

      <Navbar />

      <ContactHero />

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20">

        <div className="grid lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <ScrollReveal>
              <ContactInfo />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

        </div>

      </section>

      <ScrollReveal>
        <ContactCards />
      </ScrollReveal>

      <ScrollReveal>
        <ContactMap />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactFAQ />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactSocial />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
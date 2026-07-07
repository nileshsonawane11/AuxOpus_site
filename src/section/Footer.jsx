import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { footerContent } from "../constants/Footer.js";
import FloatingButtons from "../components/bottom/FloatingButtons.jsx";

export default function Footer() {
  const { cta, company, companyLinks, servicesLinks, contact, bottom } = footerContent;

  return (
    <footer className="bg-gray-200/30 text-black">
      <FloatingButtons />
      
      {/* CTA */}
      <div className="border-b border-white/10 p-10">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 p-10 md:p-16 text-white shadow-2xl mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-white">
              {cta.badge}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              {cta.heading.line1}
              <br />
              {cta.heading.line2}
            </h2>

            <p className="mt-4 text-gray-300 max-w-2xl">
              {cta.description}
            </p>
          </div>

          <Link
            to={cta.button.link}
            className="bg-white shadow-lg text-black px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition duration-300 flex items-center gap-2"
          >
            {cta.button.text}
            <FaArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {/* Company */}
        <div>
          <img src={company.logo} alt={company.alt} className="h-14 mb-5" />

          <p className="text-gray-400 leading-7">
            {company.description}
          </p>
        </div>

        <div className="flex items-start justify-between lg:w-full">
          {/* Company Links */}
          <div className="w-full">
            <h3 className="text-black font-semibold text-xl mb-5">
              {companyLinks.title}
            </h3>

            <ul className="space-y-3">
              {companyLinks.links.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 cursor-pointer transition"
                >
                  <Link to={link.link}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full">
            <h3 className="text-black font-semibold text-xl mb-5">
              {servicesLinks.title}
            </h3>

            <ul className="space-y-3">
              {servicesLinks.links.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black font-semibold text-xl mb-5">
            {contact.title}
          </h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <FaLocationDot className="mt-1 text-blue-400" size={20} />
              <p>
                {contact.address.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < contact.address.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-400" size={18} />
              <span>{contact.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" size={18} />
              <span>{contact.email}</span>
            </div>

            <div className="pt-4">
              <h4 className="text-black font-medium mb-3">
                {contact.social.title}
              </h4>

              <div className="flex gap-4">
                {contact.social.links.map((social, index) => {
                  const SocialIcon = Icons[social.icon];
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`h-11 w-11 rounded-full bg-white/10 ${social.hoverColor} transition flex items-center justify-center`}
                    >
                      {SocialIcon && <SocialIcon size={20} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-gray-200 border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            {bottom.copyright}
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            {bottom.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="hover:text-blue-400 transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
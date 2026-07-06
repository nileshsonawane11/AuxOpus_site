import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import {Link} from "react-router-dom"
import Logo from "../assets/AuxOpus.png";

export default function Footer() {
  return (
    <footer className="bg-gray-200/30 text-black">
      {/* CTA */}
      <div className="border-b border-white/10 p-10">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 p-10 md:p-16 text-white shadow-2xl mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-white">
              Let's Build Together
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Empower Your Business
              <br />
              With Innovative Technology
            </h2>

            <p className="mt-4 text-gray-300 max-w-2xl">
              We design, develop, and deliver reliable digital solutions that
              help businesses grow faster, operate smarter, and stay ahead of
              the competition.
            </p>
          </div>

          <Link to="/Contact" className="bg-white shadow-lg text-black px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition duration-300 flex items-center gap-2">
            Get Started
            <FaArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-3 md:grid-cols-2 gap-12">

        {/* Company */}
        <div>
          <img src={Logo} alt="AuxOpus" className="h-14 mb-5" />

          <p className="text-gray-400 leading-7">
            AuxOpus is a technology-driven company providing innovative software
            development, IT consulting, digital transformation, and business
            automation services to organizations worldwide.
          </p>
        </div>

        <div className="flex items-start justify-between lg:w-full">
            {/* Company Links */}
            <div className="w-full">
            <h3 className="text-black font-semibold text-xl mb-5">
                Company
            </h3>

            <ul className="space-y-3">
                <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
                <li className="hover:text-blue-400 cursor-pointer transition">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Services</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Portfolio</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Industries</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Careers</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
            </ul>
            </div>

            {/* Services */}
            <div className="w-full">
            <h3 className="text-black font-semibold text-xl mb-5">
                Our Services
            </h3>

            <ul className="space-y-3">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Custom Software</li>
                <li>UI / UX Design</li>
                <li>Cloud Solutions</li>
                <li>Artificial Intelligence</li>
                <li>Digital Marketing</li>
                <li>IT Consulting</li>
                <li>Resource Augmentation</li>
            </ul>
            </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black font-semibold text-xl mb-5">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <FaLocationDot className="mt-1 text-blue-400" size={20} />
              <p>
                Office No. XX,
                <br />
                Your Business Address,
                <br />
                Maharashtra, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-400" size={18} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" size={18} />
              <span>info@auxopus.com</span>
            </div>

            <div className="pt-4">
              <h4 className="text-black font-medium mb-3">
                Follow Us
              </h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-blue-500 transition flex items-center justify-center"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-gray-200 border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 AuxOpus Technologies LLP. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="Privacy-Policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="Terms&Conditions" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>

            <a href="Return-Policy" className="hover:text-blue-400 transition">
              Refund Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
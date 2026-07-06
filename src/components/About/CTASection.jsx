// CTASection.jsx

import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900">

      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl p-14">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-300 font-semibold">
                Let's Build Together
              </span>

              <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
                Ready To Transform
                <br />
                Your Business?
              </h2>

              <p className="text-blue-100 text-lg leading-8 mt-8 max-w-xl">
                Whether you're launching a startup, scaling your business,
                or modernizing enterprise software, AuxOpus is here to
                turn your ideas into powerful digital solutions.
              </p>

            </div>

            <div className="space-y-6">

              <div className="bg-white rounded-2xl p-6 flex items-center gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Call Us
                  </p>

                  <h3 className="font-bold text-xl">
                    +91 XXXXX XXXXX
                  </h3>
                </div>

              </div>

              <div className="bg-white rounded-2xl p-6 flex items-center gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email Us
                  </p>

                  <h3 className="font-bold text-xl">
                    hello@auxopus.com
                  </h3>
                </div>

              </div>

              <button className="w-full py-5 rounded-2xl bg-white text-black font-semibold text-lg flex items-center justify-center gap-3 hover:bg-cyan-400 transition">

                Start Your Project

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
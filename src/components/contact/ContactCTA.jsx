import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactCTA() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-5">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 p-10 md:p-16 text-white shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <p className="uppercase tracking-[0.3em] text-cyan-300 font-semibold">
                Ready to Begin?
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                Let's Build Your
                <br />
                Next Digital Success
              </h2>

              <p className="mt-6 text-blue-100 max-w-2xl leading-8">
                Whether you're launching a startup, modernizing an enterprise,
                or exploring AI-driven innovation, we're here to help.
              </p>

            </div>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Explore Services
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
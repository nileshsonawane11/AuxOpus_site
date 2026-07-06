import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaGlobe,
  FaServer,
  FaReact,
} from "react-icons/fa6";

export default function WebHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
              Web Design & Development
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              Build Websites
              <span className="block text-blue-600">
                That Grow Businesses
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-2xl">
              We design modern, responsive and scalable websites that improve
              user experience, strengthen your brand and generate measurable
              business growth.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-xl"
              >
                Start Your Project
                <FaArrowRight />
              </Link>

              <Link
                to="/portfolio"
                className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                View Portfolio
              </Link>

            </div>

          </div>

          <div className="relative h-[550px] hidden lg:block">

            <div className="absolute left-16 top-10 bg-white rounded-3xl shadow-2xl p-8 w-96 rotate-[-8deg]">

              <div className="flex justify-between">

                <FaLaptopCode
                  className="text-blue-600"
                  size={42}
                />

                <FaReact
                  className="text-cyan-500 animate-spin"
                  style={{ animationDuration: "10s" }}
                  size={40}
                />

              </div>

              <div className="mt-8 h-44 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400"></div>

            </div>

            <div className="absolute right-0 top-20 bg-white rounded-2xl shadow-xl p-6">

              <FaGlobe
                size={34}
                className="text-blue-600"
              />

              <p className="mt-4 font-bold">
                Responsive Design
              </p>

            </div>

            <div className="absolute bottom-10 left-10 bg-white rounded-2xl shadow-xl p-6">

              <FaServer
                size={34}
                className="text-cyan-600"
              />

              <p className="mt-4 font-bold">
                Secure Backend
              </p>

            </div>

            <div className="absolute bottom-16 right-10 bg-white rounded-2xl shadow-xl p-6">

              <FaCode
                size={34}
                className="text-indigo-600"
              />

              <p className="mt-4 font-bold">
                Clean Code
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
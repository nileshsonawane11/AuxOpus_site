import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCube,
  FaLayerGroup,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa6";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">

      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-52 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-3xl"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              <FaRocket />
              Our Portfolio
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">
              Turning Ideas Into
              <span className="text-blue-600"> Digital Success</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-8 text-slate-600 max-w-2xl">
              Explore our collection of innovative projects, business
              solutions, enterprise applications, and digital experiences
              crafted to solve real-world challenges and accelerate business
              growth.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold flex items-center gap-3 transition"
              >
                Start Your Project
                <FaArrowRight />
              </Link>

              <Link
                to="/services"
                className="rounded-2xl border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 font-semibold transition"
              >
                Our Services
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1500px]">

            {/* Center Card */}

            <div className="absolute z-20 w-80 rounded-[30px] bg-white shadow-2xl p-8 rotate-y-[-15deg] rotate-x-[10deg] hover:rotate-y-0 transition duration-700">

              <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400"></div>

              <h3 className="mt-8 text-2xl font-bold">
                Enterprise ERP
              </h3>

              <p className="mt-4 text-slate-500">
                End-to-end enterprise management platform.
              </p>

            </div>

            {/* Floating Card */}

            <div className="absolute top-5 left-0 w-52 rounded-3xl bg-white shadow-xl p-6 rotate-[-12deg] hover:-translate-y-2 transition">

              <FaLaptopCode className="text-5xl text-blue-600" />

              <div className="mt-6 font-bold">
                40+ Projects
              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-10 w-56 rounded-3xl bg-white shadow-xl p-6 rotate-[10deg] hover:translate-y-2 transition">

              <FaLayerGroup className="text-5xl text-cyan-600" />

              <div className="mt-6 font-bold">
                Multiple Industries
              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute top-20 right-0 w-52 rounded-3xl bg-white shadow-xl p-6 rotate-[12deg] hover:-translate-y-2 transition">

              <FaCube className="text-5xl text-blue-500" />

              <div className="mt-6 font-bold">
                Innovative Products
              </div>

            </div>

            {/* Background Ring */}

            <div className="absolute h-[430px] w-[430px] rounded-full border-[40px] border-blue-100"></div>

          </div>

        </div>

      </div>

    </section>
  );
}
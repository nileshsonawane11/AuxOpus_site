import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/BG.png";

import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBrain,
  FaCloud,
  FaShieldHalved,
  FaStar,
  FaUsers,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25"></div>

      {/* Blur */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[180px]" />

      <div className="relative mx-auto px-5 md:px-10 pt-20 pb-10 backdrop-blur-xl">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">

              <FaStar className="text-blue-700" />

              <span className="text-blue-700 font-semibold text-sm tracking-wide">
                Technology • Innovation • Growth
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">

              Empowering Businesses Through{" "}

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">

                Technology & Innovation

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl">

              Delivering innovative software solutions, digital transformation,
              AI-powered automation, and strategic consulting that help
              businesses scale faster, operate smarter, and stay ahead in an
              ever-changing digital world.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/Services"
                className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
              >

                Our Services

                <FaArrowRight className="transition group-hover:translate-x-1" />

              </Link>

              <Link
                to="/Contact"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >

                Talk To An Expert

              </Link>

            </div>

            {/* Trusted */}

            <div className="mt-12">

              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

                Trusted By

              </p>

              <div className="mt-5 flex flex-wrap gap-5">

                {[
                  "Startups",
                  "SMEs",
                  "Enterprises",
                  "Educational Institutes",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2 font-medium shadow-sm"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>
                    {/* RIGHT */}

          <div className="relative hidden lg:flex items-center justify-center min-h-[650px]">

            {/* Main Dashboard */}

            <div className="relative w-[540px] rounded-[34px] border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_35px_80px_rgba(0,0,0,0.15)] overflow-hidden">

              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">

                <div>

                  <p className="text-sm text-slate-500">
                    Business Dashboard
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    AuxOpus Analytics
                  </h3>

                </div>

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>

                </div>

              </div>

              {/* Body */}

              <div className="space-y-8 p-8">

                {/* Revenue */}

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-blue-100">
                        Business Growth
                      </p>

                      <h2 className="mt-2 text-4xl font-bold">
                        +128%
                      </h2>

                    </div>

                    <div className="rounded-2xl bg-white/20 p-4">

                      <FaArrowTrendUp size={34} />

                    </div>

                  </div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-slate-50 p-5 shadow">

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">
                        Active Projects
                      </span>

                      <FaCloud className="text-blue-600" />

                    </div>

                    <h3 className="mt-5 text-3xl font-bold">
                      48
                    </h3>

                    <div className="mt-3 h-2 rounded-full bg-slate-200">

                      <div className="h-full w-4/5 rounded-full bg-blue-600"></div>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5 shadow">

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">
                        AI Solutions
                      </span>

                      <FaBrain className="text-cyan-500" />

                    </div>

                    <h3 className="mt-5 text-3xl font-bold">
                      25+
                    </h3>

                    <div className="mt-3 h-2 rounded-full bg-slate-200">

                      <div className="h-full w-3/4 rounded-full bg-cyan-500"></div>

                    </div>

                  </div>

                </div>

                {/* Bottom */}

                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-5">

                  <div>

                    <p className="text-slate-500">
                      Customer Satisfaction
                    </p>

                    <h3 className="mt-1 text-3xl font-bold">
                      99.8%
                    </h3>

                  </div>

                  <div className="rounded-full bg-green-100 p-5">

                    <FaUsers
                      size={28}
                      className="text-green-600"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute left-0 top-20 rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-bounce">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3">

                  <FaBrain className="text-blue-600" />

                </div>

                <div>

                  <p className="font-semibold">
                    AI Automation
                  </p>

                  <span className="text-sm text-slate-500">
                    Smart Workflows
                  </span>

                </div>

              </div>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-5 top-48 rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-pulse">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-100 p-3">

                  <FaCloud className="text-cyan-600" />

                </div>

                <div>

                  <p className="font-semibold">
                    Cloud Ready
                  </p>

                  <span className="text-sm text-slate-500">
                    Secure Infrastructure
                  </span>

                </div>

              </div>

            </div>

            {/* Floating Card 3 */}

            <div className="absolute bottom-16 left-12 rounded-2xl bg-white p-5 shadow-2xl border border-slate-200">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3">

                  <FaShieldHalved className="text-green-600" />

                </div>

                <div>

                  <p className="font-semibold">
                    Enterprise Security
                  </p>

                  <span className="text-sm text-slate-500">
                    Protected Systems
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Stats */}

        <div className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {[
            {
              value: "10+",
              title: "Industry Services",
              icon: <FaCloud />,
            },
            {
              value: "5+",
              title: "Technology Domains",
              icon: <FaBrain />,
            },
            {
              value: "100%",
              title: "Client-Focused Approach",
              icon: <FaUsers />,
            },
            {
              value: "24/7",
              title: "Support & Assistance",
              icon: <FaShieldHalved />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/50 backdrop-blur-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover Gradient */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

              {/* Icon */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                {item.icon}
              </div>

              {/* Number */}

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                {item.value}
              </h2>

              {/* Title */}

              <p className="mt-3 text-slate-600 leading-7">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
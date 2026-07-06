import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import BG from "../../assets/Company_BG.jpeg"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white flex items-center">
      {/* Background Blur */}
      {/* <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[100px]" /> */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-50 bg-cover bg-left md:bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">
              🚀 About AuxOpus
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900">
              Engineering
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              We empower startups and enterprises with innovative software,
              intelligent automation, and scalable digital solutions that drive
              business growth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button className="cursor-pointer group flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-600">
                Explore Services
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>

              <button className="cursor-pointer flex items-center gap-3 rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-600">
                <FaPlay />
                Watch Overview
              </button>

            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-4xl font-bold text-blue-600">100+</h2>
                <p className="mt-2 text-gray-500">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-600">25+</h2>
                <p className="mt-2 text-gray-500">
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-600">5+</h2>
                <p className="mt-2 text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}
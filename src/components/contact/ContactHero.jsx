import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-blue-550 text-black">

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-28">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-blue-400/10 px-5 py-2 backdrop-blur-xl">

            <FaEnvelopeOpenText />

            <span className="text-sm tracking-wider uppercase">
              Contact AuxOpus
            </span>

          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

            Let's Build
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Something Amazing
            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl">

            Whether you're planning a new project, looking for technology
            consulting, or simply have a question, our team is ready to help.

          </p>

        </div>

      </div>

    </section>
  );
}
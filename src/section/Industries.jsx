// src/components/Industries.jsx
import React from "react";
import * as Icons from "react-icons/fa6";
import { industriesContent } from "../constants/Home.js";

export default function Industries() {
  const { badge, heading, description, industries } = industriesContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20">
      {/* Background Blur */}
      <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            {heading}
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              >
                {/* Hover Line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl bg-blue-100 text-4xl text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-center leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
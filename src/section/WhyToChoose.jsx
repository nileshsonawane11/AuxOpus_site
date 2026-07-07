import React from "react";
import {
  FaHandshake,
  FaAward,
  FaPuzzlePiece,
  FaLightbulb,
  FaUsers,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { whyChooseContent } from "../constants/Home.js";

// Icon mapping (can be shared across components)
const iconMap = {
  FaHandshake,
  FaAward,
  FaPuzzlePiece,
  FaLightbulb,
  FaUsers,
  FaArrowTrendUp,
};

export default function WhyToChoose() {
  const { badge, heading, description, cards } = whyChooseContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Top Gradient Line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                  {IconComponent && <IconComponent />}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-5 overflow-hidden text-gray-600 leading-7 max-h-40 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-500">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
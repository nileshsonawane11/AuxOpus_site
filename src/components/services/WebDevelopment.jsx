import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { webDevelopmentContent } from "../../constants/Services.js";

export default function WebDevelopment() {
  const { badge, heading, description, features, cards, button } = webDevelopmentContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-blue-600 uppercase tracking-[0.3em] font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              {heading.line1}
              <span className="text-blue-600">{heading.highlightedText}</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <FaCheck size={12} />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const IconComponent = Icons[card.icon];
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-slate-50 p-8 shadow hover:-translate-y-2 hover:shadow-xl transition"
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
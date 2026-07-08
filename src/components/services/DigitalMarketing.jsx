import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { digitalMarketingContent } from "../../constants/Services.js";

export default function DigitalMarketing() {
  const { badge, heading, description, services, cards, button } = digitalMarketingContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              {heading.line1}
              <span className="block text-blue-600">
                {heading.highlightedText}
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheck className="text-blue-600" />
                  {service}
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-slate-900 transition">
              {button.text}
              <FaArrowRight />
            </button>
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
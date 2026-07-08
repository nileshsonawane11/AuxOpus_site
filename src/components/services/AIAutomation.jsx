import React from "react";
import * as Icons from "react-icons/fa6";
import { aiAutomationContent } from "../../constants/Services.js";

export default function AIAutomation() {
  const { badge, heading, description, cards } = aiAutomationContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {cards.map((card, index) => {
            const IconComponent = Icons[card.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-50 p-8 hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
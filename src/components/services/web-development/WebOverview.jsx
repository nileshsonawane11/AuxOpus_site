import React from "react";
import { webOverviewContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebOverview() {
  const { badge, heading, description, cards } = webOverviewContent;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-4xl">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            {badge}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <div key={index} className={`${card.bgColor} rounded-3xl p-8`}>
              <h3 className="font-bold text-2xl">
                {card.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
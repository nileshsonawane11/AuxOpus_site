import React from "react";
import { appOverviewContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppOverview() {
  const { badge, heading, description, cards } = appOverviewContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <span className="uppercase tracking-widest text-violet-600 font-semibold">
          {badge}
        </span>

        <h2 className="mt-4 text-5xl font-bold">
          {heading}
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-9 max-w-4xl">
          {description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-8 rounded-3xl`}
            >
              <h3 className="font-bold text-2xl">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
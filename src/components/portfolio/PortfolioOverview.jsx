import React from "react";
import * as Icons from "react-icons/fa6";
import { portfolioOverviewContent } from "../../constants/Portfolio.js";

export default function PortfolioOverview() {
  const { badge, heading, paragraphs, highlights } = portfolioOverviewContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {heading.line1}
              <br />
              {heading.line2}
            </h2>

            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-8" : "mt-6"} text-lg text-slate-600 leading-8`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-600 group-hover:scale-110 transition">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
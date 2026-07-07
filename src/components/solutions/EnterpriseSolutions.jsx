import React from "react";
import { FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { enterpriseSolutionsContent } from "../../constants/OurSolutions.js";

export default function EnterpriseSolutions() {
  const { badge, heading, description, solutions, cards } = enterpriseSolutionsContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading.line1}
              <span className="text-blue-600">{heading.highlightedText}</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              {solutions.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <FaCheck className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl transition"
                >
                  <div className="text-5xl text-blue-600">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {item.title}
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
import React from "react";
import { FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { aiSolutionsContent } from "../../constants/OurSolutions.js";

export default function AISolutions() {
  const { badge, heading, description, features, cards } = aiSolutionsContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {cards.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 hover:shadow-xl transition"
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

          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center"
                >
                  <FaCheck className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
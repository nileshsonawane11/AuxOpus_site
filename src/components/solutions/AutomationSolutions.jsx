import React from "react";
import * as Icons from "react-icons/fa6";
import { automationSolutionsContent } from "../../constants/OurSolutions.js";

export default function AutomationSolutions() {
  const { heading, description, cards } = automationSolutionsContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {cards.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-50 p-10 hover:shadow-xl hover:-translate-y-2 transition"
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
    </section>
  );
}
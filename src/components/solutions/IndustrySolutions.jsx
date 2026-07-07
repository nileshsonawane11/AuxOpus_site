import React from "react";
import * as Icons from "react-icons/fa6";
import { industrySolutionsContent } from "../../constants/OurSolutions.js";

export default function IndustrySolutions() {
  const { heading, description, industries } = industrySolutionsContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {industries.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-5xl text-blue-600">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
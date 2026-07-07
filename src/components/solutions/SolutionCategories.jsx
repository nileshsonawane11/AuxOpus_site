import React from "react";
import * as Icons from "react-icons/fa6";
import { solutionCategoriesContent } from "../../constants/OurSolutions.js";

export default function SolutionCategories() {
  const { heading, categories } = solutionCategoriesContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {categories.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow p-10 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-blue-600 text-5xl">
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
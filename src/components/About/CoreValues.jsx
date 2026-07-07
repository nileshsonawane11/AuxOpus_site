// CoreValues.jsx

import React from "react";
import * as Icons from "react-icons/fa6";
import { coreValuesContent } from "../../constants/AboutUs.js";

export default function CoreValues() {
  const { badge, heading, description, values } = coreValuesContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="text-5xl font-bold mt-4">
            {heading}
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {values.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 p-8 bg-white hover:bg-blue-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl text-blue-600 group-hover:bg-white group-hover:text-blue-600 transition">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-2xl font-bold group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600 group-hover:text-blue-100">
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
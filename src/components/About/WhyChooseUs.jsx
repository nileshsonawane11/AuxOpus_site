// WhyChooseUs.jsx

import React from "react";
import { FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { whyChooseUsContent } from "../../constants/AboutUs.js";

export default function WhyChooseUs() {
  const { badge, heading, description, checklist, features } = whyChooseUsContent;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-widest font-semibold text-blue-600">
              {badge}
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              {heading}
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              {description}
            </p>

            <div className="space-y-5 mt-10">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <FaCheck />
                  </div>

                  <p className="text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            {features.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-x-3 transition-all duration-500 flex gap-6"
                >
                  <div className="w-20 h-20 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-4xl group-hover:bg-blue-600 group-hover:text-white transition">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
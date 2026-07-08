import React from "react";
import { FaCheck } from "react-icons/fa6";
import { serviceComparisonContent } from "../../constants/Services.js";

export default function ServiceComparison() {
  const { heading, description, plans } = serviceComparisonContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border-2 ${plan.color} p-8 ${
                plan.featured ? "shadow-2xl scale-105" : "shadow"
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-10 space-y-5">
                {plan.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-center"
                  >
                    <FaCheck className="text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import * as Icons from "react-icons/fa6";
import { developmentProcessContent } from "../../constants/Services.js";

export default function DevelopmentProcess() {
  const { badge, heading, description, steps } = developmentProcessContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => {
            const IconComponent = Icons[step.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <div className="mt-8">
                  <div className="text-sm font-semibold text-blue-600">
                    STEP {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold mt-2">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
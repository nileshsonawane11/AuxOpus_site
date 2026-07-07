import React from "react";
import * as Icons from "react-icons/fa6";
import { solutionProcessContent } from "../../constants/OurSolutions.js";

export default function SolutionProcess() {
  const { badge, heading, process } = solutionProcessContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {process.map((step, index) => {
            const IconComponent = Icons[step.icon];
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition"
              >
                <div className="absolute top-6 right-6 text-6xl font-black text-slate-100">
                  0{index + 1}
                </div>

                <div className="text-5xl text-blue-600">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-7">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
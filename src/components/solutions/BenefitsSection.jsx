import React from "react";
import * as Icons from "react-icons/fa6";
import { benefitsSectionContent } from "../../constants/OurSolutions.js";

export default function BenefitsSection() {
  const { heading, benefits } = benefitsSectionContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {benefits.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-50 p-10 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="text-blue-600 text-5xl">
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
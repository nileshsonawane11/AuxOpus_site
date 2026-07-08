import React from "react";
import * as Icons from "react-icons/fa6";
import { clientBenefitsContent } from "../../constants/Services.js";

export default function ClientBenefits() {
  const { heading, benefits } = clientBenefitsContent;

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
                className="border rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition"
              >
                <div className="text-5xl text-blue-600">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
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
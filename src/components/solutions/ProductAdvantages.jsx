import React from "react";
import * as Icons from "react-icons/fa6";
import { productAdvantagesContent } from "../../constants/OurSolutions.js";

export default function ProductAdvantages() {
  const { advantages } = productAdvantagesContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {advantages.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
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
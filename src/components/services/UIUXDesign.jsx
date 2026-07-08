import React from "react";
import * as Icons from "react-icons/fa6";
import { uiuxDesignContent } from "../../constants/Services.js";

export default function UIUXDesign() {
  const { heading, description, services } = uiuxDesignContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {services.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-10 shadow hover:shadow-xl hover:-translate-y-2 transition"
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
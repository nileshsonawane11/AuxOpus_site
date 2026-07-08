import React from "react";
import { FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { maintenanceSupportContent } from "../../constants/Services.js";

export default function MaintenanceSupport() {
  const { badge, heading, description, items, cards } = maintenanceSupportContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const IconComponent = Icons[card.icon];
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow hover:shadow-xl hover:-translate-y-2 transition"
                >
                  <div className="text-5xl text-blue-600">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <h3 className="mt-8 text-xl font-bold">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheck className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
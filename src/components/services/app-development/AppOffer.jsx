import React from "react";
import * as Icons from "react-icons/fa6";
import { appOfferContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppOffer() {
  const { heading, services } = appOfferContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-5xl font-bold">
          {heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow hover:-translate-y-3 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 text-2xl">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { appIndustriesContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppIndustries() {
  const { heading, industries } = appIndustriesContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-5xl font-bold">
          {heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 transition text-center"
            >
              <h3 className="text-xl font-bold">
                {industry.name}
              </h3>

              <p className="mt-4 text-slate-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
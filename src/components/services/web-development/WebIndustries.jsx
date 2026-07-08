import React from "react";
import { webIndustriesContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebIndustries() {
  const { heading, industries } = webIndustriesContent;

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-4xl font-bold">
          {heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl hover:-translate-y-2 transition text-center"
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
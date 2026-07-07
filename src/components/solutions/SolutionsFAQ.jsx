import React from "react";
import { solutionsFAQContent } from "../../constants/OurSolutions.js";

export default function SolutionsFAQ() {
  const { heading, faqs } = solutionsFAQContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-8"
            >
              <h3 className="text-xl font-semibold">
                {faq.q}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
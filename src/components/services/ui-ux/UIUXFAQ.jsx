// src/components/services/ui-ux/UIUXFAQ.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { uiuxFAQContent } from "../../../constants/Services/UIUXDesign.js";

export default function UIUXFAQ() {
  const [active, setActive] = useState(0);
  const { badge, heading, description, faqs } = uiuxFAQContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            {heading}
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
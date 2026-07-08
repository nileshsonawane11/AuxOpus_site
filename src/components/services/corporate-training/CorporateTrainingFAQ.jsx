// src/components/services/corporate-training/CorporateTrainingFAQ.jsx

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { corporateTrainingFAQContent } from "../../../constants/Services/CorporateTraining.js";

export default function CorporateTrainingFAQ() {
  const [active, setActive] = useState(0);
  const { heading, faqs } = corporateTrainingFAQContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`rounded-3xl border transition ${
                active === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200"
              }`}
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <ChevronRight
                  className={`transition ${
                    active === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-7 pb-7 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
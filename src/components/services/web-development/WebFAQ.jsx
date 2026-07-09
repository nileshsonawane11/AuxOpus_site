import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { webFAQContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebFAQ() {
  const [active, setActive] = useState(0);
  const { badge, heading, faqs } = webFAQContent;

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl ${active === index ? 'border border-blue-600 bg-blue-50' : 'shadow-md'}`}
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.q}
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
                    {faq.a}
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
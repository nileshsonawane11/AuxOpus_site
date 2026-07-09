import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { appFAQContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppFAQ() {
  const [active, setActive] = useState(0);
  const { badge, heading, faqs } = appFAQContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center">
          <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
            {badge}
          </span>

          <h2 className="text-5xl font-bold mt-5">
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
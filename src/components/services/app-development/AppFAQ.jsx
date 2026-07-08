import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { appFAQContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppFAQ() {
  const [open, setOpen] = useState(0);
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

        <div className="space-y-5 mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 font-semibold text-left"
              >
                {faq.question}

                {open === index ? <FaMinus /> : <FaPlus />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-60"
                    : "max-h-0"
                }`}
              >
                <p className="px-8 pb-6 text-slate-600 leading-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
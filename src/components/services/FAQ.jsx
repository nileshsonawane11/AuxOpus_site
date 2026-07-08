import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { faqContent } from "../../constants/Services.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { heading, faqs } = faqContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.q}
                </span>

                <FaChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
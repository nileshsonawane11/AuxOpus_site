import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { webFAQContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebFAQ() {
  const [open, setOpen] = useState(0);
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
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 font-semibold text-left"
              >
                {faq.q}

                {open === index ? <FaMinus /> : <FaPlus />}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index
                    ? "max-h-60"
                    : "max-h-0"
                }`}
              >
                <p className="px-8 pb-6 leading-8 text-slate-600">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { contactFAQContent } from "../../constants/Contact.js";

export default function ContactFAQ() {
  const { heading, description, faqs } = contactFAQContent;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-5 text-slate-600">
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-3xl bg-white shadow-md p-8"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <FaChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-6 text-slate-600 leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
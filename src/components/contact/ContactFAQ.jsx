import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "How soon will you respond?",
    answer:
      "We usually respond within one business day. Urgent inquiries receive priority attention.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, SMEs, enterprises, educational institutions, and government organizations.",
  },
  {
    question: "Can we schedule an online meeting?",
    answer:
      "Absolutely. We offer meetings through Google Meet, Microsoft Teams, or Zoom.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We are happy to sign Non-Disclosure Agreements before discussing confidential projects.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600">
            Answers to some common questions before you get in touch.
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
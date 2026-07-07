// src/components/services/digital-marketing/DigitalMarketingFAQ.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Depending on competition and website authority, noticeable improvements typically begin within 3–6 months.",
  },
  {
    question: "Do you manage Google Ads and Meta Ads?",
    answer:
      "Yes. We create, manage, optimize, and monitor campaigns across Google Ads, Facebook, Instagram, LinkedIn, and YouTube.",
  },
  {
    question: "Can you help generate more leads for my business?",
    answer:
      "Absolutely. Our strategies focus on attracting qualified traffic, improving conversion rates, and maximizing lead generation.",
  },
  {
    question: "Will I receive campaign reports?",
    answer:
      "Yes. We provide detailed performance reports including traffic, conversions, ROI, ad spend, and actionable recommendations.",
  },
  {
    question: "Do you offer social media management?",
    answer:
      "Yes. We create content calendars, manage social platforms, run paid campaigns, and analyze engagement metrics.",
  },
  {
    question: "Can digital marketing help local businesses?",
    answer:
      "Definitely. Local SEO, Google Business Profile optimization, and targeted advertising are highly effective for local businesses.",
  },
];

export default function DigitalMarketingFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Answers to common questions about our Digital Marketing services.
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
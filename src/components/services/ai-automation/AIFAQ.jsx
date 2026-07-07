// src/components/services/ai-automation/AIFAQ.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What AI solutions do you develop?",
    answer:
      "We build AI chatbots, virtual assistants, workflow automation systems, document intelligence platforms, predictive analytics solutions, AI agents, recommendation engines, and custom AI applications.",
  },
  {
    question: "Can AI integrate with our existing ERP or CRM?",
    answer:
      "Yes. Our AI solutions integrate seamlessly with ERP, CRM, HRMS, accounting software, and custom enterprise applications using secure APIs.",
  },
  {
    question: "Which AI models do you work with?",
    answer:
      "We work with OpenAI GPT, Google Gemini, Claude, Llama, Mistral, and other open-source models depending on your business requirements.",
  },
  {
    question: "Is our business data secure?",
    answer:
      "Absolutely. We follow enterprise-grade security standards including encryption, access control, secure APIs, and private deployment options.",
  },
  {
    question: "How long does an AI implementation take?",
    answer:
      "The timeline depends on project complexity, integrations, and business goals. Most AI solutions are delivered through phased development and deployment.",
  },
  {
    question: "Do you provide post-deployment support?",
    answer:
      "Yes. We offer monitoring, maintenance, optimization, model improvements, and long-term technical support for all AI solutions.",
  },
];

export default function AIFAQ() {
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
            Everything you need to know about our AI & Automation services.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
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
// src/components/services/corporate-training/CorporateTrainingFAQ.jsx

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Can the training be customized for our company?",
    answer:
      "Yes. Every training program is customized based on your team's skills, technologies, business goals, and project requirements.",
  },
  {
    question: "Do you provide online and onsite training?",
    answer:
      "Yes. We offer classroom training, virtual instructor-led sessions, hybrid learning, and self-paced programs.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes. Participants receive industry-recognized completion certificates after successfully completing the training.",
  },
  {
    question: "Do you include hands-on projects?",
    answer:
      "Absolutely. Every program includes practical assignments, real-world projects, coding exercises, and assessments.",
  },
  {
    question: "Which technologies do you cover?",
    answer:
      "We cover Web Development, Mobile Apps, AI, Machine Learning, Cloud, DevOps, Cyber Security, UI/UX, Databases, and Enterprise Software.",
  },
];

export default function CorporateTrainingFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
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
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "Do you develop Android and iOS applications?",
    answer: "Yes. We develop Android, iOS and cross-platform mobile applications."
  },
  {
    question: "Which framework do you recommend?",
    answer: "Flutter for most businesses and native development for high-performance applications."
  },
  {
    question: "Can you publish apps on Play Store and App Store?",
    answer: "Yes, we handle complete deployment."
  },
  {
    question: "Will I receive source code?",
    answer: "Yes, after successful project completion."
  },
  {
    question: "Can existing apps be redesigned?",
    answer: "Yes, including UI redesign and performance optimization."
  },
  {
    question: "Do you provide backend APIs?",
    answer: "Yes, complete backend development is included."
  },
  {
    question: "Can apps work offline?",
    answer: "Yes, depending on business requirements."
  },
  {
    question: "Will my app be secure?",
    answer: "We implement authentication, encryption and secure APIs."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, annual maintenance and support plans are available."
  },
  {
    question: "How long does development take?",
    answer: "Generally between 6 and 16 weeks depending on features."
  },
];

export default function AppFAQ() {

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center">

          <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
            FAQs
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Frequently Asked Questions
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
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Usually 2–8 weeks depending on project complexity.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Yes, every website is fully responsive.",
  },
  {
    q: "Can you redesign existing websites?",
    a: "Yes, we modernize outdated websites.",
  },
  {
    q: "Do you provide SEO?",
    a: "Basic SEO is included in every project.",
  },
  {
    q: "Can you build custom ERP portals?",
    a: "Yes, completely customized solutions.",
  },
  {
    q: "Which technologies do you use?",
    a: "React, Laravel, Node, PHP, Spring Boot and more.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes, cloud deployment and hosting support.",
  },
  {
    q: "Will I get source code?",
    a: "Yes after project completion.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, annual and monthly maintenance plans.",
  },
  {
    q: "Can you integrate APIs?",
    a: "Yes, payment gateways, CRM, ERP and third-party APIs.",
  },
];

export default function WebFAQ() {

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            FAQs
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
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
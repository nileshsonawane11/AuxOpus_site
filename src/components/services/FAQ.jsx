import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Depending on project complexity, development may take from a few weeks to several months.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance, updates, monitoring, and technical support.",
  },
  {
    q: "Can you modernize existing software?",
    a: "Absolutely. We redesign, optimize, and migrate legacy systems.",
  },
  {
    q: "Do you sign NDA?",
    a: "Yes. Client confidentiality is always maintained.",
  },
  {
    q: "Can you work with startups?",
    a: "Yes. We help startups from MVP development to enterprise-scale platforms.",
  },
];

export default function FAQ() {

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
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
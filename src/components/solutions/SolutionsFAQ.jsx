import React from "react";

const faqs = [
  {
    q: "Can solutions be customized?",
    a: "Yes. Every solution is tailored according to your business workflow and objectives.",
  },
  {
    q: "Can you integrate existing software?",
    a: "Absolutely. We integrate CRMs, ERPs, payment gateways, APIs, and third-party platforms.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance, monitoring, upgrades, and technical support.",
  },
  {
    q: "Are your solutions scalable?",
    a: "Yes. They are designed to grow with your business requirements.",
  },
];

export default function SolutionsFAQ() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow p-8"
            >

              <h3 className="text-xl font-semibold">
                {faq.q}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {faq.a}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
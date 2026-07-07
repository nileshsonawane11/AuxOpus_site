// src/components/services/maintenance-support/MaintenanceSupportFAQ.jsx

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you provide 24×7 technical support?",
    a: "Yes. Our support team continuously monitors your infrastructure and responds quickly to critical incidents.",
  },
  {
    q: "Do you support cloud infrastructure?",
    a: "Yes. We maintain AWS, Azure, Google Cloud, DigitalOcean, and hybrid cloud environments.",
  },
  {
    q: "Can you maintain software developed by another company?",
    a: "Absolutely. We perform audits, understand the architecture, and provide ongoing maintenance regardless of the original developer.",
  },
  {
    q: "Do you provide SLA-based support?",
    a: "Yes. We offer customizable Service Level Agreements based on your business requirements.",
  },
  {
    q: "What is included in maintenance?",
    a: "Bug fixes, monitoring, backups, security updates, performance optimization, infrastructure management, and technical support.",
  },
];

export default function MaintenanceSupportFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold">
                  {faq.q}
                </h3>

                {open === index ? <Minus /> : <Plus />}
              </button>

              {open === index && (
                <p className="px-6 pb-6 leading-7 text-slate-600">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
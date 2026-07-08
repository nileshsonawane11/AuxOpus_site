// src/components/services/maintenance-support/MaintenanceSupportFAQ.jsx

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { maintenanceSupportFAQContent } from "../../../constants/Services/MaintenanceSupport.js";

export default function MaintenanceSupportFAQ() {
  const [open, setOpen] = useState(0);
  const { heading, faqs } = maintenanceSupportFAQContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            {heading}
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
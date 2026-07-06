import React from "react";
import { FaCheck } from "react-icons/fa6";

const plans = [
  {
    title: "Startup",
    color: "border-slate-200",
    features: [
      "Business Website",
      "Responsive Design",
      "Basic SEO",
      "Contact Forms",
      "Email Support",
    ],
  },
  {
    title: "Business",
    color: "border-blue-600",
    featured: true,
    features: [
      "Custom Web App",
      "Admin Dashboard",
      "Authentication",
      "API Integration",
      "Analytics",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    color: "border-slate-200",
    features: [
      "Custom ERP/CRM",
      "AI Integration",
      "Cloud Deployment",
      "Dedicated Team",
      "24×7 Support",
      "Scalable Infrastructure",
    ],
  },
];

export default function ServiceComparison() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Suitable For Every Business
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Whether you're launching your first startup or scaling a global
            enterprise, we have the right technology solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl border-2 ${plan.color} p-8 ${
                plan.featured ? "shadow-2xl scale-105" : "shadow"
              }`}
            >

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-10 space-y-5">

                {plan.features.map((item, i) => (

                  <div
                    key={i}
                    className="flex gap-3 items-center"
                  >
                    <FaCheck className="text-blue-600" />

                    {item}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
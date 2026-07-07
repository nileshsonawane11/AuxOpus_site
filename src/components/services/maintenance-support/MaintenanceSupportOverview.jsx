// src/components/services/maintenance-support/MaintenanceSupportOverview.jsx

import {
  ShieldCheck,
  Clock3,
  Activity,
  Wrench,
  Cpu,
  Bug,
} from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Security Maintenance",
    description:
      "Regular patching, security audits, vulnerability fixes, and infrastructure hardening.",
  },
  {
    icon: Activity,
    title: "24×7 Monitoring",
    description:
      "Continuous monitoring of servers, databases, APIs, and cloud infrastructure.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Identify issues before they become failures through proactive maintenance.",
  },
  {
    icon: Clock3,
    title: "Rapid Incident Response",
    description:
      "Dedicated support engineers minimize downtime with quick issue resolution.",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description:
      "Improve application speed, scalability, and infrastructure efficiency.",
  },
  {
    icon: Bug,
    title: "Bug Fixes & Enhancements",
    description:
      "Continuous improvements, feature updates, and issue resolution after deployment.",
  },
];

export default function MaintenanceSupportOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            Overview
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Reliable Support Beyond Deployment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Launching software is only the beginning. Our maintenance services
            ensure your systems remain secure, stable, fast, and available as
            your business grows.
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-50 transition-all group-hover:scale-150" />

                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-slate-900 p-4">
                    <Icon className="text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
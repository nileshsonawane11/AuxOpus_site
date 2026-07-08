// src/components/services/maintenance-support/MaintenanceSupportOverview.jsx

import {
  ShieldCheck,
  Clock3,
  Activity,
  Wrench,
  Cpu,
  Bug,
} from "lucide-react";
import { maintenanceSupportOverviewContent } from "../../../constants/Services/MaintenanceSupport.js";

const cardIcons = [ShieldCheck, Activity, Wrench, Clock3, Cpu, Bug];

export default function MaintenanceSupportOverview() {
  const { badge, heading, description, cards } = maintenanceSupportOverviewContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            {heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = cardIcons[index];
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
// src/components/services/maintenance-support/MaintenanceSupportIndustries.jsx

import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  GraduationCap,
  Hotel,
  Trophy,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { maintenanceSupportIndustriesContent } from "../../../constants/Services/MaintenanceSupport.js";

const industryIcons = [
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  GraduationCap,
  Hotel,
  Trophy,
  Building2,
];

export default function MaintenanceSupportIndustries() {
  const { badge, heading, description, industries } = maintenanceSupportIndustriesContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              {heading}
            </h2>
          </div>

          <div className="hidden lg:block max-w-md text-right text-slate-600">
            {description}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <div
                key={industry.title}
                className="group flex gap-6 rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-blue-500 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${industry.color}`}
                >
                  <Icon size={30} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {industry.title}
                    </h3>

                    <ArrowUpRight className="text-blue-600 opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {industry.description}
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
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

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    color: "bg-red-50 text-red-600",
    description:
      "24/7 support for hospital systems, EMR platforms, telemedicine applications, and healthcare infrastructure.",
  },
  {
    icon: Landmark,
    title: "Finance",
    color: "bg-emerald-50 text-emerald-600",
    description:
      "Secure maintenance for banking systems, payment gateways, fintech platforms, and compliance updates.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    color: "bg-orange-50 text-orange-600",
    description:
      "Ensure uninterrupted shopping experiences with infrastructure monitoring and rapid incident response.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    color: "bg-blue-50 text-blue-600",
    description:
      "Maintain ERP systems, production monitoring software, IoT infrastructure, and analytics platforms.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "bg-violet-50 text-violet-600",
    description:
      "Support LMS platforms, online examination portals, ERP systems, and digital classrooms.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    color: "bg-cyan-50 text-cyan-600",
    description:
      "Continuous monitoring for booking engines, hotel management systems, and POS solutions.",
  },
  {
    icon: Trophy,
    title: "Sports",
    color: "bg-amber-50 text-amber-600",
    description:
      "Maintain live scoring platforms, tournament systems, broadcasting APIs, and fan engagement apps.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    color: "bg-slate-100 text-slate-700",
    description:
      "End-to-end support for CRM, HRMS, ERP, cloud infrastructure, and enterprise software ecosystems.",
  },
];

export default function MaintenanceSupportIndustries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-blue-600 font-semibold">
              Industries
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Trusted Across Multiple Industries
            </h2>
          </div>

          <div className="hidden lg:block max-w-md text-right text-slate-600">
            We ensure mission-critical applications remain secure,
            available, and optimized regardless of industry.
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;

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
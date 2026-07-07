// src/components/services/ui-ux/UIUXIndustries.jsx

import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  Building2,
  Hotel,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "High-converting shopping experiences with intuitive navigation, seamless checkout flows, and personalized product discovery.",
    tags: ["Marketplace", "Checkout", "Product Pages"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Accessible and user-friendly healthcare platforms, appointment systems, patient portals, and telemedicine applications.",
    tags: ["Patient Portal", "Telemedicine", "EMR UI"],
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Secure, trustworthy, and intuitive banking dashboards, fintech platforms, and investment applications.",
    tags: ["Banking", "FinTech", "Insurance"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Interactive LMS platforms, online learning portals, student dashboards, and educational mobile applications.",
    tags: ["LMS", "E-Learning", "Student Portal"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial dashboards, production monitoring systems, inventory management, and ERP interfaces.",
    tags: ["ERP", "Production", "Analytics"],
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "Modern SaaS products, CRM systems, HRMS platforms, and enterprise software with exceptional usability.",
    tags: ["CRM", "HRMS", "SaaS"],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Hotel booking systems, restaurant management, travel platforms, and guest experience applications.",
    tags: ["Hotels", "Travel", "Booking"],
  },
  {
    icon: Trophy,
    title: "Sports",
    description:
      "Sports management platforms, live scoring systems, athlete dashboards, and fan engagement applications.",
    tags: ["Live Score", "Analytics", "Events"],
  },
];

export default function UIUXIndustries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Industries
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Designing Experiences Across Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every industry has unique users and challenges. We design tailored
            experiences that improve usability, engagement, and business
            performance.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    className="text-blue-600 group-hover:text-white"
                    size={26}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3">
                  Explore
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
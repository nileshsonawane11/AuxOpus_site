// src/components/services/digital-marketing/DigitalMarketingPortfolio.jsx

import {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Growth Campaign",
    category: "SEO + PPC",
    description:
      "Executed a full-funnel SEO and paid advertising strategy to increase online sales and reduce acquisition costs.",
    result: "+310% Organic Traffic",
  },
  {
    icon: GraduationCap,
    title: "University Lead Generation",
    category: "Education Marketing",
    description:
      "Designed multi-channel campaigns that significantly increased admission inquiries and enrollment applications.",
    result: "+180% Student Leads",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Digital Presence",
    category: "Local SEO",
    description:
      "Improved search visibility, online reputation, and appointment bookings for a healthcare provider.",
    result: "+240% Appointment Requests",
  },
  {
    icon: Building2,
    title: "B2B SaaS Marketing",
    category: "Performance Marketing",
    description:
      "Generated qualified enterprise leads using LinkedIn Ads, content marketing, and landing page optimization.",
    result: "4.9X Marketing ROI",
  },
  {
    icon: LineChart,
    title: "Brand Awareness Campaign",
    category: "Social Media",
    description:
      "Built a strong digital presence through strategic content creation, influencer partnerships, and social campaigns.",
    result: "12M+ Reach",
  },
];

export default function DigitalMarketingPortfolio() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Marketing Success Stories
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover how our digital marketing strategies have helped businesses
            improve visibility, generate qualified leads, and achieve measurable
            growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                    <Icon
                      className="text-blue-600 group-hover:text-white"
                      size={28}
                    />
                  </div>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <p className="text-sm text-slate-500">Results</p>

                    <h4 className="font-semibold text-slate-900">
                      {project.result}
                    </h4>
                  </div>

                  <button className="flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                    View Case Study
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
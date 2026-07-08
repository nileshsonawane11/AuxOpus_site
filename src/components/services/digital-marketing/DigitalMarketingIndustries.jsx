// src/components/services/digital-marketing/DigitalMarketingIndustries.jsx

import {
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  Hotel,
  Building2,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import { digitalMarketingIndustriesContent } from "../../../constants/Services/DigitalMarketing.js";

const industryIcons = [
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  Hotel,
  Building2,
  Trophy,
];

export default function DigitalMarketingIndustries() {
  const { badge, heading, description, exploreButton, industries } = digitalMarketingIndustriesContent;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
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
                  {exploreButton.text}
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
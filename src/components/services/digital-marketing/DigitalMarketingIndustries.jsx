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

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Increase online sales through SEO, paid advertising, conversion optimization, and remarketing campaigns.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Generate student inquiries using digital campaigns, local SEO, and content marketing strategies.",
    tags: ["Lead Generation", "LMS", "Admissions"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Build trust and attract patients through local SEO, healthcare marketing, and reputation management.",
    tags: ["Local SEO", "Appointments", "Branding"],
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Reach qualified audiences with compliant digital campaigns and performance-focused advertising.",
    tags: ["FinTech", "Banking", "Insurance"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Generate B2B leads using LinkedIn marketing, SEO, and industrial branding strategies.",
    tags: ["B2B", "Industrial", "Lead Gen"],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Drive bookings with local SEO, travel campaigns, influencer marketing, and social media promotions.",
    tags: ["Hotels", "Travel", "Restaurants"],
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "Scale SaaS products and enterprise brands through account-based marketing and performance campaigns.",
    tags: ["SaaS", "CRM", "Enterprise"],
  },
  {
    icon: Trophy,
    title: "Sports",
    description:
      "Boost fan engagement, ticket sales, sponsorship visibility, and event registrations through digital channels.",
    tags: ["Events", "Live Sports", "Community"],
  },
];

export default function DigitalMarketingIndustries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Industries
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Marketing Solutions for Every Industry
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every industry has different audiences and buying behaviors. We
            create personalized marketing strategies that deliver measurable
            business growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

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
// src/components/services/digital-marketing/DigitalMarketingOffer.jsx

import {
  Search,
  Megaphone,
  Share2,
  FileText,
  Mail,
  BarChart3,
  Target,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve rankings, increase organic traffic, optimize technical SEO, and enhance website visibility.",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    description:
      "Launch ROI-focused advertising campaigns across Google, Facebook, Instagram, LinkedIn, and YouTube.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Grow your audience through engaging content, campaigns, and consistent brand communication.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Create blogs, landing pages, case studies, and SEO content that attracts and converts customers.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated email campaigns, newsletters, customer nurturing, and lead engagement strategies.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Monitor KPIs, campaign performance, conversions, and customer behavior with detailed reports.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimization",
    description:
      "Optimize landing pages, CTAs, funnels, and user journeys to maximize conversions.",
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description:
      "Develop digital branding strategies that strengthen awareness, trust, and long-term customer loyalty.",
  },
];

export default function DigitalMarketingOffer() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Complete Digital Marketing Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From SEO and paid advertising to social media and analytics, we
            provide end-to-end digital marketing solutions that drive measurable
            business growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    className="text-blue-600 group-hover:text-white"
                    size={26}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                  Learn More
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
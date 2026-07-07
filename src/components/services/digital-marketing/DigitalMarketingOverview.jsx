// src/components/services/digital-marketing/DigitalMarketingOverview.jsx

import {
  Search,
  Megaphone,
  BarChart3,
  Users,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search rankings and attract high-quality organic traffic with technical and content-driven SEO.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description:
      "Run high-converting campaigns on Google Ads, Meta Ads, LinkedIn, and other advertising platforms.",
  },
  {
    icon: Users,
    title: "Social Media Growth",
    description:
      "Build a strong brand presence and engage your audience through strategic social media marketing.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track every campaign using advanced analytics to continuously improve ROI and conversions.",
  },
];

const benefits = [
  "Increase website traffic",
  "Generate quality leads",
  "Improve brand awareness",
  "Boost online sales",
  "Increase customer engagement",
  "Measure marketing ROI",
];

export default function DigitalMarketingOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Digital Marketing That Delivers Real Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our data-driven marketing strategies combine SEO, paid advertising,
            content marketing, email campaigns, and analytics to maximize your
            online presence and revenue.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Why Digital Marketing Matters
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Effective digital marketing helps businesses connect with the
              right audience, generate measurable results, and stay ahead in an
              increasingly competitive online marketplace.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-900 p-10 text-white">
            <TrendingUp className="text-blue-400" size={40} />

            <h3 className="mt-6 text-3xl font-bold">
              Marketing Backed By Data
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              Every campaign is planned, monitored, optimized, and measured
              using real-time analytics to ensure sustainable growth and maximum
              return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
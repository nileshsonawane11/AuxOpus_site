// src/components/services/digital-marketing/DigitalMarketingTechnologies.jsx

import {
  Search,
  BarChart3,
  Globe,
  MousePointerClick,
  PenSquare,
  LineChart,
} from "lucide-react";

const categories = [
  {
    icon: Search,
    title: "SEO Tools",
    tools: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Moz",
      "Screaming Frog",
      "Ubersuggest",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    tools: [
      "Google Analytics 4",
      "Looker Studio",
      "Google Tag Manager",
      "Hotjar",
      "Mixpanel",
    ],
  },
  {
    icon: Globe,
    title: "Advertising",
    tools: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "Microsoft Ads",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Marketing Automation",
    tools: [
      "HubSpot",
      "Mailchimp",
      "Brevo",
      "Zoho Campaigns",
      "ActiveCampaign",
    ],
  },
  {
    icon: PenSquare,
    title: "Content & Social",
    tools: [
      "Canva",
      "Buffer",
      "Hootsuite",
      "WordPress",
      "Notion",
    ],
  },
  {
    icon: LineChart,
    title: "Performance",
    tools: [
      "A/B Testing",
      "Heatmaps",
      "Funnel Analysis",
      "Conversion Tracking",
      "ROI Reporting",
    ],
  },
];

export default function DigitalMarketingTechnologies() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Tools & Platforms
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Marketing Technology Stack
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We leverage industry-leading marketing platforms, analytics tools,
            and automation software to maximize campaign performance and
            measurable growth.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
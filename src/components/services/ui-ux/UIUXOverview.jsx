import {
  Users,
  LayoutTemplate,
  Smartphone,
  PenTool,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { uiuxOverviewContent } from "../../../constants/Services/UIUXDesign.js";

const featureIcons = [Users, LayoutTemplate, Smartphone, PenTool];

export default function UIUXOverview() {
  const { badge, heading, description, features, whySection, designCard } = uiuxOverviewContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
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
              {whySection.heading}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {whySection.description}
            </p>

            <div className="mt-10 space-y-4">
              {whySection.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-900 p-10 text-white">
            <TrendingUp className="text-blue-400" size={40} />

            <h3 className="mt-6 text-3xl font-bold">
              {designCard.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              {designCard.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
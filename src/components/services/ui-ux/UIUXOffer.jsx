// src/components/services/ui-ux/UIUXOffer.jsx

import {
  Palette,
  Layout,
  Smartphone,
  MonitorSmartphone,
  PenTool,
  Workflow,
  SearchCheck,
  MousePointerClick,
  ArrowUpRight,
} from "lucide-react";
import { uiuxOfferContent } from "../../../constants/Services/UIUXDesign.js";

const serviceIcons = [
  Palette,
  Layout,
  Smartphone,
  MonitorSmartphone,
  PenTool,
  Workflow,
  SearchCheck,
  MousePointerClick,
];

export default function UIUXOffer() {
  const { badge, heading, description, learnMoreButton, services } = uiuxOfferContent;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
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
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    size={26}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                  {learnMoreButton.text}
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
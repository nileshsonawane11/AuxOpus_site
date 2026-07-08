// src/components/services/ui-ux/UIUXPortfolio.jsx

import {
  Smartphone,
  Monitor,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";
import { uiuxPortfolioContent } from "../../../constants/Services/UIUXDesign.js";

const projectIcons = [ShoppingCart, Smartphone, Monitor, GraduationCap, HeartPulse];

export default function UIUXPortfolio() {
  const { badge, heading, description, viewProjectButton, projects } = uiuxPortfolioContent;

  return (
    <section className="bg-white py-24">
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

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = projectIcons[index];
            return (
              <div
                key={project.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                    <Icon
                      size={28}
                      className="text-blue-600 group-hover:text-white"
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
                    <p className="text-sm text-slate-500">Result</p>
                    <h4 className="font-semibold text-slate-900">
                      {project.result}
                    </h4>
                  </div>

                  <button className="flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                    {viewProjectButton.text}
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
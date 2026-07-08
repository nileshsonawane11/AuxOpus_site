// src/components/services/ui-ux/UIUXTools.jsx

import {
  PenTool,
  Layers3,
  MousePointerClick,
  Sparkles,
  Component,
} from "lucide-react";
import { FaFigma } from "react-icons/fa6";
import { uiuxToolsContent } from "../../../constants/Services/UIUXDesign.js";

const categoryIcons = [
  FaFigma,
  PenTool,
  Layers3,
  Component,
  MousePointerClick,
  Sparkles,
];

export default function UIUXTools() {
  const { badge, heading, description, categories } = uiuxToolsContent;

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

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
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
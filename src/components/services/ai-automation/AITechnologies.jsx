// src/components/services/ai-automation/AITechnologies.jsx

import {
  BrainCircuit,
  Cpu,
  Database,
  Cloud,
  Server,
  Boxes,
} from "lucide-react";
import { aiTechnologiesContent } from "../../../constants/Services/AIAutomation.js";

const categoryIcons = [BrainCircuit, Boxes, Cpu, Server, Database, Cloud];

export default function AITechnologies() {
  const { badge, heading, description, categories, enterpriseStack } = aiTechnologiesContent;

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
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-950 to-black p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">{enterpriseStack.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {enterpriseStack.description}
              </p>
            </div>

            <div className="space-y-4">
              {enterpriseStack.features.slice(0, 2).map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {enterpriseStack.features.slice(2, 4).map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
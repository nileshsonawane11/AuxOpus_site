// src/components/services/corporate-training/CorporateTrainingTechnologies.jsx

import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Smartphone,
  GitBranch,
} from "lucide-react";
import { corporateTrainingTechnologiesContent } from "../../../constants/Services/CorporateTraining.js";

const stackIcons = [Code2, Smartphone, Database, Cpu, Cloud, GitBranch];

export default function CorporateTrainingTechnologies() {
  const { badge, heading, stacks } = corporateTrainingTechnologiesContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <span className="font-semibold text-blue-600">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stacks.map((stack, index) => {
            const Icon = stackIcons[index];
            return (
              <div
                key={stack.title}
                className="rounded-3xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-100 p-4">
                    <Icon className="text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {stack.title}
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {stack.list.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2"
                    >
                      {tech}
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
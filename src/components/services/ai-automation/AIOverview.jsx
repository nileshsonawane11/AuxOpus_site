// src/components/services/ai-automation/AIOverview.jsx

import {
  BrainCircuit,
  Workflow,
  Bot,
  Database,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Counter from "../../Counter.jsx";
import { aiOverviewContent } from "../../../constants/Services/AIAutomation.js";

const highlightIcons = [BrainCircuit, Workflow, Bot, Database];

export default function AIOverview() {
  const { badge, heading, description, highlights, whyChoose, platform } = aiOverviewContent;

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {heading.line1}
            <span className="block text-blue-600">
              {heading.highlightedText}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon className="text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Choose */}
        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              {whyChoose.badge}
            </div>

            <h3 className="mt-5 text-4xl font-bold text-slate-900">
              {whyChoose.heading}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {whyChoose.description}
            </p>

            <div className="mt-10 grid gap-4">
              {whyChoose.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                >
                  <div className="rounded-full bg-green-100 p-2">
                    <ShieldCheck
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          
          </div>

          {/* Right Side */}
          <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 text-white">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-blue-600 p-4">
                <Cpu size={30} />
              </div>

              <div>
                <p className="text-slate-400">
                  {platform.subtitle}
                </p>

                <h3 className="text-2xl font-bold">
                  {platform.title}
                </h3>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {platform.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h4 className="text-4xl font-bold text-blue-400">
                    <Counter value={item.value} />
                  </h4>

                  <p className="mt-2 text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-600/10 p-6">
              <TrendingUp
                className="mb-4 text-blue-400"
                size={32}
              />

              <h4 className="text-xl font-semibold">
                {platform.transformation.title}
              </h4>

              <p className="mt-3 leading-7 text-slate-300">
                {platform.transformation.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
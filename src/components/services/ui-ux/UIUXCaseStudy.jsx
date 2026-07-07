// src/components/services/ui-ux/UIUXCaseStudy.jsx

import {
  Building2,
  CircleCheckBig,
  TriangleAlert,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const challenges = [
  "High bounce rate due to confusing navigation",
  "Outdated UI with inconsistent branding",
  "Poor mobile experience affecting conversions",
  "Complex checkout flow causing cart abandonment",
];

const solutions = [
  "Complete UX research and competitor analysis",
  "Redesigned information architecture",
  "Modern responsive interface",
  "Interactive prototype and usability testing",
  "Optimized checkout experience",
  "Built reusable design system",
];

const results = [
  {
    value: "42%",
    label: "Higher Conversion",
  },
  {
    value: "58%",
    label: "Lower Bounce Rate",
  },
  {
    value: "4.8★",
    label: "User Satisfaction",
  },
  {
    value: "35%",
    label: "Longer Session Time",
  },
];

const tools = [
  "Figma",
  "Adobe XD",
  "FigJam",
  "Maze",
  "Tailwind CSS",
  "React",
];

export default function UIUXCaseStudy() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Case Study
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            E-Commerce Platform Redesign
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Transforming an outdated online shopping experience into a modern,
            user-focused platform that significantly increased engagement and
            conversions.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4">
                <Building2 className="text-blue-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Client Overview
                </h3>

                <p className="text-slate-500">
                  Retail & E-Commerce Brand
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <TriangleAlert className="text-red-500" />
                <h4 className="text-xl font-semibold">
                  Challenges
                </h4>
              </div>

              <div className="mt-6 space-y-4">
                {challenges.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CircleCheckBig
                      className="mt-1 text-red-500"
                      size={18}
                    />

                    <p className="text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-600 p-4">
                <Palette size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Design Solution
                </h3>

                <p className="text-slate-400">
                  User-Centered Design Process
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                >
                  <ArrowRight
                    size={18}
                    className="text-blue-400"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white">
          <div className="flex items-center gap-3">
            <BarChart3 size={32} />

            <h3 className="text-3xl font-bold">
              Project Results
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {results.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <h4 className="text-5xl font-bold">
                  {item.value}
                </h4>

                <p className="mt-3 text-blue-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-3xl font-bold text-slate-900">
            Tools Used
          </h3>

          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/services/ai-automation/AICaseStudy.jsx

import {
  Building2,
  CircleCheckBig,
  TriangleAlert,
  Cpu,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const challenges = [
  "Manual invoice processing across multiple departments",
  "Slow approval workflows causing operational delays",
  "High risk of human errors and duplicate entries",
  "No centralized visibility into invoice status",
];

const solutions = [
  "AI-powered OCR for invoice extraction",
  "Automatic validation using business rules",
  "ERP integration for seamless data synchronization",
  "Workflow automation for approvals",
  "Duplicate invoice detection",
  "Real-time analytics dashboard",
];

const results = [
  {
    value: "85%",
    label: "Faster Processing",
  },
  {
    value: "99%",
    label: "Data Accuracy",
  },
  {
    value: "60%",
    label: "Lower Operational Cost",
  },
  {
    value: "4x",
    label: "Approval Speed",
  },
];

const technologies = [
  "OpenAI GPT",
  "OCR Engine",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "React",
];

export default function AICaseStudy() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Case Study
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            AI-Powered Invoice Automation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Discover how we transformed a manual invoice processing workflow
            into a fully automated AI-driven solution for a large enterprise.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Client */}

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
                  Enterprise Manufacturing Company
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

          {/* Solution */}

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-600 p-4">
                <Cpu size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  AI Solution
                </h3>

                <p className="text-slate-400">
                  Intelligent Invoice Processing Platform
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

        {/* Results */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white">
          <div className="flex items-center gap-3">
            <BarChart3 size={32} />

            <h3 className="text-3xl font-bold">
              Business Results
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

        {/* Technologies */}

        <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-3xl font-bold text-slate-900">
            Technologies Used
          </h3>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/services/maintenance-support/MaintenanceSupportPortfolio.jsx

import {
  Database,
  Cloud,
  Shield,
  Activity,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Monitoring",
    company: "Enterprise SaaS",
    result: "99.99% Uptime",
  },
  {
    icon: Database,
    title: "Database Optimization",
    company: "Healthcare Platform",
    result: "65% Faster Queries",
  },
  {
    icon: Shield,
    title: "Security Maintenance",
    company: "FinTech Company",
    result: "Zero Critical Vulnerabilities",
  },
  {
    icon: Activity,
    title: "24×7 Production Monitoring",
    company: "Manufacturing ERP",
    result: "70% Faster Incident Resolution",
  },
];

export default function MaintenanceSupportPortfolio() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-blue-400">
            Success Stories
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Proven Maintenance Excellence
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="rounded-[30px] border border-slate-800 bg-slate-900 p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-600 p-4">
                    <Icon className="text-white" />
                  </div>

                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                    {project.company}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-800 p-5">
                  <div>
                    <p className="text-slate-400">
                      Result
                    </p>

                    <h4 className="text-xl font-semibold text-white">
                      {project.result}
                    </h4>
                  </div>

                  <ArrowRight className="text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
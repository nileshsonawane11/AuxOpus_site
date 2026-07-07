// src/components/services/corporate-training/CorporateTrainingPortfolio.jsx

import {
  GraduationCap,
  Building2,
  Users,
  Award,
} from "lucide-react";

const portfolio = [
  {
    icon: Building2,
    title: "Enterprise AI Bootcamp",
    duration: "6 Weeks",
    participants: "180 Employees",
    outcome: "AI Adoption Across Teams",
  },
  {
    icon: Users,
    title: "Full Stack Developer Program",
    duration: "12 Weeks",
    participants: "85 Engineers",
    outcome: "Production-Ready Developers",
  },
  {
    icon: GraduationCap,
    title: "Cloud Migration Workshop",
    duration: "5 Days",
    participants: "120 Professionals",
    outcome: "AWS Certified Teams",
  },
  {
    icon: Award,
    title: "Cyber Security Awareness",
    duration: "3 Days",
    participants: "600 Employees",
    outcome: "Reduced Security Risks",
  },
];

export default function CorporateTrainingPortfolio() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-blue-600">
              Success Programs
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Corporate Training Portfolio
            </h2>
          </div>
        </div>

        <div className="mt-20 space-y-8">
          {portfolio.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="grid items-center gap-10 rounded-[32px] border border-slate-200 bg-white p-8 lg:grid-cols-[100px_1fr_auto]"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600">
                  <Icon className="text-white" size={36} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-6 text-slate-600">
                    <span>⏱ {item.duration}</span>
                    <span>👨‍💼 {item.participants}</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-blue-50 px-6 py-5 text-center">
                  <p className="text-sm text-slate-500">
                    Outcome
                  </p>

                  <h4 className="mt-2 font-semibold text-blue-700">
                    {item.outcome}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
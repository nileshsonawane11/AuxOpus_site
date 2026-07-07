// src/components/services/corporate-training/CorporateTrainingCaseStudy.jsx

import {
  ClipboardList,
  Users,
  Laptop,
  TrendingUp,
} from "lucide-react";

const phases = [
  {
    icon: ClipboardList,
    title: "Skill Assessment",
    text: "Evaluate existing technical skills and identify learning gaps.",
  },
  {
    icon: Users,
    title: "Customized Curriculum",
    text: "Create a role-specific learning roadmap aligned with business goals.",
  },
  {
    icon: Laptop,
    title: "Hands-on Training",
    text: "Interactive workshops, live coding sessions, labs, and real projects.",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    text: "Higher productivity, faster delivery, and improved technical capabilities.",
  },
];

export default function CorporateTrainingCaseStudy() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center text-white">
          <span className="rounded-full bg-white/10 px-5 py-2">
            Case Study
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Workforce Transformation Journey
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {phases.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <div
                key={phase.title}
                className="relative rounded-[32px] bg-white p-8"
              >
                <span className="absolute right-8 top-8 text-5xl font-bold text-slate-100">
                  0{index + 1}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon className="text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {phase.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {phase.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
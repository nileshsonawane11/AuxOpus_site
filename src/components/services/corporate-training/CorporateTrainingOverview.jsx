// src/components/services/corporate-training/CorporateTrainingOverview.jsx

import {
  Users,
  BrainCircuit,
  BookOpen,
  Target,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Corporate Workshops",
    text: "Interactive instructor-led sessions tailored for organizations.",
  },
  {
    icon: BrainCircuit,
    title: "Hands-on Learning",
    text: "Practical projects, assignments, and real-world case studies.",
  },
  {
    icon: Target,
    title: "Role-Based Training",
    text: "Customized learning paths for developers, managers, and teams.",
  },
  {
    icon: BadgeCheck,
    title: "Certification",
    text: "Industry-recognized completion certificates for participants.",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    text: "Sessions delivered by experienced software professionals.",
  },
  {
    icon: BookOpen,
    title: "Updated Curriculum",
    text: "Training aligned with current technologies and market demands.",
  },
];

export default function CorporateTrainingOverview() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-blue-400">
              Overview
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Empower Teams Through Continuous Learning
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              We help organizations build future-ready teams through practical,
              project-based, and technology-driven corporate training programs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
                >
                  <Icon className="text-blue-400" size={34} />

                  <h3 className="mt-6 text-2xl font-semibold">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
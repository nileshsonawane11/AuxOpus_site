// src/components/services/corporate-training/CorporateTrainingOverview.jsx

import {
  Users,
  BrainCircuit,
  BookOpen,
  Target,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";
import { corporateTrainingOverviewContent } from "../../../constants/Services/CorporateTraining.js";

const cardIcons = [
  Users,
  BrainCircuit,
  Target,
  BadgeCheck,
  GraduationCap,
  BookOpen,
];

export default function CorporateTrainingOverview() {
  const { badge, heading, description, cards } = corporateTrainingOverviewContent;

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-blue-400">
              {badge}
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              {heading}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              {description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = cardIcons[index];
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
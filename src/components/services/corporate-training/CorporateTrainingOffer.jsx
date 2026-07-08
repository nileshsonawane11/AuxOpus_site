// src/components/services/corporate-training/CorporateTrainingOffer.jsx

import {
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Bot,
  MonitorCog,
} from "lucide-react";
import { corporateTrainingOfferContent } from "../../../constants/Services/CorporateTraining.js";

const courseIcons = [Code2, Smartphone, BrainCircuit, Bot, Cloud, Shield, Database, MonitorCog];

export default function CorporateTrainingOffer() {
  const { badge, heading, courses } = corporateTrainingOfferContent;

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            {heading}
          </h2>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => {
            const Icon = courseIcons[index];
            return (
              <div
                key={course.title}
                className="group rounded-[30px] bg-white p-10 transition hover:-translate-y-3 hover:bg-blue-600"
              >
                <Icon
                  size={42}
                  className="text-blue-600 group-hover:text-white"
                />

                <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-white">
                  {course.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
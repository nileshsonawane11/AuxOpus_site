// src/components/services/maintenance-support/MaintenanceSupportCaseStudy.jsx

import {
  ServerCrash,
  ShieldCheck,
  Gauge,
  CircleCheckBig,
} from "lucide-react";
import { maintenanceSupportCaseStudyContent } from "../../../constants/Services/MaintenanceSupport.js";

const timelineIcons = [ServerCrash, Gauge, ShieldCheck, CircleCheckBig];

export default function MaintenanceSupportCaseStudy() {
  const { badge, heading, timeline } = maintenanceSupportCaseStudyContent;

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700">
            {badge}
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            {heading}
          </h2>
        </div>

        <div className="relative mt-20 border-l-2 border-blue-200 pl-12">
          {timeline.map((item, index) => {
            const Icon = timelineIcons[index];
            return (
              <div
                key={item.phase}
                className="relative mb-14"
              >
                <div className="absolute -left-[58px] flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <Icon className="text-white" size={22} />
                </div>

                <span className="font-semibold text-blue-600">
                  {item.phase}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.phase}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
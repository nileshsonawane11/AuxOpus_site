// src/components/services/maintenance-support/MaintenanceSupportTechnologies.jsx

import {
  Server,
  Database,
  Cloud,
  Shield,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { maintenanceSupportTechnologiesContent } from "../../../constants/Services/MaintenanceSupport.js";

const stackIcons = [Server, Cloud, Database, Shield, MonitorSmartphone, Workflow];

export default function MaintenanceSupportTechnologies() {
  const { heading, stacks } = maintenanceSupportTechnologiesContent;

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            {heading}
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {stacks.map((stack, index) => {
            const Icon = stackIcons[index];
            return (
              <div
                key={stack.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <Icon size={34} className="text-blue-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  {stack.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
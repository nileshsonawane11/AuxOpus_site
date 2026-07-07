// src/components/services/maintenance-support/MaintenanceSupportOffer.jsx

import {
  ServerCog,
  Database,
  Shield,
  CloudCog,
  RefreshCw,
  LifeBuoy,
  ArrowUpRight,
  HardDrive,
  Activity,
} from "lucide-react";

const offers = [
  {
    icon: ServerCog,
    title: "Server Management",
  },
  {
    icon: Database,
    title: "Database Maintenance",
  },
  {
    icon: Shield,
    title: "Security Monitoring",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
  },
  {
    icon: RefreshCw,
    title: "Software Updates",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
  },
];

export default function MaintenanceSupportOffer() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-blue-400">
              What We Offer
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Complete Support Services
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[32px] bg-slate-800 md:grid-cols-2 xl:grid-cols-4">
          {offers.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-slate-900 p-8 transition hover:bg-blue-600"
              >
                <Icon
                  size={34}
                  className="text-blue-400 transition group-hover:text-white"
                />

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <button className="mt-8 flex items-center gap-2 text-blue-400 group-hover:text-white">
                  Explore
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
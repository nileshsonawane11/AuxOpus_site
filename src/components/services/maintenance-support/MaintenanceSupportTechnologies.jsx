// src/components/services/maintenance-support/MaintenanceSupportTechnologies.jsx

import {
  Server,
  Database,
  Cloud,
  Shield,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

const stacks = [
  {
    icon: Server,
    title: "Infrastructure",
    items: ["Linux", "Windows Server", "Nginx", "Apache", "Docker"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQL Server"],
  },
  {
    icon: Shield,
    title: "Security",
    items: ["Cloudflare", "SSL", "Firewall", "WAF", "Fail2Ban"],
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoring",
    items: ["Grafana", "Prometheus", "UptimeRobot", "Sentry", "LogRocket"],
  },
  {
    icon: Workflow,
    title: "DevOps",
    items: ["GitHub Actions", "Jenkins", "Kubernetes", "Terraform", "Ansible"],
  },
];

export default function MaintenanceSupportTechnologies() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Technologies We Support
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {stacks.map((stack) => {
            const Icon = stack.icon;

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
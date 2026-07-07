// src/components/services/maintenance-support/MaintenanceSupportHero.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Clock3,
  Activity,
  Server,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Counter from "../../Counter"
import { Link } from "react-router-dom";

const metrics = [
  {
    value: "99.99%",
    label: "System Uptime",
  },
  {
    value: "<15 min",
    label: "Average Response",
  },
  {
    value: "24/7",
    label: "Monitoring",
  },
];

const services = [
  "Infrastructure Monitoring",
  "Application Support",
  "Security Updates",
  "Performance Optimization",
];

export default function MaintenanceSupportHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#3b82f620,transparent_45%)] -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Maintenance & Support
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-slate-900">
            Keep Your
            <span className="block text-blue-600">
              Business Running
            </span>
            Without Downtime
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Continuous monitoring, proactive maintenance, rapid issue
            resolution, and dedicated technical support that keeps your
            applications secure, optimized, and always available.
          </p>

          <div className="mt-10 flex gap-4">
            <Link to="/Contact" className="cursor-pointer rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl">
              Get Support
            </Link>

            <Link to="/Portfolio" className="cursor-pointer flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md">
              View SLA
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur transition hover:shadow-md"
              >
                <h2 className="text-4xl font-bold text-slate-900">
                  <Counter value={item.value} />
                </h2>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-blue-600 p-4 shadow-lg shadow-blue-200">
              <Server className="text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Live System Status
              </h3>

              <p className="text-slate-500">
                Infrastructure Monitoring
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {services.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-slate-100"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" />
                  <span className="font-medium text-slate-900">{item}</span>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Active
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
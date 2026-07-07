// src/components/services/ai-automation/AIHero.jsx

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Sparkles,
  Workflow,
  ArrowRight,
  Play,
  Cpu,
  Database,
} from "lucide-react";

const floatingIcons = [
  { icon: Bot, top: "8%", left: "10%" },
  { icon: BrainCircuit, top: "18%", right: "12%" },
  { icon: Cpu, bottom: "18%", left: "14%" },
  { icon: Database, bottom: "10%", right: "15%" },
];

const stats = [
  {
    value: "95%",
    label: "Automation Accuracy",
  },
  {
    value: "70%",
    label: "Reduced Manual Work",
  },
  {
    value: "24/7",
    label: "AI Availability",
  },
];

export default function AIHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f620,transparent_55%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_60%,#e2e8f0_100%)]" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            className="absolute hidden lg:flex"
            style={item}
          >
            <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl">
              <Icon className="h-7 w-7 text-blue-600" />
            </div>
          </motion.div>
        );
      })}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm text-blue-700">
              <Sparkles size={16} />
              Intelligent AI Solutions
            </div>

            <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent">
                Business With AI
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Build intelligent applications, automate repetitive workflows,
              deploy enterprise AI assistants, and unlock data-driven
              decision-making using modern AI technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl">
                Get Started
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md">
                <Play size={18} />
                Watch Demo
              </button>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h2 className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <div className="rounded-[35px] border border-blue-100 bg-white p-8 shadow-[0_0_80px_rgba(59,130,246,.15)]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Enterprise AI Dashboard
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Automation Center
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-600 p-4 shadow-lg shadow-blue-200">
                  <BrainCircuit className="text-white" />
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: Bot,
                    title: "AI Customer Assistant",
                    status: "Online",
                  },
                  {
                    icon: Workflow,
                    title: "Workflow Automation",
                    status: "Running",
                  },
                  {
                    icon: Database,
                    title: "Knowledge Retrieval",
                    status: "Synced",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition hover:bg-slate-100"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-blue-50 p-3">
                          <Icon className="text-blue-600" size={22} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {item.title}
                          </h4>

                          <p className="text-sm text-slate-500">
                            AI Module
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 shadow-lg shadow-blue-200">
                <p className="text-sm text-blue-100">
                  Automation Performance
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-5xl font-bold text-white">
                    96%
                  </h2>

                  <span className="rounded-full bg-white/20 px-4 py-2 font-medium text-white">
                    +18%
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[96%] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
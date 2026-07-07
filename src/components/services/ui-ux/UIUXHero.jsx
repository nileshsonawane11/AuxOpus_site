import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  MousePointer2,
  ArrowRight,
  Play,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { FaFigma } from "react-icons/fa6";

const stats = [
  {
    value: "100+",
    label: "Interfaces Designed",
  },
  {
    value: "95%",
    label: "User Satisfaction",
  },
  {
    value: "40%",
    label: "Higher Engagement",
  },
];

const floatingIcons = [
  {
    icon: Palette,
    top: "12%",
    left: "10%",
  },
  {
    icon: PenTool,
    top: "18%",
    right: "12%",
  },
  {
    icon: MousePointer2,
    bottom: "15%",
    left: "14%",
  },
  {
    icon: FaFigma,
    bottom: "10%",
    right: "16%",
  },
];

export default function UIUXHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f620,transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_60%,#e2e8f0_100%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      {floatingIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4 + index,
            }}
            className="absolute hidden lg:block"
            style={item}
          >
            <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl">
              <Icon className="text-blue-600" />
            </div>
          </motion.div>
        );
      })}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-blue-700">
              <Sparkles size={16} />
              UI/UX Design Services
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Design
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent">
                Experiences
              </span>
              People Love
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We create intuitive digital experiences that combine beautiful
              interfaces, seamless usability, and user-centered design to help
              businesses increase engagement and conversions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl">
                Start Design Project
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md">
                <Play size={18} />
                View Portfolio
              </button>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-3">
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

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-[0_0_80px_rgba(59,130,246,.15)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500">
                    Live Design System
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Design Workspace
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-600 p-4 shadow-lg shadow-blue-200">
                  <LayoutGrid className="text-white" />
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  "Wireframing",
                  "High-Fidelity UI",
                  "Prototype Testing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition hover:bg-slate-100"
                  >
                    <h4 className="font-semibold text-slate-900">
                      {item}
                    </h4>

                    <p className="mt-2 text-slate-500">
                      Active Design Module
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
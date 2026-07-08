// src/components/services/digital-marketing/DigitalMarketingHero.jsx

import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Megaphone,
  BarChart3,
  Sparkles,
  ArrowRight,
  Play,
  Globe,
  Target,
  Zap,
  Users,
} from "lucide-react";
import Counter from "../../Counter";
import { Link } from "react-router-dom";
import { digitalMarketingHeroContent } from "../../../constants/Services/DigitalMarketing.js";

const floatingIcons = [
  { icon: Search, top: "10%", left: "10%" },
  { icon: Megaphone, top: "18%", right: "12%" },
  { icon: Globe, bottom: "12%", left: "15%" },
  { icon: BarChart3, bottom: "16%", right: "15%" },
];

const metricIcons = [Users, Target, Zap];
const campaignIcons = [Search, Megaphone, Globe];

export default function DigitalMarketingHero() {
  const { badge, heading, description, buttons, stats, dashboard } = digitalMarketingHeroContent;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_60%,#e2e8f0_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f620,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 + index }}
            className="absolute hidden lg:block"
            style={item}
          >
            <div className="rounded-2xl border border-blue-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
              <Sparkles size={16} />
              {badge.text}
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              {heading.line1}
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent">
                {heading.highlightedText}
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {buttons.map((button, index) => {
                const isPrimary = button.type === "primary";
                return (
                  <Link
                    key={index}
                    to={button.link}
                    className={`cursor-pointer group flex items-center gap-2 rounded-xl px-7 py-4 font-semibold transition ${
                      isPrimary
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl"
                        : "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:shadow-md"
                    }`}
                  >
                    {isPrimary ? (
                      <>
                        {button.text}
                        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                      </>
                    ) : (
                      <>
                        <Play size={18} />
                        {button.text}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <h2 className="text-3xl font-bold text-slate-900">
                    <Counter value={item.value} />
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Marketing Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: .95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <div className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(59,130,246,.15),0_0_120px_rgba(59,130,246,.08)] transition-shadow hover:shadow-[0_25px_70px_rgba(59,130,246,.2),0_0_140px_rgba(59,130,246,.1)]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {dashboard.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {dashboard.title}
                  </h3>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-4 shadow-lg shadow-blue-200">
                  <TrendingUp className="text-white" />
                </div>
              </div>

              {/* 3D Metric Cards */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {dashboard.metrics.map((metric, index) => {
                  const Icon = metricIcons[index];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                      className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-md transition-all hover:shadow-lg"
                    >
                      <div className="rounded-xl bg-blue-50 p-2 w-fit">
                        <Icon className="text-blue-600" size={18} />
                      </div>
                      <p className="mt-3 text-2xl font-bold text-slate-900">
                        <Counter value={metric.value} />
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-slate-500">{metric.label}</span>
                        <span className="text-xs font-semibold text-green-600">{metric.change}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* 3D Performance Graph */}
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 2 }}
                className="mt-8 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-inner"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">{dashboard.performance.title}</h4>
                    <p className="text-sm text-slate-500">{dashboard.performance.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    <Counter value={dashboard.performance.change} />
                  </span>
                </div>

                {/* Graph Bars */}
                <div className="mt-6 flex items-end justify-between gap-2 h-32">
                  {dashboard.performance.graphData.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400 shadow-lg"
                      whileHover={{
                        scaleY: 1.1,
                        originY: "bottom",
                        background: "linear-gradient(to top, #2563eb, #06b6d4)",
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between">
                  {dashboard.performance.weeks.map((week, index) => (
                    <span key={index} className="text-xs text-slate-400">{week}</span>
                  ))}
                </div>
              </motion.div>

              {/* Active Campaigns */}
              <div className="mt-8 space-y-3">
                {dashboard.campaigns.map((campaign, index) => {
                  const Icon = campaignIcons[index];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-slate-50 p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-blue-50 p-2">
                          <Icon className="text-blue-600" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{campaign.name}</h4>
                          <p className="text-sm text-slate-500">Campaign Active</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            campaign.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : campaign.status === "Optimizing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {campaign.status}
                        </span>
                        <div className="w-20 h-2 rounded-full bg-slate-200 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${campaign.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
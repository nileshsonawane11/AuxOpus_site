// src/components/SolutionsHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter.jsx";
import * as Icons from "react-icons/fa6";
import { solutionsHeroContent } from "../../constants/OurSolutions.js";

export default function SolutionsHero() {
  const {
    badge,
    heading,
    description,
    buttons,
    stats,
    trustedTechnologies,
    floatingIcons,
    dashboard,
    mobileMockup,
    widgets,
    orbitingIcons,
  } = solutionsHeroContent;

  const ChartLineIcon = Icons["FaChartLine"];
  const UsersIcon = Icons["FaUsers"];
  const MobileIcon = Icons["FaMobileScreen"];

  const BadgeIcon = Icons[badge.icon];
  const TopLeftIcon = Icons[floatingIcons.topLeft.icon];
  const TopRightIcon = Icons[floatingIcons.topRight.icon];
  const BottomLeftIcon = Icons[floatingIcons.bottomLeft.icon];
  const BottomRightIcon = Icons[floatingIcons.bottomRight.icon];
  const AIAssistantIcon = Icons[widgets.aiAssistant.icon];
  const CloudIcon = Icons[widgets.cloud.icon];
  const RevenueIcon = Icons[widgets.revenue.icon];
  const ServerIcon = Icons[widgets.server.icon];
  const AutomationIcon = Icons[widgets.automation.icon];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute left-1/2 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-100/40 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:sticky lg:top-20">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-blue-700 font-semibold shadow-sm">
              {BadgeIcon && <BadgeIcon />}
              {badge.text}
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] text-slate-900">
              {heading.line1}
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                {heading.highlightedText}
              </span>
              {heading.line3}
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              {buttons.map((button, index) => {
                const ButtonIcon = Icons[button.icon];
                const isPrimary = button.type === "primary";
                return (
                  <Link
                    key={index}
                    to={button.link}
                    className={`${
                      isPrimary
                        ? "group bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                        : "border border-slate-300 bg-white hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
                    } rounded-2xl px-8 py-4 font-semibold flex items-center gap-3 transition-all`}
                  >
                    {button.text}
                    {ButtonIcon && (
                      <ButtonIcon className={isPrimary ? "group-hover:translate-x-1 transition" : ""} />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white shadow-lg border border-slate-100 p-5 hover:-translate-y-1 transition"
                >
                  <div className="text-3xl font-black text-slate-900">
                    <Counter value={item.value} />
                  </div>
                  <div className="mt-2 text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Trusted */}
            <div className="mt-14">
              <div className="uppercase tracking-[0.25em] text-xs text-slate-500 font-semibold">
                {trustedTechnologies.label}
              </div>
              <div className="flex flex-wrap gap-8 mt-6 text-slate-400 font-semibold">
                {trustedTechnologies.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual Elements */}
          <div className="relative h-[800px] lg:flex justify-center items-center hidden">
            {/* Background Glow - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-[120px]" />
            </div>

            {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[680px] w-[680px] rounded-full border-[40px] border-blue-100/70" />
              <div className="absolute h-[520px] w-[520px] rounded-full border-[25px] border-cyan-100" />
              <div className="absolute h-[360px] w-[360px] rounded-full border-[15px] border-indigo-100/50" />
            </div>

            {/* Network Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 700">
              <line x1="200" y1="120" x2="350" y2="240" stroke="#bfdbfe" strokeWidth="2" />
              <line x1="350" y1="240" x2="530" y2="180" stroke="#bfdbfe" strokeWidth="2" />
              <line x1="350" y1="240" x2="300" y2="520" stroke="#bfdbfe" strokeWidth="2" />
              <line x1="350" y1="240" x2="540" y2="470" stroke="#bfdbfe" strokeWidth="2" />
              <circle cx="200" cy="120" r="7" fill="#3b82f6" />
              <circle cx="350" cy="240" r="9" fill="#06b6d4" />
              <circle cx="530" cy="180" r="7" fill="#3b82f6" />
              <circle cx="300" cy="520" r="7" fill="#06b6d4" />
              <circle cx="540" cy="470" r="7" fill="#3b82f6" />
            </svg>

            {/* Corner Floating Icons */}
            <div className="absolute top-0 left-0 bg-white shadow-xl rounded-2xl p-4 backdrop-blur-xl animate-bounce z-20">
              {TopLeftIcon && <TopLeftIcon className="text-3xl text-blue-600" />}
            </div>

            <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-xl p-4 animate-pulse z-20">
              {TopRightIcon && <TopRightIcon className="text-3xl text-indigo-600" />}
            </div>

            <div className="absolute bottom-44 left-0 bg-white rounded-2xl shadow-xl p-4 z-20">
              {BottomLeftIcon && <BottomLeftIcon className="text-3xl text-cyan-600" />}
            </div>

            <div className="absolute bottom-44 right-0 bg-white rounded-2xl shadow-xl p-4 z-20">
              {BottomRightIcon && <BottomRightIcon className="text-3xl text-green-600" />}
            </div>

            {/* 3D LAPTOP */}
            <div className="relative z-30 w-[520px] [transform:perspective(1800px)_rotateX(12deg)_rotateY(-10deg)] hover:[transform:perspective(1800px)_rotateX(4deg)_rotateY(-2deg)] duration-700 mx-auto">
              {/* Screen */}
              <div className="rounded-[28px] border-[10px] border-slate-900 bg-slate-900 shadow-[0_40px_100px_rgba(37,99,235,.35)] overflow-hidden">
                {/* Browser Bar */}
                <div className="bg-slate-800 h-8 flex items-center px-3 gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                  <div className="ml-4 h-5 rounded-full bg-slate-700 flex-1"></div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50 p-5">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl font-black text-slate-800">
                        {dashboard.title}
                      </div>
                      <div className="text-slate-500 text-xs mt-1">
                        {dashboard.subtitle}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500"></div>
                      <div>
                        <div className="font-semibold text-sm">{dashboard.user.name}</div>
                        <div className="text-[10px] text-slate-500">{dashboard.user.status}</div>
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-3 mt-5">
                    {dashboard.kpiCards.map((kpi, i) => (
                      <div key={i} className="rounded-2xl bg-white shadow-lg p-3">
                        <div className="text-[10px] text-slate-500">{kpi.label}</div>
                        <div className="mt-1 text-xl font-black text-slate-900">
                          <Counter value={kpi.value} />
                        </div>
                        <div className={`${kpi.changeColor} text-xs mt-0.5`}>
                          <Counter value={kpi.change} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Analytics */}
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    {/* Line Chart */}
                    <div className="col-span-2 rounded-2xl bg-white p-4 shadow-lg">
                      <div className="flex justify-between">
                        <div>
                          <div className="font-bold text-sm">Revenue Analytics</div>
                          <div className="text-[10px] text-slate-500">Last <Counter value="12" /> Months</div>
                        </div>
                        {ChartLineIcon && <ChartLineIcon className="text-blue-500" size={22} />}
                      </div>
                      <div className="mt-4 h-32 flex items-end gap-2">
                        {dashboard.chartData.map((v, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400 hover:scale-y-110 duration-300"
                            style={{ height: `${v * 0.8}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="rounded-2xl bg-white shadow-lg p-4">
                      <div className="font-bold text-sm">Traffic</div>
                      <div className="mt-6 flex justify-center">
                        <div className="relative h-28 w-28 rounded-full bg-[conic-gradient(#2563eb_0_45%,#06b6d4_45%_70%,#dbeafe_70%)]">
                          <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center font-bold text-sm">
                            {dashboard.pieChart.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Widgets */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="rounded-2xl bg-white shadow-lg p-4">
                      <div className="font-bold text-sm">Recent Activity</div>
                      <div className="mt-4 space-y-3">
                        {dashboard.recentActivity.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <div className="text-xs text-slate-600">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white shadow-lg p-4">
                      <div className="font-bold text-sm">Project Progress</div>
                      <div className="space-y-4 mt-4">
                        {dashboard.projectProgress.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span>{item.name}</span>
                              <span><Counter value={item.value} />%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-200">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white shadow-lg p-4">
                      <div className="font-bold text-sm">Team Members</div>
                      <div className="mt-4 flex items-center">
                        {[...Array(dashboard.teamMembers.count)].map((_, i) => (
                          <div
                            key={i}
                            className="-ml-2 first:ml-0 h-10 w-10 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-cyan-400"
                          />
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        {UsersIcon && <UsersIcon className="text-blue-500" size={14} />}
                        <span className="text-xs text-slate-600"><Counter value={dashboard.teamMembers.active} /> Active Members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="mx-auto h-4 w-[92%] rounded-b-[60px] bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-xl"></div>
              <div className="mx-auto h-1.5 w-36 rounded-full bg-slate-400 blur-sm"></div>
            </div>

            {/* MOBILE MOCKUP */}
            <div className="absolute right-[-30px] bottom-32 z-40 w-36 rounded-[28px] border-[8px] border-slate-900 bg-white shadow-[0_30px_60px_rgba(37,99,235,.25)] rotate-[12deg] hover:rotate-0 hover:-translate-y-4 transition-all duration-700">
              <div className="h-5 bg-slate-900 flex justify-center">
                <div className="mt-1 h-1.5 w-16 rounded-full bg-slate-700"></div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">
                    {MobileIcon && <MobileIcon />}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{mobileMockup.title}</div>
                    <div className="text-[10px] text-slate-500">{mobileMockup.subtitle}</div>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-blue-50 p-3">
                  <div className="text-[10px] text-slate-500">Revenue</div>
                  <div className="text-xl font-black mt-1"><Counter value={mobileMockup.revenue} /></div>
                </div>
                <div className="mt-4 space-y-2">
                  {mobileMockup.progressBars.map((value, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white">
                  {mobileMockup.button}
                </button>
              </div>
            </div>

            {/* GLASS WIDGETS */}
            {/* AI Assistant */}
            <div className="absolute top-8 left-[-10px] z-40 w-52 rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-2xl hover:-translate-y-3 transition duration-500">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg">
                  {AIAssistantIcon && <AIAssistantIcon />}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-800">{widgets.aiAssistant.title}</div>
                  <div className="text-xs text-slate-500">{widgets.aiAssistant.subtitle}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-600 leading-6">
                {widgets.aiAssistant.items.map((item, i) => (
                  <span key={i}>
                    ✓ {item}
                    {i < widgets.aiAssistant.items.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Widget */}
            <div className="absolute top-8 right-[-10px] z-40 w-52 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-4 hover:scale-105 transition duration-500">
              <div className="flex items-center justify-between">
                {CloudIcon && <CloudIcon className="text-3xl text-blue-500" />}
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                  ONLINE
                </span>
              </div>
              <div className="mt-4 font-bold text-sm text-slate-800">
                {widgets.cloud.title}
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${widgets.cloud.progress}%` }}></div>
              </div>
              <div className="mt-1 text-xs text-slate-500"><Counter value={widgets.cloud.uptime} /> Uptime</div>
            </div>

            {/* Revenue Widget */}
            <div className="absolute bottom-44 left-[-20px] z-40 w-56 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-4 hover:-translate-y-2 transition">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Monthly Revenue</div>
                  <div className="mt-1 text-2xl font-black text-slate-900"><Counter value={widgets.revenue.value} /></div>
                </div>
                <div className="rounded-xl bg-green-100 p-3">
                  {RevenueIcon && <RevenueIcon className="text-green-600" size={20} />}
                </div>
              </div>
              <div className="mt-4 flex items-end gap-1 h-14">
                {[25, 45, 35, 55, 75, 65, 95, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${h * 0.6}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Server Status */}
            <div className="absolute bottom-44 right-[-20px] z-40 w-56 rounded-2xl border border-white bg-white/80 backdrop-blur-xl shadow-2xl p-4 hover:translate-y-2 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  {ServerIcon && <ServerIcon className="text-blue-600" size={18} />}
                </div>
                <div>
                  <div className="font-bold text-sm">{widgets.server.title}</div>
                  <div className="text-xs text-green-600">{widgets.server.status}</div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                {widgets.server.metrics.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-0.5">
                      <span>{item.name}</span>
                      <span><Counter value={item.value} /></span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white shadow-2xl hover:scale-105 transition">
              <div className="flex items-center gap-3">
                {AutomationIcon && <AutomationIcon size={20} />}
                <div>
                  <div className="font-bold text-sm">{widgets.automation.title}</div>
                  <div className="text-xs opacity-90"><Counter value={widgets.automation.tasksCompleted} /> Tasks Completed</div>
                </div>
              </div>
            </div>

            {/* ORBITING ICONS */}
            <div className="absolute inset-0 pointer-events-none">
              {orbitingIcons.map((item, index) => {
                const OrbitingIcon = Icons[item.icon];
                const isLarge = item.size === "large";
                const direction = item.direction === "reverse" ? "reverse" : "";
                const spinClass = `animate-[spin_${item.speed}s_linear_infinite${direction ? "_reverse" : ""}]`;
                const translateClass = index % 2 === 0
                  ? `translate-y-[-${item.distance}px]`
                  : index === 1 || index === 4
                  ? `translate-x-[${item.distance}px]`
                  : index === 2
                  ? `translate-y-[${item.distance}px]`
                  : `-translate-x-[${item.distance}px]`;

                return (
                  <div
                    key={index}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${spinClass}`}
                  >
                    <div className={`${translateClass} ${isLarge ? "h-14 w-14" : "h-12 w-12"} rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center`}>
                      {OrbitingIcon && <OrbitingIcon className={`${item.color} ${isLarge ? "text-3xl" : "text-2xl"}`} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FLOATING DOTS */}
            {[...Array(15)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-blue-400/40 animate-pulse"
                style={{
                  width: `${3 + (i % 4) * 2}px`,
                  height: `${3 + (i % 4) * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}

            {/* LIGHT GLOWS */}
            <div className="absolute -z-10 top-16 left-20 h-56 w-56 rounded-full bg-blue-400/20 blur-[100px]" />
            <div className="absolute -z-10 right-12 top-48 h-48 w-48 rounded-full bg-cyan-400/20 blur-[90px]" />
            <div className="absolute -z-10 bottom-12 left-1/2 h-60 w-60 rounded-full bg-indigo-300/20 blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
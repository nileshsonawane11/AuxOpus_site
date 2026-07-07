// src/components/services/corporate-training/CorporateTrainingHero.jsx

import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import {
  GraduationCap,
  Users,
  BookOpen,
  BrainCircuit,
  Award,
  ArrowRight,
  Sparkles,
  Laptop,
  Star,
  Play,
  Clock,
  TrendingUp,
} from "lucide-react";
import Counter from "../../Counter"

const stats = [
  { 
    value: "5,000+", 
    label: "Professionals Trained",
    icon: Users,
    color: "blue"
  },
  { 
    value: "150+", 
    label: "Corporate Workshops",
    icon: BookOpen,
    color: "purple"
  },
  { 
    value: "96%", 
    label: "Satisfaction Rate",
    icon: Star,
    color: "amber"
  },
];

const courses = [
  { 
    name: "AI & Automation", 
    duration: "8 Weeks",
    level: "Advanced",
    enrolled: 234,
    icon: BrainCircuit 
  },
  { 
    name: "Full Stack Development", 
    duration: "12 Weeks",
    level: "Intermediate",
    enrolled: 456,
    icon: Laptop 
  },
  { 
    name: "Cloud Computing", 
    duration: "6 Weeks",
    level: "Advanced",
    enrolled: 189,
    icon: GraduationCap 
  },
  { 
    name: "Cyber Security", 
    duration: "10 Weeks",
    level: "Expert",
    enrolled: 312,
    icon: Award 
  },
];

export default function CorporateTrainingHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f610,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#8b5cf610,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-[10%] top-[20%] hidden lg:block"
      >
        <div className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
          <GraduationCap className="text-blue-600" size={28} />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 7, delay: 1 }}
        className="absolute bottom-[15%] left-[5%] hidden lg:block"
      >
        <div className="rounded-2xl border border-purple-100 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
          <BrainCircuit className="text-purple-600" size={28} />
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
              <Sparkles size={16} />
              Corporate Training
            </div>

            <h1 className="text-6xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Build
              <span className="relative mx-3">
                High-
                <br className="hidden sm:block" />
                Performance
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Teams
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Upskill your workforce with industry-focused training programs
              designed by experienced professionals in software, AI, cloud,
              cybersecurity, and modern technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/Contact" className="cursor-pointer group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-blue-800 hover:shadow-xl">
                Schedule Training
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>

              <Link to="/Portfolio" className="cursor-pointer flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md">
                <Play size={18} />
                View Demo Session
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -5 }}
                    className={`group rounded-2xl border border-${item.color}-100 bg-gradient-to-br from-white to-${item.color}-50/30 p-5 shadow-sm transition-all hover:shadow-lg hover:border-${item.color}-200`}
                  >
                    <div className={`rounded-xl bg-${item.color}-100 p-2 w-fit mb-4`}>
                      <Icon className={`text-${item.color}-600`} size={20} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      <Counter value={item.value} />
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Training Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="rounded-[40px] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-4 shadow-lg shadow-blue-200">
                    <Laptop className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Live Training
                    </h3>
                    <p className="text-sm text-slate-500">Active Sessions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-green-700">Live</span>
                </div>
              </div>

              {/* Course Cards */}
              <div className="space-y-4">
                {courses.map((course, index) => {
                  const Icon = course.icon;
                  return (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white p-4 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3 transition group-hover:from-blue-500/20 group-hover:to-purple-500/20">
                          <Icon className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {course.name}
                          </h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <Clock size={12} />
                              <Counter value={course.duration} />
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                              {course.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-700">
                          <Counter value={course.enrolled} />
                        </p>
                        <p className="text-xs text-slate-400">Enrolled</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Overview */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Training Progress
                    </h4>
                    <p className="text-sm text-slate-500">Company-wide completion rate</p>
                  </div>
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-4xl font-bold text-slate-900"><Counter value="78%" /></span>
                    <span className="ml-2 text-sm font-semibold text-green-600"><Counter value="+12%" /></span>
                  </div>
                  <div className="w-48 h-3 rounded-full bg-white overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Award Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-3 shadow-lg shadow-amber-200">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Industry Certified</p>
                  <p className="text-sm text-slate-500"><Counter value="50+" /> Programs</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Students Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -right-4 -top-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Users className="text-blue-600" size={20} />
                <span className="font-bold text-slate-900"><Counter value="2.4K+" /></span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Active Learners</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
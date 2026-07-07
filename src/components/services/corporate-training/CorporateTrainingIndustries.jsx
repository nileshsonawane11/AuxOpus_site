// src/components/services/corporate-training/CorporateTrainingIndustries.jsx

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Trophy,
  Briefcase,
  ArrowRight,
  Users,
  Star,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Enterprise IT",
    desc: "Upskill software teams with modern technologies and engineering best practices.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    stats: "200+ Companies",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Industry 4.0, ERP, automation, IoT, and digital transformation training.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    stats: "150+ Factories",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Healthcare software, cybersecurity, compliance, and digital healthcare systems.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
    stats: "100+ Hospitals",
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Cloud security, fintech development, AI, and enterprise banking solutions.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    stats: "80+ Banks",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Faculty development, AI literacy, LMS, and educational technologies.",
    color: "from-violet-500 to-indigo-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    stats: "300+ Institutions",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Digital commerce, CRM, analytics, and customer experience technologies.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    stats: "120+ Retailers",
  },
  {
    icon: Trophy,
    title: "Sports",
    desc: "Sports analytics, live scoring systems, and digital engagement platforms.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
    stats: "50+ Organizations",
  },
  {
    icon: Briefcase,
    title: "Startups",
    desc: "Accelerated learning paths for rapidly growing technology startups.",
    color: "from-slate-700 to-slate-900",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
    borderColor: "border-slate-200",
    stats: "500+ Startups",
  },
];

export default function CorporateTrainingIndustries() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              <Star size={16} />
              Industries We Train
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Customized Training For
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Every Industry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          >
            Tailored learning solutions designed to address the unique challenges
            and technology needs of your specific industry sector.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-2xl border ${industry.borderColor} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-300`}>
                  {/* Gradient Bar */}
                  <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${industry.color} transform origin-left transition-transform duration-300 group-hover:scale-x-100`} />

                  {/* Icon */}
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${industry.color} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {industry.desc}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users size={16} />
                      <span>{industry.stats}</span>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-sm font-semibold text-blue-600"
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r ${industry.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6 shadow-lg">
            <div>
              <p className="font-semibold text-slate-900">
                Don't see your industry?
              </p>
              <p className="text-sm text-slate-600">
                We create custom training programs for any sector
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-blue-800">
              Request Custom Program
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
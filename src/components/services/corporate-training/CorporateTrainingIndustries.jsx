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
import { corporateTrainingIndustriesContent } from "../../../constants/Services/CorporateTraining.js";

const industryIcons = [
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Trophy,
  Briefcase,
];

export default function CorporateTrainingIndustries() {
  const { badge, heading, description, industries, cta } = corporateTrainingIndustriesContent;

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
              {badge.text}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            {heading.line1}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {heading.highlightedText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          >
            {description}
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
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
                {cta.title}
              </p>
              <p className="text-sm text-slate-600">
                {cta.subtitle}
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-blue-800">
              {cta.button.text}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
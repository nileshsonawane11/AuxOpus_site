import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa6";
import { contactHeroContent } from "../../constants/Contact.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ContactHero() {
  const { badge, heading, description, quickStats, floatingCards, centralCard } = contactHeroContent;
  const BadgeIcon = Icons[badge.icon];
  const CentralCardIcon = Icons[centralCard.icon];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 min-h-screen flex items-center">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:60px_60px]" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm px-5 py-2 shadow-lg shadow-blue-100"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {BadgeIcon && <BadgeIcon className="text-blue-600" />}
              </motion.div>
              <span className="text-sm tracking-wider uppercase font-semibold text-blue-700">
                {badge.text}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-slate-900"
            >
              {heading.line1}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-[size:200%] bg-clip-text text-transparent"
                style={{ backgroundSize: "200% auto" }}
              >
                {heading.highlightedText}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-6"
            >
              {quickStats.map((item, index) => {
                const StatIcon = Icons[item.icon];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white/60 backdrop-blur-sm px-5 py-3 shadow-md"
                  >
                    {StatIcon && <StatIcon className="text-blue-600" />}
                    <span className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - 3D Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:flex items-center justify-center min-h-[500px] hidden"
          >
            {/* Main 3D Card Stack */}
            <div className="relative perspective-1000">
              {floatingCards.map((card, index) => {
                const CardIcon = Icons[card.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: index === 1 ? 0 : (index === 0 ? -5 : 5),
                      rotateY: index === 1 ? 0 : (index === 0 ? 5 : -5),
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateX: 0,
                      rotateY: 0,
                      z: 50,
                      transition: { duration: 0.3 },
                    }}
                    className={`absolute ${index === 0 ? 'top-0 -left-10' : index === 1 ? 'top-32 left-16' : 'bottom-0 -right-10'} z-${10 - index}`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `translateZ(${index * 20}px)`,
                    }}
                  >
                    <motion.div
                      className={`w-72 rounded-2xl ${card.bgColor} p-6 shadow-2xl border border-white/50 backdrop-blur-xl cursor-pointer`}
                      whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                    >
                      {/* Gradient Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${card.color}`} />

                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`${card.iconBg} rounded-xl p-3 w-fit mb-4`}
                      >
                        {CardIcon && <CardIcon className={`${card.iconColor} text-2xl`} />}
                      </motion.div>

                      <h3 className="text-lg font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {card.value}
                      </p>

                      {/* Decorative Dots */}
                      <div className="flex gap-1.5 mt-4">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${card.color}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Central Hub Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 10, 0, -10, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative w-80 rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-8 text-white shadow-2xl shadow-blue-200/50"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent" />

                <div className="relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="rounded-2xl bg-white/20 p-4 w-fit backdrop-blur-sm"
                  >
                    {CentralCardIcon && <CentralCardIcon className="text-3xl" />}
                  </motion.div>

                  <h3 className="mt-6 text-3xl font-bold">
                    {centralCard.title}
                  </h3>

                  <p className="mt-4 text-blue-100 leading-relaxed">
                    {centralCard.description}
                  </p>

                  {/* Animated Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition-all hover:shadow-xl"
                  >
                    {centralCard.button.text}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {centralCard.button.arrow}
                    </motion.span>
                  </motion.button>

                  {/* Pulse Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-white/20"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={{
              d: [
                "M0,50 C320,100 720,0 1440,50 L1440,100 L0,100 Z",
                "M0,30 C320,80 720,50 1440,30 L1440,100 L0,100 Z",
                "M0,50 C320,100 720,0 1440,50 L1440,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="url(#waveGradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
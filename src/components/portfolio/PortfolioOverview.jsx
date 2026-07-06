import React from "react";
import {
  FaAward,
  FaArrowTrendUp,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6";

const highlights = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "Every project begins with understanding the client's vision and transforming ideas into practical digital solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    description:
      "We work closely with our clients throughout the development lifecycle to ensure transparency and success.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Business Growth",
    description:
      "Our solutions are designed to improve efficiency, increase productivity, and accelerate business growth.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    description:
      "From planning to deployment, we maintain high standards to deliver reliable and scalable products.",
  },
];

export default function PortfolioOverview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Overview
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Projects That Deliver
              <br />
              Real Business Value
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Our portfolio represents more than completed projects—it reflects
              our commitment to solving real-world business challenges through
              technology, innovation, and collaboration.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              From startups to enterprises, we build scalable software,
              intelligent automation, mobile applications, AI-powered systems,
              and cloud solutions that empower organizations to achieve
              sustainable growth.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-600 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "LiveStrike",
    category: "Sports Technology",
  },
  {
    title: "Exam Supervision",
    category: "Education",
  },
  {
    title: "Hospital ERP",
    category: "Healthcare",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex justify-between items-end flex-wrap gap-5">

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600">
              Featured
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Selected Projects
            </h2>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 hover:shadow-2xl transition"
            >

              <div className="h-64 bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300"></div>

              <div className="p-8">

                <span className="uppercase text-sm tracking-widest text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {project.title}
                </h3>

                <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600 hover:gap-5 transition-all">
                  View Case Study
                  <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
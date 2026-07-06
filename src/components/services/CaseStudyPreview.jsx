import React from "react";
import {
  FaArrowRight,
  FaMobileScreen,
  FaGlobe,
  FaRobot,
} from "react-icons/fa6";

const projects = [
  {
    icon: <FaGlobe />,
    title: "Corporate Website",
    desc: "Modern responsive website with CMS integration.",
  },
  {
    icon: <FaMobileScreen />,
    title: "Healthcare App",
    desc: "Cross-platform mobile application for patients.",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation",
    desc: "AI-powered workflow automation platform.",
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex justify-between items-end flex-wrap gap-5">

          <div>

            <h2 className="text-5xl font-bold">
              Recent Work
            </h2>

            <p className="mt-5 text-slate-600">
              A glimpse of our latest digital transformation projects.
            </p>

          </div>

          <button className="flex items-center gap-3 text-blue-600 font-semibold">
            View Portfolio

            <FaArrowRight />
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white shadow hover:shadow-xl transition overflow-hidden"
            >

              <div className="h-52 bg-gradient-to-br from-blue-500 to-cyan-500 flex justify-center items-center text-7xl text-white">

                {project.icon}

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {project.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
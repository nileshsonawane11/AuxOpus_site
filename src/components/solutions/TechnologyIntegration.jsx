import React from "react";

const tech = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "IoT",
  "Blockchain",
  "Big Data",
  "Cyber Security",
  "API Integration",
  "Automation",
  "DevOps",
];

export default function TechnologyIntegration() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-400">
            Technologies
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Powered By Modern Technologies
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          {tech.map((item, index) => (

            <div
              key={index}
              className="px-8 py-4 rounded-full bg-white/10 border border-white/10 hover:bg-blue-600 transition"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
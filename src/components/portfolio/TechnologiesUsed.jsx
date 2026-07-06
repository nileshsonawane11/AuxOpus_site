import React from "react";

const tech = [
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "Python",
  "Java",
  "Flutter",
  "MongoDB",
  "MySQL",
  "Firebase",
  "AWS",
  "Docker",
  "AI",
  "TensorFlow",
  "OpenAI",
];

export default function TechnologiesUsed() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Technologies
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Technologies We Use
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          {tech.map((item, index) => (
            <div
              key={index}
              className="px-7 py-4 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition font-semibold"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
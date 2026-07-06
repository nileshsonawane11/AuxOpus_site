import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const studies = [
  {
    title: "LiveStrike",
    industry: "Sports Technology",
    challenge:
      "Managing live scoring, tournaments, and player statistics on a single platform.",
    solution:
      "Developed a cloud-based real-time cricket scoring ecosystem with analytics and tournament management.",
    result: "40% faster match management and seamless live score delivery.",
  },
  {
    title: "Exam Supervision System",
    industry: "Education",
    challenge:
      "Manual supervision allocation caused scheduling conflicts and inefficiencies.",
    solution:
      "Created an automated allocation platform with intelligent scheduling and reporting.",
    result: "Reduced manual effort by over 80% while improving transparency.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Case Studies
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Real Challenges. Real Results.
          </h2>
        </div>

        <div className="space-y-10 mt-20">

          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 grid lg:grid-cols-4 gap-8"
            >
              <div>
                <span className="text-blue-600 uppercase text-sm font-semibold">
                  {study.industry}
                </span>

                <h3 className="text-3xl font-bold mt-3">
                  {study.title}
                </h3>
              </div>

              <div>
                <h4 className="font-semibold">Challenge</h4>
                <p className="mt-3 text-slate-600">{study.challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="mt-3 text-slate-600">{study.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold">Result</h4>
                <p className="mt-3 text-slate-600">{study.result}</p>

                <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  Read More
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
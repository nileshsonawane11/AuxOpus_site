import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { caseStudiesContent } from "../../constants/Portfolio.js";

export default function CaseStudies() {
  const { badge, heading, readMoreButton, studies } = caseStudiesContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            {heading}
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

                {/* <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  {readMoreButton.text}
                  <FaArrowRight />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
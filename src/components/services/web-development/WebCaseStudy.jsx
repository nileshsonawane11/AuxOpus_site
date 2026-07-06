import React from "react";
import {
  FaCircleExclamation,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa6";

export default function WebCaseStudy() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Case Study
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            From Challenge To Success
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">

              <FaCircleExclamation size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Problem
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Client had an outdated website, slow loading speed,
              poor SEO and no lead generation.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

              <FaLightbulb size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Built a responsive React platform with CMS,
              SEO optimization, analytics and cloud hosting.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">

              <FaChartLine size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Result
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              3x more traffic,
              65% faster loading,
              increased conversions,
              improved customer engagement.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
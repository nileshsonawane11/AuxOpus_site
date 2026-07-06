import React from "react";
import {
  FaCircleExclamation,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa6";

export default function AppCaseStudy() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
            Case Study
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Digital Transformation Through Mobile Apps
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl p-10 shadow">

            <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">

              <FaCircleExclamation size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Challenge
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              Client needed to digitize their offline services
              and provide a seamless mobile experience.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow">

            <div className="w-16 h-16 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">

              <FaLightbulb size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              Designed Android and iOS applications with cloud
              synchronization, push notifications and secure APIs.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow">

            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

              <FaChartLine size={28} />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Results
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              75% increase in user engagement,
              faster service delivery,
              improved customer retention
              and reduced manual work.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
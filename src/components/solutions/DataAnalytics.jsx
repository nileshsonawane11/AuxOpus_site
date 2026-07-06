import React from "react";
import {
  FaChartColumn,
  FaChartPie,
  FaChartLine,
  FaCheck,
} from "react-icons/fa6";

const analytics = [
  "Business Intelligence",
  "Interactive Dashboards",
  "Data Visualization",
  "Predictive Analytics",
  "Real-time Reports",
  "KPI Monitoring",
  "Big Data",
  "Decision Support",
];

export default function DataAnalytics() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Data Analytics
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Transform Data Into Decisions
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Unlock valuable business insights through dashboards, reporting,
            analytics, and intelligent visualization.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">

          <div className="grid sm:grid-cols-2 gap-5">

            {analytics.map((item, index) => (

              <div
                key={index}
                className="flex gap-3 items-center bg-white rounded-xl p-5 shadow"
              >

                <FaCheck className="text-blue-600" />

                {item}

              </div>

            ))}

          </div>

          <div className="flex justify-center">

            <div className="grid grid-cols-2 gap-6">

              {[FaChartColumn, FaChartPie, FaChartLine].map((Icon, i) => (

                <div
                  key={i}
                  className="w-40 h-40 bg-white rounded-3xl shadow flex justify-center items-center"
                >

                  <Icon className="text-6xl text-blue-600" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
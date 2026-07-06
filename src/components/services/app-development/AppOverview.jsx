import React from "react";

export default function AppOverview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <span className="uppercase tracking-widest text-violet-600 font-semibold">
          Overview
        </span>

        <h2 className="mt-4 text-5xl font-bold">
          Mobile Experiences That Users Love
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-9 max-w-4xl">
          We create intuitive, high-performance mobile applications
          tailored for startups, enterprises and growing businesses.
          From idea validation to App Store deployment, we provide
          complete mobile application development services.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-violet-50 p-8 rounded-3xl">

            <h3 className="font-bold text-2xl">
              What
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Android, iOS and cross-platform applications
              for every business.
            </p>

          </div>

          <div className="bg-cyan-50 p-8 rounded-3xl">

            <h3 className="font-bold text-2xl">
              Why
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Improve customer engagement,
              automate operations,
              increase sales.
            </p>

          </div>

          <div className="bg-blue-50 p-8 rounded-3xl">

            <h3 className="font-bold text-2xl">
              Who
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Healthcare,
              Retail,
              Logistics,
              Education,
              Finance,
              Startups.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
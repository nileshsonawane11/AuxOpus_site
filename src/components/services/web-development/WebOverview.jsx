import React from "react";

export default function WebOverview() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="max-w-4xl">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Overview
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Professional Web Development Services
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Your website is the digital face of your business. At AuxOpus, we
            create fast, secure, scalable, and user-friendly websites that help
            organizations establish a strong online presence while improving
            customer engagement and business growth.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-blue-50 rounded-3xl p-8">

            <h3 className="font-bold text-2xl">
              What
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Custom websites, web applications, ERP systems,
              portals and enterprise platforms.
            </p>

          </div>

          <div className="bg-cyan-50 rounded-3xl p-8">

            <h3 className="font-bold text-2xl">
              Why
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Increase visibility, automate operations,
              generate leads and improve customer experience.
            </p>

          </div>

          <div className="bg-indigo-50 rounded-3xl p-8">

            <h3 className="font-bold text-2xl">
              Who
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Startups, SMEs, Enterprises,
              Healthcare,
              Education,
              Government,
              Retail and Manufacturing.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
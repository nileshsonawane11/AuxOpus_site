import React from "react";

const companies = [
  "Startup",
  "Education",
  "Healthcare",
  "Retail",
  "Finance",
  "Manufacturing",
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white border-y">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <p className="text-center uppercase tracking-[0.3em] text-slate-500 font-semibold">
          Trusted Across Industries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-12">

          {companies.map((company, index) => (

            <div
              key={index}
              className="h-24 rounded-2xl bg-slate-100 flex items-center justify-center font-semibold text-slate-600 hover:bg-blue-600 hover:text-white transition"
            >

              {company}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
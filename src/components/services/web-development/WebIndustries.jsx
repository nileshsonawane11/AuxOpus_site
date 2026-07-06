import React from "react";

const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "Retail",
  "Manufacturing",
  "Real Estate",
  "Government",
  "Startups",
];

export default function WebIndustries() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <h2 className="text-4xl font-bold">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {industries.map((industry) => (

            <div
              key={industry}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl hover:-translate-y-2 transition text-center"
            >

              <h3 className="text-xl font-bold">
                {industry}
              </h3>

              <p className="mt-4 text-slate-600">
                Customized web solutions tailored for the {industry.toLowerCase()} industry.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
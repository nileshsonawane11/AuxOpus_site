import React from "react";

const stats = [
  {
    number: "10+",
    title: "Business Domains",
  },
  {
    number: "50+",
    title: "Solution Modules",
  },
  {
    number: "100%",
    title: "Customized",
  },
  {
    number: "24×7",
    title: "Support",
  },
];

export default function SolutionStats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="text-6xl font-bold">
                {item.number}
              </div>

              <div className="mt-4 text-xl">
                {item.title}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
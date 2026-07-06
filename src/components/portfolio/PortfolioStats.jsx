import React from "react";

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "12+",
    label: "Industries Served",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Client-Focused",
  },
];

export default function PortfolioStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              <div className="text-5xl md:text-6xl font-black">
                {item.number}
              </div>

              <div className="mt-4 text-lg">
                {item.label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
import React from "react";

const stats = [
  {
    number: "7+",
    title: "Core Services",
  },
  {
    number: "20+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Client Focus",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function ServiceStats() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center rounded-3xl bg-slate-50 p-10 hover:shadow-xl transition"
            >

              <div className="text-5xl font-bold text-blue-600">

                {item.number}

              </div>

              <div className="mt-4 text-lg font-semibold">

                {item.title}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
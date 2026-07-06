import React from "react";

const numbers = [
  {
    number: "7+",
    title: "Core Services",
  },
  {
    number: "20+",
    title: "Modern Technologies",
  },
  {
    number: "50+",
    title: "Business Solutions",
  },
  {
    number: "100%",
    title: "Client Satisfaction Goal",
  },
];

export default function NumbersSection() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

          {numbers.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="text-6xl font-bold text-blue-400">

                {item.number}

              </div>

              <div className="mt-5 text-xl">

                {item.title}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import React from "react";
import Counter from "../Counter.jsx";
import { serviceStatsContent } from "../../constants/Services.js";

export default function ServiceStats() {
  const { stats } = serviceStatsContent;

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
                <Counter value={item.number} />
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
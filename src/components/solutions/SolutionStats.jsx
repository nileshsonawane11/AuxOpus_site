import React from "react";
import Counter from "../Counter.jsx";
import { solutionStatsContent } from "../../constants/OurSolutions.js";

export default function SolutionStats() {
  const { stats } = solutionStatsContent;

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
                <Counter value={item.number} />
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
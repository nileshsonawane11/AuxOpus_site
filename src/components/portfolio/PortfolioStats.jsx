import React from "react";
import Counter from "../Counter.jsx";
import { portfolioStatsContent } from "../../constants/Portfolio.js";

export default function PortfolioStats() {
  const { stats } = portfolioStatsContent;

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
                <Counter value={item.number} />
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
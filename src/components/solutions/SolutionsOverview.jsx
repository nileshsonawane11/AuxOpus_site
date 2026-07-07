import React from "react";
import { solutionsOverviewContent } from "../../constants/OurSolutions.js";

export default function SolutionsOverview() {
  const { badge, heading, description } = solutionsOverviewContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
          {badge}
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl font-bold">
          {heading}
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}
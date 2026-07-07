import React from "react";
import { FaCheck } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { businessSolutionsContent } from "../../constants/OurSolutions.js";

export default function BusinessSolutions() {
  const { badge, heading, description, features, showcase } = businessSolutionsContent;
  const ShowcaseIcon = Icons[showcase.icon];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading}
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheck className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-[40px] h-[500px] flex justify-center items-center">
            {ShowcaseIcon && <ShowcaseIcon className="text-8xl text-blue-600" />}
          </div>
        </div>
      </div>
    </section>
  );
}
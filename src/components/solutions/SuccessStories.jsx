import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const stories = [
  {
    title: "Digital ERP Platform",
    industry: "Manufacturing",
  },
  {
    title: "Hospital Management",
    industry: "Healthcare",
  },
  {
    title: "Learning Management",
    industry: "Education",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex justify-between items-end flex-wrap gap-6">

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600">
              Portfolio
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Solution Success Stories
            </h2>

          </div>

          <button className="flex items-center gap-3 text-blue-600 font-semibold">
            View All
            <FaArrowRight />
          </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {stories.map((story, index) => (

            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
            >

              <div className="h-64 bg-gradient-to-br from-blue-500 to-cyan-500"></div>

              <div className="p-8">

                <span className="text-blue-600 text-sm uppercase font-semibold">
                  {story.industry}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {story.title}
                </h3>

                <p className="mt-5 text-slate-600">
                  Complete business transformation with scalable,
                  secure, and intelligent software.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
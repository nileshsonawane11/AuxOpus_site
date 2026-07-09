import React from "react";
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { successStoriesContent } from "../../constants/OurSolutions.js";

export default function SuccessStories() {
  const { badge, heading, viewAllButton, stories } = successStoriesContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div>
            <span className="uppercase tracking-[0.3em] text-blue-600">
              {badge}
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              {heading}
            </h2>
          </div>

          <Link to="/portfolio" className="flex items-center gap-3 text-blue-600 font-semibold">
            {viewAllButton.text}
            <FaArrowRight />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
            >
              {story.img ? (
                <img
                  src={story.img}
                  alt={story.title}
                  className=" w-full object-cover"
                />
              ) : (
                <div className={`h-64 bg-gradient-to-br ${story.gradient}`}></div>
              )}

              <div className="p-8">
                <span className="text-blue-600 text-sm uppercase font-semibold">
                  {story.industry}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {story.title}
                </h3>

                <p className="mt-5 text-slate-600">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
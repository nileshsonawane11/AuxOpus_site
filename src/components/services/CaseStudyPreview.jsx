import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { caseStudyPreviewContent } from "../../constants/Services.js";

export default function CaseStudyPreview() {
  const { heading, description, viewAllButton, projects } = caseStudyPreviewContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end flex-wrap gap-5">
          <div>
            <h2 className="text-5xl font-bold">
              {heading}
            </h2>

            <p className="mt-5 text-slate-600">
              {description}
            </p>
          </div>

          <button className="flex items-center gap-3 text-blue-600 font-semibold">
            {viewAllButton.text}
            <FaArrowRight />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => {
            const IconComponent = Icons[project.icon];
            return (
              <div
                key={index}
                className="rounded-3xl bg-white shadow hover:shadow-xl transition overflow-hidden"
              >
                {/* Show image if provided, otherwise show gradient with icon */}
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className={`h-52 bg-gradient-to-br ${project.gradient} flex justify-center items-center text-7xl text-white`}>
                    {IconComponent ? <IconComponent /> : null}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
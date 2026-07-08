import React from "react";
import * as Icons from "react-icons/fa6";
import { webCaseStudyContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebCaseStudy() {
  const { badge, heading, sections } = webCaseStudyContent;

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {sections.map((section, index) => {
            const IconComponent = Icons[section.icon];
            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-10">
                <div className={`w-16 h-16 rounded-2xl ${section.iconBg} flex items-center justify-center ${section.iconColor}`}>
                  {IconComponent && <IconComponent size={28} />}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {section.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
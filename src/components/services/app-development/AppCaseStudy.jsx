import React from "react";
import * as Icons from "react-icons/fa6";
import { appCaseStudyContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppCaseStudy() {
  const { badge, heading, sections } = appCaseStudyContent;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
            {badge}
          </span>

          <h2 className="text-5xl font-bold mt-5">
            {heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {sections.map((section, index) => {
            const IconComponent = Icons[section.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow"
              >
                <div className={`w-16 h-16 rounded-2xl ${section.iconBg} ${section.iconColor} flex items-center justify-center`}>
                  {IconComponent && <IconComponent size={28} />}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {section.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
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
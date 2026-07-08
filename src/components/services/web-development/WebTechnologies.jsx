import React from "react";
import * as FaIcons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { webTechnologiesContent } from "../../../constants/Services/WebDevelopment.js";

// Combined icon library lookup
const iconLibraries = {
  fa6: FaIcons,
  si: SiIcons,
};

export default function WebTechnologies() {
  const { heading, categories } = webTechnologiesContent;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="text-4xl font-bold">
          {heading}
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-2xl mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => {
                  const IconLibrary = iconLibraries[tech.library];
                  const IconComponent = IconLibrary ? IconLibrary[tech.icon] : null;
                  
                  return (
                    <div key={techIndex} className="flex items-center gap-3">
                      {IconComponent && <IconComponent className={tech.color} />}
                      {tech.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
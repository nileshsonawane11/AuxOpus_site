// Technologies.jsx

import React from "react";
import * as FaIcons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { technologiesContent } from "../../constants/AboutUs.js";

// Combined icon library lookup
const iconLibraries = {
  fa6: FaIcons,
  si: SiIcons,
};

export default function Technologies() {
  const { badge, heading, description, technologies } = technologiesContent;

  // Create doubled array for infinite marquee effect
  const marqueeTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="uppercase tracking-widest text-blue-400 font-semibold">
          {badge}
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          {heading}
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="mt-20 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {marqueeTechnologies.map((item, index) => {
            const IconLibrary = iconLibraries[item.library];
            const IconComponent = IconLibrary ? IconLibrary[item.icon] : null;
            
            return (
              <div
                key={index}
                className="min-w-[220px] bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-blue-600 transition duration-500"
              >
                <div className="text-6xl text-white flex justify-center">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="text-white text-xl font-semibold mt-6">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
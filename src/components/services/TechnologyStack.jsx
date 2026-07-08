import React from "react";
import * as FaIcons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { technologyStackContent } from "../../constants/Services.js";

// Combined icon library lookup
const iconLibraries = {
  fa6: FaIcons,
  si: SiIcons,
};

export default function TechnologyStack() {
  const { heading, description, technologies } = technologyStackContent;

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 mt-16">
          {technologies.map((item, index) => {
            const IconLibrary = iconLibraries[item.library];
            const IconComponent = IconLibrary ? IconLibrary[item.icon] : null;
            
            return (
              <div
                key={index}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition"
              >
                <div className="text-5xl text-blue-400 flex justify-center">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-6 font-semibold">
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
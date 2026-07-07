import React from "react";
import * as Icons from "react-icons/fa6";
import { whoWeAreContent } from "../../constants/AboutUs.js";

export default function WhoWeAre() {
  const { badge, heading, paragraphs, services } = whoWeAreContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              {badge}
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              {heading.line1}
              <span className="text-blue-600">{heading.highlightedText}</span>
            </h2>

            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-8" : "mt-6"} text-gray-600 leading-8 text-lg`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
                >
                  <div className="text-5xl text-blue-600">
                    {IconComponent ? <IconComponent /> : null}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
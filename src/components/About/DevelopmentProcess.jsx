// DevelopmentProcess.jsx

import React from "react";
import * as Icons from "react-icons/fa6";
import { developmentProcessContent } from "../../constants/AboutUs.js";

export default function DevelopmentProcess() {
  const { badge, heading, description, process } = developmentProcessContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="text-5xl font-bold mt-4">
            {heading}
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative mt-24">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-16">
            {process.map((step, index) => {
              const IconComponent = Icons[step.icon];
              return (
                <div
                  key={index}
                  className={`flex items-center gap-10 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col`}
                >
                  <div className="lg:w-5/12">
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500">
                      <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-4xl">
                        {IconComponent ? <IconComponent /> : null}
                      </div>

                      <h3 className="text-3xl font-bold mt-8">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-gray-600 leading-8">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-8 border-white shadow-lg"></div>
                  </div>

                  <div className="lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
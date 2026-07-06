import React from "react";
import {
  FaMagnifyingGlass,
  FaPenRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa6";

const process = [
  {
    icon: <FaMagnifyingGlass />,
    title: "Research",
  },
  {
    icon: <FaPenRuler />,
    title: "Design",
  },
  {
    icon: <FaCode />,
    title: "Development",
  },
  {
    icon: <FaBug />,
    title: "Testing",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Process
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            How We Build Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mt-20">

          {process.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              <div className="w-24 h-24 rounded-full bg-blue-50 mx-auto flex items-center justify-center text-blue-600 text-4xl">
                {step.icon}
              </div>

              <div className="mt-6 text-2xl font-bold">
                {step.title}
              </div>

              {index !== process.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full border-t-2 border-dashed border-blue-200 -translate-x-12"></div>
              )}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
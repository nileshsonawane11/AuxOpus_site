import React from "react";
import {
  FaLaptopCode,
  FaMobileScreen,
  FaRobot,
  FaCloud,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa6";

const categories = [
  {
    icon: <FaLaptopCode />,
    title: "Web Applications",
  },
  {
    icon: <FaMobileScreen />,
    title: "Mobile Apps",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Platforms",
  },
  {
    icon: <FaDatabase />,
    title: "Enterprise Systems",
  },
  {
    icon: <FaGlobe />,
    title: "Digital Products",
  },
];

export default function ProjectCategories() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Categories
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Explore Our Expertise
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-blue-500 hover:shadow-xl transition"
            >
              <div className="text-5xl text-blue-600">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
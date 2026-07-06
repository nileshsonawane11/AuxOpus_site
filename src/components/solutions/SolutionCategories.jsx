import React from "react";
import {
  FaBuilding,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaUserGroup,
  FaMobileScreen,
} from "react-icons/fa6";

const categories = [
  {
    icon: <FaBuilding />,
    title: "Business Solutions",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
  },
  {
    icon: <FaUserGroup />,
    title: "HR Solutions",
  },
  {
    icon: <FaMobileScreen />,
    title: "Mobile Solutions",
  },
];

export default function SolutionCategories() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Solution Categories
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {categories.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-10 hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-blue-600 text-5xl">

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
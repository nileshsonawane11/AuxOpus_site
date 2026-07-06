import React from "react";
import {
  FaGears,
  FaBolt,
  FaRobot,
  FaArrowRightArrowLeft,
} from "react-icons/fa6";

const cards = [
  {
    icon: <FaGears />,
    title: "Workflow Automation",
  },
  {
    icon: <FaBolt />,
    title: "Process Optimization",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation",
  },
  {
    icon: <FaArrowRightArrowLeft />,
    title: "System Integration",
  },
];

export default function AutomationSolutions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Automation Solutions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            Reduce manual work, improve accuracy, and increase productivity
            through intelligent automation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {cards.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-10 hover:shadow-xl hover:-translate-y-2 transition"
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
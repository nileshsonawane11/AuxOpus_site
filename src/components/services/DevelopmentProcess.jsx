import React from "react";
import {
  FaComments,
  FaLightbulb,
  FaPenRuler,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa6";

const steps = [
  {
    icon: <FaComments />,
    title: "Discovery",
    desc: "Understanding your business goals, users, and project requirements.",
  },
  {
    icon: <FaLightbulb />,
    title: "Planning",
    desc: "Creating the roadmap, technology stack, timeline, and architecture.",
  },
  {
    icon: <FaPenRuler />,
    title: "Design",
    desc: "Building user-friendly UI/UX prototypes focused on experience.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Developing secure, scalable, and high-performance applications.",
  },
  {
    icon: <FaVial />,
    title: "Testing",
    desc: "Quality assurance through functional, security, and performance testing.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    desc: "Deployment, monitoring, maintenance, and continuous improvements.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            From Idea to Deployment
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            Every successful project follows a structured development process
            that ensures quality, transparency, and timely delivery.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2"
            >

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">

                {step.icon}

              </div>

              <div className="mt-8">

                <div className="text-sm font-semibold text-blue-600">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-2">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
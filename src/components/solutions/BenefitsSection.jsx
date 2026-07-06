import React from "react";
import {
  FaArrowTrendUp,
  FaShieldHalved,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

const benefits = [
  {
    icon: <FaArrowTrendUp />,
    title: "Business Growth",
    desc: "Increase efficiency and unlock new revenue opportunities.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Enhanced Security",
    desc: "Protect business data using modern security practices.",
  },
  {
    icon: <FaClock />,
    title: "Save Time",
    desc: "Automate repetitive processes and reduce manual effort.",
  },
  {
    icon: <FaUsers />,
    title: "Better Collaboration",
    desc: "Improve communication between teams and departments.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Why Businesses Choose Our Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-10 hover:shadow-xl hover:-translate-y-2 transition"
            >

              <div className="text-blue-600 text-5xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-5 text-slate-600">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
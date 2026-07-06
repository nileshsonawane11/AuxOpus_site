import React from "react";
import {
  FaUsers,
  FaShieldHalved,
  FaLightbulb,
  FaClock,
  FaHandshake,
  FaArrowTrendUp,
} from "react-icons/fa6";

const reasons = [
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    desc: "Dedicated professionals delivering high-quality software solutions.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure Development",
    desc: "Security-first development practices across every project.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    desc: "Modern technologies solving real business challenges.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Projects delivered within agreed timelines.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Communication",
    desc: "Regular updates and collaborative development process.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Scalable Products",
    desc: "Solutions designed to grow with your business.",
  },
];

export default function WhyChooseServices() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Why Choose AuxOpus?
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We focus on delivering business value, long-term partnerships,
            and technology solutions that help organizations succeed.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="border rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-600">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-8">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
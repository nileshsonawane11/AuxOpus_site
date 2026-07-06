import React from "react";
import {
  FaBolt,
  FaUsers,
  FaShieldHalved,
  FaChartLine,
} from "react-icons/fa6";

const items = [
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    text: "Agile development ensuring rapid project execution.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Experts",
    text: "Experienced professionals across multiple technologies.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure Solutions",
    text: "Enterprise-grade security and industry best practices.",
  },
  {
    icon: <FaChartLine />,
    title: "Scalable Products",
    text: "Solutions designed for long-term business growth.",
  },
];

export default function WhyOurServices() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Why Our Services?
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            Every solution is designed with quality, scalability, and business
            value at its core.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {items.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-8 hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
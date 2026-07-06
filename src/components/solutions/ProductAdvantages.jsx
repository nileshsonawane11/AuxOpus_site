import React from "react";
import {
  FaRocket,
  FaShieldHalved,
  FaCloud,
  FaGears,
} from "react-icons/fa6";

const advantages = [
  {
    icon: <FaRocket />,
    title: "Quick Deployment",
    desc: "Go live within days instead of months.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure & Reliable",
    desc: "Built using industry-standard security practices.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Ready",
    desc: "Accessible from anywhere with scalable infrastructure.",
  },
  {
    icon: <FaGears />,
    title: "Fully Customizable",
    desc: "Adapt every product to your organization's workflow.",
  },
];

export default function ProductAdvantages() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {advantages.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-600">
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
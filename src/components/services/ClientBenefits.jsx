import React from "react";
import {
  FaClock,
  FaShield,
  FaCoins,
  FaArrowTrendUp,
} from "react-icons/fa6";

const benefits = [
  {
    icon: <FaClock />,
    title: "Faster Delivery",
    desc: "Agile development with shorter release cycles.",
  },
  {
    icon: <FaShield />,
    title: "Secure Solutions",
    desc: "Built using industry best practices and security standards.",
  },
  {
    icon: <FaCoins />,
    title: "Cost Effective",
    desc: "Maximum ROI with optimized development strategies.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Business Growth",
    desc: "Technology focused on measurable business outcomes.",
  },
];

export default function ClientBenefits() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Benefits You Receive
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="border rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-600">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-slate-600">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import React from "react";
import {
  FaGraduationCap,
  FaBuilding,
  FaHospital,
  FaMoneyBillTrendUp,
  FaCartShopping,
  FaIndustry,
  FaPlaneDeparture,
  FaLeaf,
} from "react-icons/fa6";

const industries = [
  {
    icon: <FaBuilding />,
    name: "Startups & SMEs",
  },
  {
    icon: <FaIndustry />,
    name: "Manufacturing",
  },
  {
    icon: <FaHospital />,
    name: "Healthcare",
  },
  {
    icon: <FaGraduationCap />,
    name: "Education",
  },
  {
    icon: <FaMoneyBillTrendUp />,
    name: "Finance",
  },
  {
    icon: <FaCartShopping />,
    name: "Retail",
  },
  {
    icon: <FaPlaneDeparture />,
    name: "Travel",
  },
  {
    icon: <FaLeaf />,
    name: "Agriculture",
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Industries We Serve
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We develop tailored digital solutions for organizations across
            multiple industries and business domains.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {industries.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-600 flex justify-center">

                {item.icon}

              </div>

              <h3 className="mt-8 text-xl font-bold">

                {item.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
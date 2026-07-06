import React from "react";
import {
  FaGraduationCap,
  FaHospital,
  FaBuilding,
  FaCartShopping,
  FaIndustry,
  FaBuildingColumns,
} from "react-icons/fa6";

const industries = [
  {
    icon: <FaBuilding />,
    title: "Startups & SMEs",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
  },
  {
    icon: <FaCartShopping />,
    title: "Retail",
  },
  {
    icon: <FaBuildingColumns />,
    title: "Government",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Industry Specific Solutions
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Every industry has unique challenges. Our tailored solutions
            help organizations improve productivity and accelerate growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {industries.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-5xl text-blue-600">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-5 text-slate-600">
                Customized digital solutions designed specifically for this
                industry.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import React from "react";
import { FaBaseballBall } from "react-icons/fa";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBuilding,
  FaUserCheck,
  FaHospital,
  FaCartShopping,
} from "react-icons/fa6";

const products = [
  {
    icon: <FaBaseballBall />,
    title: "LiveStrike",
    category: "Sports Management",
    description:
      "Real-time cricket scoring platform with tournaments, analytics, live streaming and player statistics.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Exam Supervision",
    category: "Education",
    description:
      "Automated invigilation allocation, duty scheduling and examination management system.",
  },
  {
    icon: <FaBuilding />,
    title: "Business ERP",
    category: "Enterprise",
    description:
      "Complete ERP for HR, Finance, Inventory, Projects and Operations.",
  },
  {
    icon: <FaUserCheck />,
    title: "HRMS",
    category: "Human Resources",
    description:
      "Attendance, payroll, leave management and employee lifecycle automation.",
  },
  {
    icon: <FaHospital />,
    title: "Hospital Management",
    category: "Healthcare",
    description:
      "Manage appointments, doctors, billing, pharmacy and patient records.",
  },
  {
    icon: <FaCartShopping />,
    title: "Retail POS",
    category: "Retail",
    description:
      "Billing, inventory, GST, barcode and sales reporting solution.",
  },
];

export default function OurProducts() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Ready-to-Deploy Products
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Our Software Products
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Along with custom software development, we offer industry-ready
            products that can be deployed quickly and customized according to
            your business needs.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {products.map((product, index) => (

            <div
              key={index}
              className="group rounded-3xl border bg-white p-8 hover:border-blue-600 hover:shadow-2xl transition-all"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-3xl">

                {product.icon}

              </div>

              <div className="mt-8">

                <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                  {product.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {product.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {product.description}
                </p>

                <button className="flex items-center gap-2 mt-8 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
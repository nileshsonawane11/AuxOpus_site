import React from "react";
import {
  FaCartShopping,
  FaGlobe,
  FaDatabase,
  FaBriefcase,
  FaCode,
  FaBuilding,
  FaMobileScreen,
  FaServer,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaBuilding />,
    title: "Corporate Websites",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Websites",
  },
  {
    icon: <FaCartShopping />,
    title: "E-Commerce",
  },
  {
    icon: <FaGlobe />,
    title: "Landing Pages",
  },
  {
    icon: <FaCode />,
    title: "Web Applications",
  },
  {
    icon: <FaDatabase />,
    title: "ERP & CRM",
  },
  {
    icon: <FaMobileScreen />,
    title: "Progressive Web Apps",
  },
  {
    icon: <FaServer />,
    title: "API Development",
  },
];

export default function WebOffer() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <h2 className="text-4xl font-bold">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow hover:-translate-y-3 hover:shadow-xl transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                Custom solutions designed for your business growth.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
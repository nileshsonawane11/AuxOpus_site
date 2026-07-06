import React from "react";
import {
  FaBuilding,
  FaCheck,
  FaNetworkWired,
  FaDatabase,
  FaUsers,
} from "react-icons/fa6";

const solutions = [
  "Enterprise Resource Planning (ERP)",
  "Customer Relationship Management (CRM)",
  "Document Management System",
  "Supply Chain Management",
  "Human Resource Management",
  "Finance & Accounting",
  "Business Intelligence",
  "Custom Enterprise Portals",
];

export default function EnterpriseSolutions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Enterprise Solutions
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Powerful Software For
              <span className="text-blue-600"> Large Organizations</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Centralize business operations, improve collaboration,
              automate departments, and gain complete visibility across
              your organization.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              {solutions.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <FaCheck className="text-blue-600" />
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {[
              { icon: <FaBuilding />, title: "ERP" },
              { icon: <FaDatabase />, title: "Data" },
              { icon: <FaUsers />, title: "HRM" },
              { icon: <FaNetworkWired />, title: "Integration" },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
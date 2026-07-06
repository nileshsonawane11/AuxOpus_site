import React from "react";
import {
  FaServer,
  FaShieldHalved,
  FaBug,
  FaCloud,
  FaHeadset,
  FaRotate,
  FaCheck,
} from "react-icons/fa6";

export default function MaintenanceSupport() {

  const items = [
    "24×7 Technical Support",
    "Performance Monitoring",
    "Bug Fixes",
    "Security Updates",
    "Cloud Infrastructure",
    "Backup & Recovery",
    "Application Upgrades",
    "Continuous Improvements",
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-6">

            {[
              {
                icon: <FaServer />,
                title: "Server Monitoring",
              },
              {
                icon: <FaShieldHalved />,
                title: "Security",
              },
              {
                icon: <FaBug />,
                title: "Bug Fixes",
              },
              {
                icon: <FaCloud />,
                title: "Cloud Support",
              },
            ].map((card, index) => (

              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow hover:shadow-xl hover:-translate-y-2 transition"
              >

                <div className="text-5xl text-blue-600">
                  {card.icon}
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {card.title}
                </h3>

              </div>

            ))}

          </div>

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Maintenance & Support
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Reliable Support
              Beyond Project Delivery
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Our dedicated support team ensures your software remains secure,
              updated, and optimized for maximum performance throughout its
              lifecycle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {items.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheck className="text-blue-600" />

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
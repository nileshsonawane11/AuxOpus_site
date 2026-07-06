import React from "react";
import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaShieldHalved,
  FaCheck,
} from "react-icons/fa6";

const services = [
  "Cloud Migration",
  "AWS & Azure",
  "Google Cloud",
  "Cloud Security",
  "Backup & Recovery",
  "DevOps",
  "Scalable Infrastructure",
  "Disaster Recovery",
];

export default function CloudSolutions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Cloud Solutions
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Secure, Reliable &
              <span className="text-blue-600"> Scalable Cloud</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Modern cloud infrastructure helps organizations improve
              scalability, security, collaboration, and operational efficiency.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {services.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-3 items-center"
                >

                  <FaCheck className="text-blue-600" />

                  {item}

                </div>

              ))}

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {[
              { icon: <FaCloud />, title: "Cloud" },
              { icon: <FaServer />, title: "Infrastructure" },
              { icon: <FaDatabase />, title: "Database" },
              { icon: <FaShieldHalved />, title: "Security" },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition"
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
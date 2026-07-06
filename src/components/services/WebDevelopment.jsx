import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaGlobe,
  FaDatabase,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

export default function WebDevelopment() {
  const features = [
    "Corporate Websites",
    "Custom Web Applications",
    "ERP & CRM Solutions",
    "E-Commerce Platforms",
    "Admin Dashboards",
    "API Development & Integration",
    "Cloud Deployment",
    "Performance Optimization",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-600 uppercase tracking-[0.3em] font-semibold">
              Web Development
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Build Powerful &
              <span className="text-blue-600"> Scalable Web Solutions</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We create modern websites and enterprise-grade web applications
              using the latest technologies. Every solution is designed for
              speed, security, scalability, and an exceptional user experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">

                    <FaCheck size={12} />

                  </div>

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <button className="mt-10 bg-blue-600 text-white px-7 py-4 rounded-2xl flex items-center gap-3 hover:bg-slate-900 transition">

              Learn More

              <FaArrowRight />

            </button>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            {[
              {
                icon: <FaLaptopCode />,
                title: "Business Websites",
              },
              {
                icon: <FaDatabase />,
                title: "Enterprise Software",
              },
              {
                icon: <FaGlobe />,
                title: "E-Commerce",
              },
              {
                icon: <FaCode />,
                title: "Custom Solutions",
              },
            ].map((card, index) => (

              <div
                key={index}
                className="rounded-3xl bg-slate-50 p-8 shadow hover:-translate-y-2 hover:shadow-xl transition"
              >

                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">

                  {card.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {card.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
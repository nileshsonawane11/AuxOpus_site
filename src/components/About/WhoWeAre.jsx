import React from "react";
import {
  FaLaptopCode,
  FaMobileScreen,
  FaCloud,
  FaBrain,
} from "react-icons/fa6";

export default function WhoWeAre() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Custom Software",
    },
    {
      icon: <FaMobileScreen />,
      title: "Mobile Apps",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
    },
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Transforming Ideas Into
              <span className="text-blue-600"> Digital Success</span>
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              AuxOpus is a technology company focused on delivering
              innovative digital products that help businesses automate,
              scale, and grow. Our expertise spans web, mobile, cloud,
              AI, and enterprise software solutions.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We don't just build applications—we build long-term
              technology partnerships that enable organizations to stay
              competitive in an evolving digital landscape.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            {services.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >

                <div className="text-5xl text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
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
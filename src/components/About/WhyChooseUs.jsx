// WhyChooseUs.jsx

import React from "react";
import {
  FaCheck,
  FaCode,
  FaCloud,
  FaMobileScreen,
  FaBrain,
  FaHeadset,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCode />,
      title: "Custom Software",
      desc: "Tailor-made applications designed around your business needs.",
    },
    {
      icon: <FaMobileScreen />,
      title: "Mobile Apps",
      desc: "High-performance Android and iOS applications.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure for modern businesses.",
    },
    {
      icon: <FaBrain />,
      title: "AI Integration",
      desc: "Intelligent automation powered by Artificial Intelligence.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated technical assistance whenever you need it.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-widest font-semibold text-blue-600">
              Why AuxOpus
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Your Trusted Technology Partner
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We combine innovation, technical expertise, and business
              understanding to build solutions that accelerate growth and
              digital transformation.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Agile Development Process",
                "Experienced Development Team",
                "Transparent Communication",
                "Modern Technologies",
                "Scalable Architecture",
                "Long-Term Support",
              ].map((item, index) => (

                <div key={index} className="flex items-center gap-4">

                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <FaCheck />
                  </div>

                  <p className="text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            {features.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-x-3 transition-all duration-500 flex gap-6"
              >

                <div className="w-20 h-20 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-4xl group-hover:bg-blue-600 group-hover:text-white transition">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
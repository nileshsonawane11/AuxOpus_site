import React from "react";
import {
  FaPenRuler,
  FaPalette,
  FaVectorSquare,
  FaObjectGroup,
} from "react-icons/fa6";

export default function UIUXDesign() {

  const services = [
    {
      icon: <FaPenRuler />,
      title: "Wireframing",
    },
    {
      icon: <FaPalette />,
      title: "Visual Design",
    },
    {
      icon: <FaVectorSquare />,
      title: "Prototyping",
    },
    {
      icon: <FaObjectGroup />,
      title: "Design Systems",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            UI / UX Design
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Beautiful interfaces combined with meaningful user experiences that
            increase engagement and improve customer satisfaction.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {services.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-10 shadow hover:shadow-xl hover:-translate-y-2 transition"
            >

              <div className="text-blue-600 text-5xl">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
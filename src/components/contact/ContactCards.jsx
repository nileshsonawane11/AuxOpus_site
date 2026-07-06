import React from "react";
import {
  FaBolt,
  FaUsers,
  FaShieldHalved,
  FaLightbulb,
} from "react-icons/fa6";

export default function ContactCards() {
  const cards = [
    {
      icon: <FaBolt />,
      title: "Fast Response",
      text: "Quick replies and efficient communication throughout your journey.",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      text: "Experienced professionals ready to guide your business.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Confidential",
      text: "Every discussion remains secure and completely confidential.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      text: "Tailored technology strategies designed for long-term growth.",
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Why Connect With AuxOpus?
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            We believe every conversation is the beginning of a successful
            partnership.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                {card.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {card.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
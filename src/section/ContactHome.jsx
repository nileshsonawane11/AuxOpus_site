import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { contactHomeContent } from "../constants/Home.js";

export default function ContactHome() {
  const { badge, heading, description, cards } = contactHomeContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24">
      {/* Background Blur */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => {
            const IconComponent = Icons[card.icon];
            return (
              <div
                key={index}
                className={`group relative flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-[32px] border ${
                  card.featured
                    ? "border-blue-500 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl"
                    : "border-gray-200 bg-white"
                } p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${card.className}`}
              >
                {/* Top Gradient Line */}
                {!card.featured && (
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                )}

                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${
                    card.featured
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  } transition`}
                >
                  {IconComponent ? <IconComponent /> : null}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-5 leading-8 ${
                      card.featured
                        ? "text-blue-100"
                        : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  to={card.link}
                  className={`mt-10 inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold transition ${
                    card.featured
                      ? "bg-white text-blue-700 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-black"
                  }`}
                >
                  {card.button}
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa6";
import * as Icons from "react-icons/fa6";
import { webHeroContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebHero() {
  const { badge, heading, description, buttons, dashboardCard, floatingCards } = webHeroContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
              {badge.text}
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              {heading.line1}
              <span className="block text-blue-600">
                {heading.highlightedText}
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              {buttons.map((button, index) => {
                const isPrimary = button.type === "primary";
                return (
                  <Link
                    key={index}
                    to={button.link}
                    className={`px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition ${
                      isPrimary
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                        : "border border-slate-300 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {button.text}
                    {isPrimary && <FaArrowRight />}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative h-[550px] hidden lg:block">
            <div className="absolute left-16 top-10 bg-white rounded-3xl shadow-2xl p-8 w-96 rotate-[-8deg]">
              <div className="flex justify-between">
                <FaLaptopCode
                  className="text-blue-600"
                  size={42}
                />

                <FaReact
                  className="text-cyan-500 animate-spin"
                  style={{ animationDuration: "10s" }}
                  size={40}
                />
              </div>

              {/* Conditional: Show image if provided, otherwise show gradient */}
              <div className="mt-8 h-44 rounded-2xl overflow-hidden">
                {dashboardCard.img ? (
                  <img
                    src={dashboardCard.img}
                    alt={dashboardCard.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full bg-gradient-to-br ${dashboardCard.gradient}`}></div>
                )}
              </div>
            </div>

            {floatingCards.map((card, index) => {
              const IconComponent = Icons[card.icon];
              return (
                <div
                  key={index}
                  className={`absolute ${card.position} bg-white rounded-2xl shadow-xl p-6`}
                >
                  {IconComponent && <IconComponent size={34} className={card.color} />}
                  <p className="mt-4 font-bold">{card.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
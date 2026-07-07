import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa6";
import { portfolioHeroContent } from "../../constants/Portfolio.js";

export default function PortfolioHero() {
  const { badge, heading, description, buttons, centerCard, floatingCards } = portfolioHeroContent;
  const BadgeIcon = Icons[badge.icon];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-52 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-3xl"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
              {BadgeIcon && <BadgeIcon />}
              {badge.text}
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">
              {heading.line1}
              <span className="text-blue-600">{heading.highlightedText}</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-8 text-slate-600 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              {buttons.map((button, index) => {
                const ButtonIcon = Icons[button.icon];
                const isPrimary = button.type === "primary";
                return (
                  <Link
                    key={index}
                    to={button.link}
                    className={`rounded-2xl ${
                      isPrimary
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border border-slate-300 hover:border-blue-600 hover:text-blue-600"
                    } px-8 py-4 font-semibold flex items-center gap-3 transition`}
                  >
                    {button.text}
                    {ButtonIcon && <ButtonIcon />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective-[1500px]">
            {/* Center Card */}
            <div className="absolute z-20 w-80 rounded-[30px] bg-white shadow-2xl p-8 rotate-y-[-15deg] rotate-x-[10deg] hover:rotate-y-0 transition duration-700">
              {/* Conditional: Show image if provided, otherwise show gradient */}
              {centerCard.img ? (
                <img
                  src={centerCard.img}
                  alt={centerCard.title}
                  className="h-48 w-full rounded-2xl object-cover"
                />
              ) : (
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${centerCard.gradient}`}></div>
              )}

              <h3 className="mt-8 text-2xl font-bold">
                {centerCard.title}
              </h3>

              <p className="mt-4 text-slate-500">
                {centerCard.description}
              </p>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
              const CardIcon = Icons[card.icon];
              return (
                <div
                  key={index}
                  className={`absolute ${card.position} w-52 rounded-3xl bg-white shadow-xl p-6 ${card.rotation} hover:-translate-y-2 transition`}
                >
                  {CardIcon && <CardIcon className={`text-5xl ${card.color}`} />}

                  <div className="mt-6 font-bold">
                    {card.text}
                  </div>
                </div>
              );
            })}

            {/* Background Ring */}
            <div className="absolute h-[430px] w-[430px] rounded-full border-[40px] border-blue-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
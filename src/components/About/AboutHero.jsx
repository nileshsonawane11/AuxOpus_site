import React from "react";
import * as Icons from "react-icons/fa6";
import { Link } from "react-router-dom";
import { aboutHeroContent } from "../../constants/AboutUs.js";
import Counter from "../Counter.jsx";

export default function AboutHero() {
  const { background, badge, heading, description, buttons, stats } = aboutHeroContent;

  return (
    <section className="relative overflow-hidden min-h-screen bg-white flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-70 bg-cover bg-left md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background.image})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">
              🚀 {badge}
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900">
              {heading.line1}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                {heading.highlightedText}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              {description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              {buttons.map((button, index) => {
                const IconComponent = Icons[button.icon];
                const isFirst = index === 0;
                
                return (
                  <Link to={button.link}
                    key={index}
                    className={`cursor-pointer group flex items-center gap-3 rounded-xl px-8 py-4 font-semibold transition ${
                      isFirst
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    {IconComponent && <IconComponent className={isFirst ? "transition group-hover:translate-x-1" : ""} />}
                    {button.text}
                  </Link>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h2 className="text-4xl font-bold text-blue-600">
                    <Counter value={stat.value} />
                  </h2>
                  <p className="mt-2 text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
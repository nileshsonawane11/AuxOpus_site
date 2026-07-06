import React from "react";
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaBolt,
} from "react-icons/fa6";

export default function AIAutomation() {

  const cards = [
    "AI Chatbots",
    "AI Agents",
    "Workflow Automation",
    "Document Processing",
    "OCR Solutions",
    "Generative AI",
    "Machine Learning",
    "Predictive Analytics",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Artificial Intelligence
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Smarter Business Through AI
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Automate repetitive tasks, improve productivity, and make
            data-driven decisions with intelligent AI-powered solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {cards.map((card, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-8 hover:shadow-xl transition hover:-translate-y-2"
            >

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">

                {index % 4 === 0 && <FaRobot />}
                {index % 4 === 1 && <FaBrain />}
                {index % 4 === 2 && <FaMicrochip />}
                {index % 4 === 3 && <FaBolt />}

              </div>

              <h3 className="mt-8 text-xl font-bold">

                {card}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
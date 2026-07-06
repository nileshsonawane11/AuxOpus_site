import React from "react";
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaComments,
  FaCheck,
} from "react-icons/fa6";

const features = [
  "AI Chatbots",
  "AI Voice Assistants",
  "Generative AI",
  "Predictive Analytics",
  "Document Processing",
  "OCR Solutions",
  "Recommendation Engines",
  "Workflow Automation",
];

export default function AISolutions() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-6">

            {[
              { icon: <FaRobot />, title: "AI Chatbots" },
              { icon: <FaBrain />, title: "Machine Learning" },
              { icon: <FaMicrochip />, title: "Computer Vision" },
              { icon: <FaComments />, title: "AI Assistants" },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-5xl text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>
              </div>

            ))}

          </div>

          <div>

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Artificial Intelligence
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              AI That Works For Your Business
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Transform business operations using Artificial Intelligence,
              automation, and intelligent decision-making systems that improve
              efficiency and reduce manual effort.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-3 items-center"
                >

                  <FaCheck className="text-blue-600" />

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
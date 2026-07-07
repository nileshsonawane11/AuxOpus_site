import React from "react";
import { FaBullseye, FaRocket } from "react-icons/fa6";
import { missionVisionContent } from "../../constants/Home.js";

// Icon mapping (kept inside component, or could be imported from a shared file)
const iconMap = {
  FaBullseye: FaBullseye,
  FaRocket: FaRocket
};

export default function MissionVision() {
  const { badge, heading, mission, vision } = missionVisionContent;

  const MissionIcon = iconMap[mission.icon];
  const VisionIcon = iconMap[vision.icon];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            {badge}
          </span>
          <h2 className="text-5xl font-bold mt-4">
            {heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {/* Mission */}
          <div className={`group rounded-[30px] p-10 shadow-xl hover:-translate-y-3 transition duration-500 ${mission.cardStyle}`}>
            <div className={`h-20 w-20 rounded-2xl flex items-center justify-center text-4xl ${
              mission.cardStyle.includes("bg-white") ? "bg-blue-100 text-blue-600" : "bg-white/20 text-white"
            }`}>
              {MissionIcon && <MissionIcon />}
            </div>
            <h3 className="mt-8 text-3xl font-bold">
              {mission.title}
            </h3>
            <p className={`mt-6 leading-8 ${
              mission.cardStyle.includes("bg-white") ? "text-gray-600" : "text-blue-100"
            }`}>
              {mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className={`group rounded-[30px] p-10 shadow-xl hover:-translate-y-3 transition duration-500 ${vision.cardStyle}`}>
            <div className={`h-20 w-20 rounded-2xl flex items-center justify-center text-4xl ${
              vision.cardStyle.includes("bg-gradient") ? "bg-white/20 text-white" : "bg-blue-100 text-blue-600"
            }`}>
              {VisionIcon && <VisionIcon />}
            </div>
            <h3 className="mt-8 text-3xl font-bold">
              {vision.title}
            </h3>
            <p className={`mt-6 leading-8 ${
              vision.cardStyle.includes("bg-gradient") ? "text-blue-100" : "text-gray-600"
            }`}>
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
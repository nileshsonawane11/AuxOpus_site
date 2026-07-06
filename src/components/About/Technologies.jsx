// Technologies.jsx

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa6";
import {
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

export default function Technologies() {
  const tech = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section className="py-24 bg-gray-950 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="uppercase tracking-widest text-blue-400 font-semibold">
          Technologies
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          Tools & Technologies We Use
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          We leverage modern frameworks, cloud platforms, and industry-leading
          technologies to build secure, scalable, and future-ready solutions.
        </p>

      </div>

      <div className="mt-20 overflow-hidden">

        <div className="flex gap-8 animate-marquee whitespace-nowrap">

          {[...tech, ...tech].map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-blue-600 transition duration-500"
            >
              <div className="text-6xl text-white flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mt-6">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
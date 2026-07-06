import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDocker,
  FaAws,
  FaFlutter,
  FaFigma,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaFlutter />, name: "Flutter" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaFigma />, name: "Figma" },
];

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies We Use
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Leveraging modern frameworks, cloud platforms, databases, and
            development tools to build secure and scalable digital solutions.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 mt-16">

          {tech.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition"
            >

              <div className="text-5xl text-blue-400 flex justify-center">

                {item.icon}

              </div>

              <h3 className="mt-6 font-semibold">

                {item.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaVuejs,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiPhp,
  SiNextdotjs,
} from "react-icons/si";

export default function WebTechnologies() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <h2 className="text-4xl font-bold">
          Technologies We Use
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-16">

          <div>

            <h3 className="font-bold text-2xl mb-6">
              Frontend
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3"><FaReact className="text-cyan-500"/>React</div>
              <div className="flex items-center gap-3"><SiNextdotjs/>Next.js</div>
              <div className="flex items-center gap-3"><FaVuejs className="text-green-600"/>Vue</div>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-6">
              Backend
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3"><FaNodeJs className="text-green-600"/>Node.js</div>
              <div className="flex items-center gap-3"><SiPhp/>PHP</div>
              <div className="flex items-center gap-3"><FaLaravel className="text-red-500"/>Laravel</div>
              <div className="flex items-center gap-3"><SiSpringboot className="text-green-600"/>Spring Boot</div>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-6">
              Database
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3"><SiMongodb className="text-green-600"/>MongoDB</div>
              <div className="flex items-center gap-3"><SiMysql className="text-blue-600"/>MySQL</div>
              <div className="flex items-center gap-3"><SiPostgresql className="text-sky-600"/>PostgreSQL</div>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-2xl mb-6">
              Cloud
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3"><FaAws className="text-orange-500"/>AWS</div>
              <div className="flex items-center gap-3"><FaDocker className="text-blue-500"/>Docker</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
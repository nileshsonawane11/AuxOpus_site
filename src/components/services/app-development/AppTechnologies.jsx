import React from "react";
import {
  FaFlutter,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa6";

import {
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function AppTechnologies() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <h2 className="text-5xl font-bold">
          Technologies We Use
        </h2>

        <div className="grid lg:grid-cols-4 gap-10 mt-16">

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Mobile
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-center">
                <FaFlutter className="text-sky-500" />
                Flutter
              </div>

              <div className="flex gap-3 items-center">
                <FaReact className="text-cyan-500" />
                React Native
              </div>

              <div className="flex gap-3 items-center">
                <SiKotlin />
                Kotlin
              </div>

              <div className="flex gap-3 items-center">
                <SiSwift />
                Swift
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Backend
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaNodeJs />
                Node.js
              </div>

              <div className="flex gap-3">
                <SiFirebase />
                Firebase
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Database
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <SiMongodb />
                MongoDB
              </div>

              <div className="flex gap-3">
                <SiMysql />
                MySQL
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Cloud
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaAws />
                AWS
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
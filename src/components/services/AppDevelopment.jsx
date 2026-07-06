import React from "react";
import {
  FaApple,
  FaAndroid,
  FaMobileScreenButton,
  FaCloud,
  FaCheck,
} from "react-icons/fa6";

export default function AppDevelopment() {

  const technologies = [
    "Android Apps",
    "iOS Apps",
    "Cross Platform",
    "Flutter",
    "React Native",
    "Firebase",
    "REST APIs",
    "Cloud Backend",
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <FaAndroid className="text-5xl text-green-600" />

              <h3 className="mt-8 text-2xl font-bold">
                Android
              </h3>

            </div>

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <FaApple className="text-5xl text-slate-900" />

              <h3 className="mt-8 text-2xl font-bold">
                iOS
              </h3>

            </div>

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <FaMobileScreenButton className="text-5xl text-blue-600" />

              <h3 className="mt-8 text-2xl font-bold">
                Cross Platform
              </h3>

            </div>

            <div className="rounded-3xl bg-white shadow-lg p-8">

              <FaCloud className="text-5xl text-cyan-600" />

              <h3 className="mt-8 text-2xl font-bold">
                Cloud Backend
              </h3>

            </div>

          </div>

          <div className="order-1 lg:order-2">

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Mobile Development
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Mobile Experiences
              That Users Love
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We build intuitive, high-performance mobile applications that
              deliver seamless user experiences across Android and iOS devices.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {technologies.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
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
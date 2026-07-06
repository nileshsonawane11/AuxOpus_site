import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaApple,
  FaGooglePlay,
  FaMobileScreen,
  FaTabletScreenButton,
  FaCode,
} from "react-icons/fa6";

export default function AppHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-cyan-50">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
              App Development
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              Mobile Apps
              <span className="block text-violet-600">
                Built For Growth
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Develop beautiful Android, iOS and cross-platform mobile
              applications that delight users, increase engagement and
              accelerate business growth.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold"
              >
                Build My App
                <FaArrowRight />
              </Link>

              <Link
                to="/portfolio"
                className="border border-slate-300 px-8 py-4 rounded-2xl hover:border-violet-600 hover:text-violet-600"
              >
                View Apps
              </Link>

            </div>

          </div>

          <div className="relative hidden lg:block h-[580px]">

            <div className="absolute left-20 top-5 h-[500px] w-60 rounded-[45px] bg-white shadow-2xl border p-4 rotate-[-10deg]">

              <div className="rounded-[35px] h-full bg-gradient-to-br from-violet-500 to-cyan-400"></div>

            </div>

            <div className="absolute right-16 top-20 h-[460px] w-56 rounded-[45px] bg-white shadow-2xl border p-4 rotate-[12deg]">

              <div className="rounded-[35px] h-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>

            </div>

            <div className="absolute left-0 top-10 bg-white p-5 rounded-2xl shadow-xl">
              <FaApple className="text-3xl text-slate-700" />
            </div>

            <div className="absolute right-0 bottom-16 bg-white p-5 rounded-2xl shadow-xl">
              <FaGooglePlay className="text-3xl text-green-600" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
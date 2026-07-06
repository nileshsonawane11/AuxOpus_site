import React from "react";
import { FaBullseye, FaRocket } from "react-icons/fa6";

export default function MissionVision() {

    return (

        <section className="py-10 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Purpose
                    </span>

                    <h2 className="text-5xl font-bold mt-4">
                        Mission & Vision
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-20">

                    {/* Mission */}

                    <div className="group rounded-[30px] bg-white p-10 shadow-xl hover:-translate-y-3 transition duration-500">

                        <div className="h-20 w-20 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl text-blue-600">

                            <FaBullseye />

                        </div>

                        <h3 className="mt-8 text-3xl font-bold">
                            Our Mission
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">

                            To empower businesses through innovative,
                            scalable, and reliable technology solutions
                            while building long-lasting partnerships based
                            on trust, quality, and continuous innovation.

                        </p>

                    </div>

                    {/* Vision */}

                    <div className="group rounded-[30px] bg-gradient-to-br from-blue-600 to-indigo-700 p-10 shadow-xl hover:-translate-y-3 transition duration-500 text-white">

                        <div className="h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center text-4xl">

                            <FaRocket />

                        </div>

                        <h3 className="mt-8 text-3xl font-bold">

                            Our Vision

                        </h3>

                        <p className="mt-6 leading-8 text-blue-100">

                            To become a globally recognized technology
                            partner delivering intelligent digital
                            solutions that inspire innovation, create
                            sustainable growth, and transform businesses
                            worldwide.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
}
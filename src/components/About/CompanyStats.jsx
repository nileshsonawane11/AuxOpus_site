import React from "react";

export default function CompanyStats() {

    const stats = [
        { value: "100+", label: "Projects Delivered" },
        { value: "25+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
        { value: "15+", label: "Technologies" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support" },
    ];

    return (

        <section className="bg-black py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="text-blue-400 uppercase tracking-widest">
                        Our Journey
                    </span>

                    <h2 className="text-5xl font-bold text-white mt-5">
                        Numbers That Speak
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="text-center border border-white/10 rounded-3xl p-8 hover:bg-blue-600 transition duration-500"
                        >

                            <h3 className="text-5xl font-bold text-white">
                                {item.value}
                            </h3>

                            <p className="text-gray-400 mt-4">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}
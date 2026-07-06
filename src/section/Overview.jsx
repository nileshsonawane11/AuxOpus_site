import React from "react";

export default function Overview() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-10">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-2 md:px-10">

        {/* Overview */}

        <div className="flex flex-col gap-8">

          {/* Heading */}

          <div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Overview
            </h2>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

          </div>

          {/* Content Card */}

          <div className="rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12">

            <div className="space-y-8 text-gray-600 leading-9 md:text-lg">

              <p>
                <span className="font-semibold text-gray-900">
                  AuxOpus
                </span>{" "}
                is a forward-thinking technology and business solutions
                company committed to helping organizations transform ideas
                into meaningful outcomes. We collaborate with businesses,
                startups, educational institutions, and enterprises to
                address complex challenges, improve operational efficiency,
                and unlock new opportunities for sustainable growth. By
                combining strategic expertise, innovation, and a
                collaborative approach, we deliver practical, scalable, and
                future-ready solutions tailored to the unique needs of every
                client.
              </p>

              <p>
                Our commitment extends beyond delivering services. We
                believe in building long-term partnerships founded on trust,
                transparency, and continuous improvement. Whether
                supporting digital transformation, providing technology
                consulting, delivering professional training, or enabling
                business innovation, every engagement is driven by a passion
                for excellence and a dedication to creating lasting value.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
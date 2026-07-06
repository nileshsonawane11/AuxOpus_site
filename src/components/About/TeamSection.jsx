// TeamSection.jsx

import React from "react";
import Img from "../../assets/AuxOpus.png";

export default function TeamSection() {

  const team = [
    {
      name: "Nilesh Sonawane",
      role: "Chief Operating Officer",
      image: Img,
    },
    {
      name: "John Doe",
      role: "Chief Technology Officer",
      image: Img,
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      image: Img,
    },
    {
      name: "Alex Johnson",
      role: "UI/UX Designer",
      image: Img,
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Team
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Meet The Experts
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate professionals committed to delivering innovation,
            excellence, and exceptional customer experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white"
            >

              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
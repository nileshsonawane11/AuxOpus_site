import React from "react";
import {
  FaCode,
  FaMobileScreenButton,
  FaRobot,
  FaPalette,
  FaBullhorn,
  FaScrewdriverWrench,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaCode />,
    title: "Web Design & Development",
    description:
      "Professional websites, business portals, ERP systems, CRM platforms, and custom web applications.",
  },
  {
    icon: <FaMobileScreenButton />,
    title: "App Development",
    description:
      "Native and cross-platform Android & iOS applications with scalable backend systems.",
  },
  {
    icon: <FaRobot />,
    title: "AI & Automation",
    description:
      "AI chatbots, workflow automation, intelligent assistants, OCR, and business automation.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "User-focused interfaces, interactive prototypes, branding, and modern product experiences.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, paid advertising, content strategy, and lead generation.",
  },
  {
    icon: <FaScrewdriverWrench />,
    title: "Maintenance & Support",
    description:
      "Application maintenance, cloud monitoring, upgrades, security patches, and optimization.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Corporate Training",
    description:
      "Professional technical training, workshops, internships, and employee upskilling.",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Expertise
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Explore the comprehensive technology services that empower
            businesses to innovate, scale, and succeed.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >

              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600 group-hover:gap-5 transition-all">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
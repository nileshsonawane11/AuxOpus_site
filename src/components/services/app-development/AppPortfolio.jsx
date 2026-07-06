import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolio = [
  {
    image: "https://placehold.co/700x900",
    title: "Healthcare App",
    description:
      "Doctor appointment booking, prescriptions, online consultation and patient management.",
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
  {
    image: "https://placehold.co/700x900",
    title: "Food Delivery App",
    description:
      "Complete delivery ecosystem with customer, delivery partner and admin applications.",
    technologies: ["React Native", "Laravel", "MySQL"],
  },
  {
    image: "https://placehold.co/700x900",
    title: "Education Platform",
    description:
      "Online learning platform with video lectures, quizzes and progress tracking.",
    technologies: ["Flutter", "Spring Boot", "MongoDB"],
  },
  {
    image: "https://placehold.co/700x900",
    title: "Finance Application",
    description:
      "Secure fintech application with analytics and digital payment integration.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
  },
];

export default function AppPortfolio() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex justify-between items-end flex-wrap gap-5">

          <div>

            <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
              Portfolio
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Mobile Applications We've Built
            </h2>

          </div>

          <Link
            to="/portfolio"
            className="flex items-center gap-3 text-violet-600 font-semibold"
          >
            View Portfolio
            <FaArrowRight />
          </Link>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          className="mt-16 pb-12"
        >

          {portfolio.map((project, index) => (

            <SwiperSlide key={index}>

              <div className="overflow-hidden rounded-3xl bg-white border shadow-lg hover:-translate-y-2 transition">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-96 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}
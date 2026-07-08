import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { appPortfolioContent } from "../../../constants/Services/AppDevelopment.js";

export default function AppPortfolio() {
  const { badge, heading, viewAllButton, projects, swiper } = appPortfolioContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end flex-wrap gap-5">
          <div>
            <span className="uppercase tracking-[0.25em] text-violet-600 font-semibold">
              {badge}
            </span>

            <h2 className="text-5xl font-bold mt-4">
              {heading}
            </h2>
          </div>

          <Link
            to={viewAllButton.link}
            className="flex items-center gap-3 text-violet-600 font-semibold"
          >
            {viewAllButton.text}
            <FaArrowRight />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: swiper.delay }}
          loop={swiper.loop}
          spaceBetween={swiper.spaceBetween}
          breakpoints={swiper.breakpoints}
          className="mt-16 pb-12"
        >
          {projects.map((project, index) => (
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
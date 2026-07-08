import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { webPortfolioContent } from "../../../constants/Services/WebDevelopment.js";

export default function WebPortfolio() {
  const { badge, heading, viewAllButton, projects, swiper } = webPortfolioContent;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end flex-wrap gap-5">
          <div>
            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              {badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              {heading}
            </h2>
          </div>

          <Link
            to={viewAllButton.link}
            className="flex items-center gap-3 font-semibold text-blue-600"
          >
            {viewAllButton.text}
            <FaArrowRight />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: swiper.delay,
          }}
          loop={swiper.loop}
          spaceBetween={swiper.spaceBetween}
          breakpoints={swiper.breakpoints}
          className="mt-16 pb-14"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg border hover:-translate-y-2 transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-blue-600 font-medium">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {item.name}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="flex gap-3 flex-wrap mt-6">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-100 text-sm"
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
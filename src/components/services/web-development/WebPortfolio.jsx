import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaReact,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolio = [
  {
    name: "Corporate Website",
    category: "Business Website",
    image: "https://placehold.co/800x500",
    desc: "Modern corporate website built with responsive UI and SEO optimization.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    name: "ERP Management System",
    category: "Enterprise Software",
    image: "https://placehold.co/800x500",
    desc: "Complete ERP platform for inventory, HR, finance and reporting.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "E-Commerce Platform",
    category: "Online Store",
    image: "https://placehold.co/800x500",
    desc: "High-performance shopping platform with secure payments.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    name: "CRM Dashboard",
    category: "Business Automation",
    image: "https://placehold.co/800x500",
    desc: "Lead management and customer relationship platform.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export default function WebPortfolio() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex justify-between items-end flex-wrap gap-5">

          <div>

            <span className="uppercase tracking-widest text-blue-600 font-semibold">
              Portfolio
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Recent Web Projects
            </h2>

          </div>

          <Link
            to="/portfolio"
            className="flex items-center gap-3 font-semibold text-blue-600"
          >
            View All
            <FaArrowRight />
          </Link>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
          }}
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
          className="mt-16 pb-14"
        >

          {portfolio.map((item, index) => (

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
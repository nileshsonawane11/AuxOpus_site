import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonialsContent } from "../constants/Home.js";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const { badge, heading, description, testimonials } = testimonialsContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24">
      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {badge}
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="testimonialSwiperh pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-full overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl">
                {/* Top Hover Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

                {/* Quote */}
                <FaQuoteLeft className="text-4xl text-blue-100" />

                {/* Review */}
                <p className="mt-6 leading-8 text-gray-600">
                  {item.review}
                </p>

                {/* Rating */}
                <div className="mt-8 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border-2 border-blue-100 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.designation}
                    </p>
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
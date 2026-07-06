import React from "react";
import Img from "../assets/AuxOpus.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Nilesh Sonawane",
    designation: "Managing Director - AuxOpus",
    image: Img,
    review:
      "Helping organizations maximize their impact with efficient digital tools, collaboration platforms, and streamlined operations.",
  },
  {
    name: "Rahul Patil",
    designation: "CEO - TechNova",
    image: Img,
    review:
      "AuxOpus delivered exactly what we needed. Their team was professional, responsive, and committed throughout the project.",
  },
  {
    name: "Priya Sharma",
    designation: "Founder - EduSpark",
    image: Img,
    review:
      "Excellent communication and outstanding technical expertise. They transformed our ideas into a scalable solution.",
  },
  {
    name: "Amit Kulkarni",
    designation: "Director - FinEdge",
    image: Img,
    review:
      "The quality of work exceeded our expectations. We highly recommend AuxOpus for reliable software development services.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-5 md:px-10 w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Testimonials
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-14 w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="bg-gray-50 w-full rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-contain"
                  />

                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-7">
                  "{testimonial.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
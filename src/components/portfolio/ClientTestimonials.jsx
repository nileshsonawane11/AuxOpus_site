import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    name: "Rahul Patil",
    company: "TechNova",
    review:
      "AuxOpus delivered a high-quality solution with exceptional communication throughout the project.",
  },
  {
    name: "Priya Sharma",
    company: "EduSpark",
    review:
      "Professional team, innovative ideas, and excellent execution. Highly recommended.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            What Our Clients Say
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-10"
            >
              <FaQuoteLeft className="text-4xl text-blue-600" />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.company}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
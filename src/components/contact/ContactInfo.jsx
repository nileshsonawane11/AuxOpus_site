import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-4xl font-bold">
          Contact Information
        </h2>

        <p className="mt-4 text-slate-600 leading-8">
          Reach out through any of the following channels. We're always happy
          to discuss your ideas.
        </p>

      </div>

      {[
        {
          icon: <FaLocationDot />,
          title: "Office",
          value:
            "Office No. XX, Your Business Address, Maharashtra, India",
        },
        {
          icon: <FaPhone />,
          title: "Phone",
          value: "+91 XXXXX XXXXX",
        },
        {
          icon: <FaEnvelope />,
          title: "Email",
          value: "info@auxopus.com",
        },
        {
          icon: <FaClock />,
          title: "Working Hours",
          value: "Monday - Saturday | 9:00 AM - 7:00 PM",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex gap-5 rounded-3xl bg-white p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl flex-shrink-0">
            {item.icon}
          </div>

          <div>

            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600 leading-7">
              {item.value}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}
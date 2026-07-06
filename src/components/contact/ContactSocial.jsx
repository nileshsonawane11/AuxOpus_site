import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactSocial() {
  const social = [
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      color: "hover:bg-blue-700",
    },
    {
      icon: <FaXTwitter />,
      name: "X",
      color: "hover:bg-black",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Stay Connected
          </h2>

          <p className="mt-5 text-slate-600 max-w-xl mx-auto">
            Follow AuxOpus for company updates, technology insights, and
            industry trends.
          </p>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          {social.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`group flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white text-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:text-white ${item.color}`}
            >
              {item.icon}
            </a>
          ))}

        </div>

      </div>

    </section>
  );
}
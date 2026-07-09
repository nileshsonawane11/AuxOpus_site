// CTASection.jsx

import React from "react";
import {Link} from "react-router-dom";
import * as Icons from "react-icons/fa6";
import { ctaContent } from "../../constants/AboutUs.js";

export default function CTASection() {
  const { badge, heading, description, contact, button } = ctaContent;
  const ButtonIcon = Icons[button.icon];

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900">
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl p-14">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="uppercase tracking-widest text-cyan-300 font-semibold">
                {badge}
              </span>

              <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
                {heading.line1}
                <br />
                {heading.line2}
              </h2>

              <p className="text-blue-100 text-lg leading-8 mt-8 max-w-xl">
                {description}
              </p>
            </div>

            <div className="space-y-6">
              {contact.map((item, index) => {
                const IconComponent = Icons[item.icon];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 flex items-center gap-5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                      {IconComponent ? <IconComponent /> : null}
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        {item.label}
                      </p>

                      <h3 className="font-bold text-xl">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                );
              })}

              <Link to="/Contact" className="w-full cursor-pointer py-5 rounded-2xl bg-white text-black font-semibold text-lg flex items-center justify-center gap-3 hover:scale-95 transition">
                {button.text}
                {ButtonIcon ? <ButtonIcon /> : null}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
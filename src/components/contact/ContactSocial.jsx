import React from "react";
import * as Icons from "react-icons/fa6";
import { contactSocialContent } from "../../constants/Contact.js";

export default function ContactSocial() {
  const { heading, description, social } = contactSocialContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-5 text-slate-600 max-w-xl mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {social.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={`group flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white text-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:text-white ${item.color}`}
              >
                {IconComponent ? <IconComponent /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
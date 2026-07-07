import React from "react";
import { contactMapContent } from "../../constants/Contact.js";

export default function ContactMap() {
  const { heading, description, map } = contactMapContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-8">
            {description}
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] shadow-xl border border-slate-200">
          <iframe
            title={map.title}
            src={map.src}
            className={`w-full ${map.height}`}
            loading={map.loading}
            allowFullScreen={map.allowFullScreen}
          />
        </div>
      </div>
    </section>
  );
}
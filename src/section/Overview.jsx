import React from "react";
import { overviewContent } from "../constants/Home.js";

export default function Overview() {
  const { heading, paragraphs } = overviewContent;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-10">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-2 md:px-10">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              {heading}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          </div>

          {/* Content Card */}
          <div className="rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12">
            <div className="space-y-8 text-gray-600 leading-9 md:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
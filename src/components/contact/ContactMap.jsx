import React from "react";

export default function ContactMap() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="mb-12 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Visit Our Office
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-8">
            We welcome clients, partners, and innovators to connect with us.
            Schedule a visit and let's discuss your next big idea.
          </p>

        </div>

        <div className="overflow-hidden rounded-[32px] shadow-xl border border-slate-200">

          <iframe
            title="AuxOpus Location"
            src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
            className="w-full h-[550px]"
            loading="lazy"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}
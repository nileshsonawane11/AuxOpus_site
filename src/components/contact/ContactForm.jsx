import React from "react";

export default function ContactForm() {
  return (
    <div className="rounded-[32px] bg-white shadow-xl p-8 md:p-10">

      <h2 className="text-4xl font-bold">
        Send Us a Message
      </h2>

      <p className="mt-4 text-slate-600">
        Fill in the form below and our team will get back to you shortly.
      </p>

      <form className="mt-10 space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Phone Number"
            className="rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
          />

        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
        />

        <textarea
          rows={6}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-slate-200 p-4 outline-none resize-none focus:border-blue-600"
        />

        <button
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-slate-900 transition-all duration-300"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}
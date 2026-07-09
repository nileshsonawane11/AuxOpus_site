import React, { useState } from "react";

import { contactFormContent } from "../../constants/Contact";

export default function ContactForm() {
  const { heading, description, fields, button } = contactFormContent;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again.",
      });
    }

    setLoading(false);
  };

  // Create rows (2 fields per row except last ones)
  const fieldRows = [
    fields.slice(0, 2),
    fields.slice(2, 4),
    fields.slice(4, 5),
    fields.slice(5, 6),
  ];

  return (
    <div className="rounded-[32px] bg-white shadow-xl p-8 md:p-10">
      <h2 className="text-4xl font-bold">
        {heading}
      </h2>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      {status.message && (
        <div
          className={`mt-6 rounded-xl px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <form
        className="mt-10 space-y-6"
        onSubmit={handleSubmit}
      >
        {fieldRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-6 ${
              row.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {row.map((field) =>
              field.type === "textarea" ? (
                <textarea
                  key={field.name}
                  name={field.name}
                  rows={field.rows || 6}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none resize-none transition focus:border-blue-600"
                />
              ) : (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-blue-600"
                />
              )
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : button.text}
        </button>
      </form>
    </div>
  );
}
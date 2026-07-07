import React from "react";
import { contactFormContent } from "../../constants/Contact.js";

export default function ContactForm() {
  const { heading, description, fields, button } = contactFormContent;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  // Group fields into rows
  const fieldRows = [
    fields.slice(0, 2),  // First row: Name, Email
    fields.slice(2, 4),  // Second row: Phone, Company
    fields.slice(4, 5),  // Third row: Subject
    fields.slice(5, 6),  // Fourth row: Message
  ];

  return (
    <div className="rounded-[32px] bg-white shadow-xl p-8 md:p-10">
      <h2 className="text-4xl font-bold">
        {heading}
      </h2>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        {fieldRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${row.length > 1 ? "md:grid-cols-2" : ""} gap-6`}
          >
            {row.map((field, fieldIndex) =>
              field.type === "textarea" ? (
                <textarea
                  key={fieldIndex}
                  rows={field.rows || 6}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none resize-none focus:border-blue-600"
                />
              ) : (
                <input
                  key={fieldIndex}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
                />
              )
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-slate-900 transition-all duration-300"
        >
          {button.text}
        </button>
      </form>
    </div>
  );
}
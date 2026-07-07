import React from "react";
import * as Icons from "react-icons/fa6";
import { contactInfoContent } from "../../constants/Contact.js";

export default function ContactInfo() {
  const { heading, description, contactMethods } = contactInfoContent;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-4xl font-bold">
          {heading}
        </h2>

        <p className="mt-4 text-slate-600 leading-8">
          {description}
        </p>
      </div>

      {contactMethods.map((item, index) => {
        const IconComponent = Icons[item.icon];
        return (
          <div
            key={index}
            className="flex gap-5 rounded-3xl bg-white p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl flex-shrink-0">
              {IconComponent ? <IconComponent /> : null}
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
        );
      })}
    </div>
  );
}
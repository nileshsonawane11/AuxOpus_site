import React,{useState} from "react";
import { FaChevronDown } from "react-icons/fa6";
import { contactFAQContent } from "../../constants/Contact.js";

export default function ContactFAQ() {
  const [active, setActive] = useState(0);
  const { heading, description, faqs } = contactFAQContent;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-5 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl ${active === index ? 'border border-blue-600 bg-blue-50' : 'shadow-md'}`}
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
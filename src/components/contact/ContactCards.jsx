import React from "react";
import * as Icons from "react-icons/fa6";
import { contactCardsContent } from "../../constants/Contact.js";

export default function ContactCards() {
  const { heading, description, cards } = contactCardsContent;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            {heading}
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const IconComponent = Icons[card.icon];
            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
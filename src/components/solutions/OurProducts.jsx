import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import { ourProductsContent } from "../../constants/OurSolutions.js";

// Combined icon library lookup
const iconLibraries = {
  fa: FaIcons,
  fa6: Fa6Icons,
};

export default function OurProducts() {
  const { badge, heading, description, products } = ourProductsContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
            {badge}
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {products.map((product, index) => {
            const IconLibrary = iconLibraries[product.library];
            const IconComponent = IconLibrary ? IconLibrary[product.icon] : null;
            
            return (
              <div
                key={index}
                className="group rounded-3xl border bg-white p-8 hover:border-blue-600 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-3xl">
                  {IconComponent ? <IconComponent /> : null}
                </div>

                <div className="mt-8">
                  <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                    {product.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {product.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {product.description}
                  </p>

                  <button className="flex items-center gap-2 mt-8 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
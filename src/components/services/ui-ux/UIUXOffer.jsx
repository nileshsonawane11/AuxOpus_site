// src/components/services/ui-ux/UIUXOffer.jsx

import {
  Palette,
  Layout,
  Smartphone,
  MonitorSmartphone,
  PenTool,
  Workflow,
  SearchCheck,
  MousePointerClick,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Modern, visually engaging, and brand-consistent interfaces designed for web and mobile applications.",
  },
  {
    icon: Layout,
    title: "UX Research",
    description:
      "User interviews, competitor analysis, journey mapping, and usability research to build better products.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Native Android and iOS interfaces focused on usability, accessibility, and delightful user experiences.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    description:
      "Adaptive interfaces optimized for desktops, tablets, laptops, and smartphones.",
  },
  {
    icon: PenTool,
    title: "Wireframing & Prototyping",
    description:
      "Low and high-fidelity wireframes with interactive prototypes before development begins.",
  },
  {
    icon: Workflow,
    title: "Design Systems",
    description:
      "Scalable component libraries, design tokens, typography, colors, icons, and reusable UI guidelines.",
  },
  {
    icon: SearchCheck,
    title: "Usability Testing",
    description:
      "Validate interfaces with real users to identify friction points and improve product usability.",
  },
  {
    icon: MousePointerClick,
    title: "UX Optimization",
    description:
      "Improve engagement, conversions, and retention by optimizing existing digital experiences.",
  },
];

export default function UIUXOffer() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Complete UI/UX Design Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From user research and wireframes to polished interfaces and design
            systems, we create digital experiences that users enjoy and
            businesses trust.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    size={26}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                  Learn More
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// src/components/services/ai-automation/AIIndustries.jsx

import {
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  Truck,
  Users,
  Building2,
  Hotel,
  Scale,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Improve patient care with AI-powered diagnostics, appointment automation, medical document analysis, and virtual healthcare assistants.",
    useCases: [
      "Medical Report Analysis",
      "Patient Support Bots",
      "Appointment Scheduling",
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description:
      "Automate financial operations using fraud detection, intelligent document processing, compliance monitoring, and predictive analytics.",
    useCases: [
      "Fraud Detection",
      "Loan Processing",
      "Risk Analysis",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Increase production efficiency with predictive maintenance, computer vision quality inspection, and AI-driven production planning.",
    useCases: [
      "Quality Inspection",
      "Predictive Maintenance",
      "Inventory Optimization",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Deliver personalized shopping experiences with recommendation engines, customer support automation, and demand forecasting.",
    useCases: [
      "Product Recommendation",
      "Customer Chatbots",
      "Sales Forecasting",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Create intelligent learning platforms with AI tutors, assessment automation, student analytics, and personalized learning.",
    useCases: [
      "AI Tutors",
      "Learning Analytics",
      "Smart Assessments",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Optimize logistics operations using route planning, warehouse automation, shipment tracking, and demand prediction.",
    useCases: [
      "Route Optimization",
      "Warehouse AI",
      "Demand Prediction",
    ],
  },
  {
    icon: Users,
    title: "Human Resources",
    description:
      "Simplify recruitment and employee management with resume screening, onboarding automation, HR assistants, and workforce analytics.",
    useCases: [
      "Resume Screening",
      "HR Chatbots",
      "Employee Analytics",
    ],
  },
  {
    icon: Scale,
    title: "Legal Services",
    description:
      "Automate legal workflows using contract analysis, compliance verification, legal research, and document summarization.",
    useCases: [
      "Contract Analysis",
      "Legal Research",
      "Compliance Checks",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Enhance customer engagement through AI-powered property recommendations, document automation, and market intelligence.",
    useCases: [
      "Property Matching",
      "Virtual Assistants",
      "Market Analytics",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Deliver exceptional guest experiences with booking automation, multilingual support, AI concierge, and review analysis.",
    useCases: [
      "Booking Automation",
      "Guest Assistance",
      "Review Analysis",
    ],
  },
  {
    icon: Trophy,
    title: "Sports Technology",
    description:
      "Improve athlete performance and fan engagement through AI-driven analytics, match insights, and tournament management.",
    useCases: [
      "Performance Analytics",
      "Match Insights",
      "Fan Engagement",
    ],
  },
];

export default function AIIndustries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Industries
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            AI Solutions Across Every Industry
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We develop industry-specific AI solutions that solve real business
            challenges, improve operational efficiency, and unlock new growth
            opportunities.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    size={28}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.useCases.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                  Explore Solutions
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
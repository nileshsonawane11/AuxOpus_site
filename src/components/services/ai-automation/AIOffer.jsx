// src/components/services/ai-automation/AIOffer.jsx

import {
  Bot,
  Workflow,
  FileText,
  BrainCircuit,
  TrendingUp,
  ScanSearch,
  MessageSquare,
  Database,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Context-aware chatbots for websites, mobile apps, WhatsApp, Slack, and Microsoft Teams with multilingual support.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate approvals, notifications, HR processes, finance operations, CRM updates, and repetitive business tasks.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description:
      "Extract, classify, validate, and process invoices, contracts, purchase orders, reports, and PDFs using AI.",
  },
  {
    icon: BrainCircuit,
    title: "AI Agents",
    description:
      "Autonomous AI agents capable of reasoning, retrieving data, executing actions, and assisting employees.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecast sales, demand, customer behavior, inventory, and business trends using machine learning.",
  },
  {
    icon: ScanSearch,
    title: "Computer Vision",
    description:
      "Image recognition, defect detection, attendance systems, OCR, object detection, and quality inspection.",
  },
  {
    icon: MessageSquare,
    title: "Enterprise Knowledge AI",
    description:
      "Build secure AI assistants trained on company documents, SOPs, manuals, and internal knowledge bases.",
  },
  {
    icon: Database,
    title: "Custom AI Solutions",
    description:
      "Design and develop tailored AI applications that integrate seamlessly with your existing business systems.",
  },
];

export default function AIOffer() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            AI Solutions Designed for Modern Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From conversational AI and intelligent automation to enterprise
            knowledge assistants and predictive analytics, we develop scalable
            AI solutions that transform the way organizations operate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    className="text-blue-600 group-hover:text-white"
                    size={26}
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
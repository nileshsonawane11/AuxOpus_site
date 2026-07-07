// src/components/services/ai-automation/AIPortfolio.jsx

import {
  Bot,
  FileSearch,
  BrainCircuit,
  TrendingUp,
  Factory,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Enterprise AI Customer Support",
    industry: "SaaS Platform",
    description:
      "Built an AI-powered multilingual support assistant capable of resolving customer queries, creating tickets, and integrating directly with CRM systems.",
    technologies: [
      "OpenAI",
      "LangChain",
      "Node.js",
      "MongoDB",
    ],
    outcome: "65% Faster Response Time",
  },
  {
    icon: FileSearch,
    title: "Smart Invoice Processing",
    industry: "Finance",
    description:
      "Developed an OCR-powered document intelligence platform that extracts invoice data, validates information, and syncs with ERP software.",
    technologies: [
      "Python",
      "FastAPI",
      "OCR",
      "PostgreSQL",
    ],
    outcome: "99% Extraction Accuracy",
  },
  {
    icon: BrainCircuit,
    title: "Enterprise Knowledge Assistant",
    industry: "IT Services",
    description:
      "Created a Retrieval-Augmented Generation (RAG) assistant trained on internal company documents, SOPs, and knowledge bases.",
    technologies: [
      "GPT-4o",
      "Pinecone",
      "LangChain",
      "React",
    ],
    outcome: "80% Faster Knowledge Retrieval",
  },
  {
    icon: TrendingUp,
    title: "Sales Prediction Dashboard",
    industry: "Retail",
    description:
      "Implemented machine learning models to forecast sales, optimize inventory planning, and improve demand prediction.",
    technologies: [
      "TensorFlow",
      "Python",
      "Power BI",
      "PostgreSQL",
    ],
    outcome: "30% Better Forecast Accuracy",
  },
  {
    icon: Factory,
    title: "Manufacturing Defect Detection",
    industry: "Manufacturing",
    description:
      "Built a computer vision system to identify product defects in real-time, reducing manual inspection and improving production quality.",
    technologies: [
      "YOLO",
      "OpenCV",
      "Python",
      "Docker",
    ],
    outcome: "92% Detection Accuracy",
  },
  {
    icon: MessageSquare,
    title: "HR Recruitment Assistant",
    industry: "Human Resources",
    description:
      "Designed an AI assistant that screens resumes, ranks candidates, schedules interviews, and answers recruitment-related queries.",
    technologies: [
      "OpenAI",
      "FastAPI",
      "React",
      "MongoDB",
    ],
    outcome: "75% Faster Hiring Process",
  },
];

export default function AIPortfolio() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            AI Solutions We've Delivered
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore a selection of enterprise AI projects designed to automate
            operations, improve decision-making, and accelerate digital
            transformation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                    <Icon
                      size={28}
                      className="text-blue-600 group-hover:text-white"
                    />
                  </div>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                    {project.industry}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <p className="text-sm text-slate-500">Business Outcome</p>
                    <h4 className="mt-1 font-semibold text-slate-900">
                      {project.outcome}
                    </h4>
                  </div>

                  <button className="flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3">
                    View Details
                    <ArrowUpRight size={18} />
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
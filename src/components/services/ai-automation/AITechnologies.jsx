// src/components/services/ai-automation/AITechnologies.jsx

import {
  BrainCircuit,
  Cpu,
  Database,
  Cloud,
  Server,
  Boxes,
} from "lucide-react";

const categories = [
  {
    icon: BrainCircuit,
    title: "Large Language Models",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      "OpenAI GPT-4o",
      "Google Gemini",
      "Claude",
      "Llama",
      "Mistral",
      "DeepSeek",
    ],
  },
  {
    icon: Boxes,
    title: "AI Frameworks",
    color: "from-violet-500 to-purple-500",
    technologies: [
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "Haystack",
      "Semantic Kernel",
    ],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    color: "from-orange-500 to-red-500",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "OpenCV",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-emerald-500 to-green-500",
    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-pink-500 to-rose-500",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "ChromaDB",
      "Weaviate",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-indigo-500 to-sky-500",
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Google Cloud",
      "Vercel",
    ],
  },
];

export default function AITechnologies() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Technologies
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Powered by Modern AI Technologies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine state-of-the-art AI models, enterprise frameworks,
            scalable cloud infrastructure, and modern development technologies
            to build intelligent business solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-950 to-black p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">Enterprise AI Stack</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Every AI solution is designed with scalability, security, and
                seamless integration in mind, ensuring long-term business value.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white">
                  Enterprise Security
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Secure APIs, encrypted data, authentication, and role-based
                  access control.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white">
                  API Integrations
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Connect AI with ERP, CRM, HRMS, payment gateways, and existing
                  business applications.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white">
                  Cloud Deployment
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Deploy on AWS, Azure, GCP, private cloud, or on-premise
                  infrastructure.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white">
                  Continuous Improvement
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Monitor, optimize, retrain, and enhance AI models as your
                  business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
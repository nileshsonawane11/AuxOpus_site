import {companyStats} from "../Stats.js"

export const aiHeroContent = {
    badge: {
        text: "Intelligent AI Solutions",
    },
    heading: {
        line1: "Transform Your",
        highlightedText: "Business With AI",
    },
    description:
        "Build intelligent applications, automate repetitive workflows, deploy enterprise AI assistants, and unlock data-driven decision-making using modern AI technologies.",
    buttons: [
        {
        text: "Get Started",
        link: "/Contact",
        type: "primary",
        },
        {
        text: "Watch Demo",
        link: "/Portfolio",
        type: "secondary",
        },
    ],
    stats: [
        {
        value: companyStats.aiAutomation[0].value,
        label: companyStats.aiAutomation[0].label,
        },
        {
        value: companyStats.aiAutomation[1].value,
        label: companyStats.aiAutomation[1].label,
        },
        {
        value: companyStats.aiAutomation[2].value,
        label: companyStats.aiAutomation[2].label,
        },
    ],
    dashboard: {
        subtitle: "Enterprise AI Dashboard",
        title: "Automation Center",
        modules: [
        {
            title: "AI Customer Assistant",
            status: "Online",
        },
        {
            title: "Workflow Automation",
            status: "Running",
        },
        {
            title: "Knowledge Retrieval",
            status: "Synced",
        },
        ],
        performance: {
        label: "Automation Performance",
        value: "96%",
        change: "+18%",
        progress: 96,
        },
    },
};

export const aiOverviewContent = {
    badge: "Overview",
    heading: {
        line1: "Empower Your Business with",
        highlightedText: "AI & Intelligent Automation",
    },
    description:
        "Artificial Intelligence is transforming how modern businesses operate. From intelligent customer interactions to automated workflows and predictive analytics, AI enables organizations to increase efficiency, reduce costs, and deliver exceptional customer experiences.",
    highlights: [
        {
        title: "Intelligent Decision Making",
        description:
            "Leverage AI models to analyze business data, identify patterns, and generate actionable insights for faster and more informed decisions.",
        },
        {
        title: "Workflow Automation",
        description:
            "Automate repetitive processes across departments including HR, Finance, Sales, Customer Support, and Operations.",
        },
        {
        title: "AI Assistants",
        description:
            "Deploy intelligent assistants capable of answering questions, retrieving information, generating content, and assisting employees or customers 24/7.",
        },
        {
        title: "Data Intelligence",
        description:
            "Transform raw business data into valuable insights using predictive analytics, machine learning, and AI-powered reporting.",
        },
    ],
    whyChoose: {
        badge: "Why Businesses Choose AI",
        heading: "Accelerate Growth Through Intelligent Automation",
        description:
        "We develop AI-powered solutions tailored to your business needs, helping organizations streamline operations, optimize resources, and unlock new growth opportunities through advanced automation.",
        benefits: [
        "Reduce operational costs",
        "Increase employee productivity",
        "Improve customer experience",
        "Automate repetitive business tasks",
        "Real-time business insights",
        "Higher operational accuracy",
        ],
        button: {
        text: "Explore AI Solutions",
        },
    },
    platform: {
        subtitle: "Enterprise AI Platform",
        title: "Business Intelligence",
        stats: [
        {
            value: companyStats.aiAutomation[3].value,
            label: companyStats.aiAutomation[3].label,
        },
        {
            value: companyStats.aiAutomation[4].value,
            label: companyStats.aiAutomation[4].label,
        },
        {
            value: companyStats.aiAutomation[0].value,
            label: companyStats.aiAutomation[0].label,
        },
        {
            value: companyStats.aiAutomation[2].value,
            label: companyStats.aiAutomation[2].label,
        },
        ],
        transformation: {
        title: "Business Transformation",
        description:
            "Whether you're looking to automate customer support, optimize internal workflows, or build AI-driven products, our experts help you implement scalable and future-ready AI solutions.",
        },
    },
};

export const aiOfferContent = {
    badge: "What We Offer",
    heading: "AI Solutions Designed for Modern Businesses",
    description:
        "From conversational AI and intelligent automation to enterprise knowledge assistants and predictive analytics, we develop scalable AI solutions that transform the way organizations operate.",
    services: [
        {
        title: "AI Chatbots",
        description:
            "Context-aware chatbots for websites, mobile apps, WhatsApp, Slack, and Microsoft Teams with multilingual support.",
        },
        {
        title: "Workflow Automation",
        description:
            "Automate approvals, notifications, HR processes, finance operations, CRM updates, and repetitive business tasks.",
        },
        {
        title: "Document Intelligence",
        description:
            "Extract, classify, validate, and process invoices, contracts, purchase orders, reports, and PDFs using AI.",
        },
        {
        title: "AI Agents",
        description:
            "Autonomous AI agents capable of reasoning, retrieving data, executing actions, and assisting employees.",
        },
        {
        title: "Predictive Analytics",
        description:
            "Forecast sales, demand, customer behavior, inventory, and business trends using machine learning.",
        },
        {
        title: "Computer Vision",
        description:
            "Image recognition, defect detection, attendance systems, OCR, object detection, and quality inspection.",
        },
        {
        title: "Enterprise Knowledge AI",
        description:
            "Build secure AI assistants trained on company documents, SOPs, manuals, and internal knowledge bases.",
        },
        {
        title: "Custom AI Solutions",
        description:
            "Design and develop tailored AI applications that integrate seamlessly with your existing business systems.",
        },
    ],
    learnMoreButton: {
        text: "Learn More",
    },
};

export const aiTechnologiesContent = {
    badge: "Technologies",
    heading: "Powered by Modern AI Technologies",
    description:
        "We combine state-of-the-art AI models, enterprise frameworks, scalable cloud infrastructure, and modern development technologies to build intelligent business solutions.",
    categories: [
        {
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
    ],
    enterpriseStack: {
        title: "Enterprise AI Stack",
        description:
        "Every AI solution is designed with scalability, security, and seamless integration in mind, ensuring long-term business value.",
        features: [
        {
            title: "Enterprise Security",
            description:
            "Secure APIs, encrypted data, authentication, and role-based access control.",
        },
        {
            title: "API Integrations",
            description:
            "Connect AI with ERP, CRM, HRMS, payment gateways, and existing business applications.",
        },
        {
            title: "Cloud Deployment",
            description:
            "Deploy on AWS, Azure, GCP, private cloud, or on-premise infrastructure.",
        },
        {
            title: "Continuous Improvement",
            description:
            "Monitor, optimize, retrain, and enhance AI models as your business evolves.",
        },
        ],
    },
};

export const aiIndustriesContent = {
    badge: "Industries",
    heading: "AI Solutions Across Every Industry",
    description:
        "We develop industry-specific AI solutions that solve real business challenges, improve operational efficiency, and unlock new growth opportunities.",
    exploreButton: {
        text: "Explore Solutions",
    },
    industries: [
        {
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
        title: "Sports Technology",
        description:
            "Improve athlete performance and fan engagement through AI-driven analytics, match insights, and tournament management.",
        useCases: [
            "Performance Analytics",
            "Match Insights",
            "Fan Engagement",
        ],
        },
    ],
};

export const aiPortfolioContent = {
    badge: "Portfolio",
    heading: "AI Solutions We've Delivered",
    description:
        "Explore a selection of enterprise AI projects designed to automate operations, improve decision-making, and accelerate digital transformation.",
    viewDetailsButton: {
        text: "View Details",
    },
    projects: [
        {
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
    ],
};

export const aiCaseStudyContent = {
    badge: "Case Study",
    heading: "AI-Powered Invoice Automation",
    description:
        "Discover how we transformed a manual invoice processing workflow into a fully automated AI-driven solution for a large enterprise.",
    client: {
        title: "Client Overview",
        subtitle: "Enterprise Manufacturing Company",
        challenges: [
        "Manual invoice processing across multiple departments",
        "Slow approval workflows causing operational delays",
        "High risk of human errors and duplicate entries",
        "No centralized visibility into invoice status",
        ],
    },
    solution: {
        title: "AI Solution",
        subtitle: "Intelligent Invoice Processing Platform",
        solutions: [
        "AI-powered OCR for invoice extraction",
        "Automatic validation using business rules",
        "ERP integration for seamless data synchronization",
        "Workflow automation for approvals",
        "Duplicate invoice detection",
        "Real-time analytics dashboard",
        ],
    },
    results: {
        title: "Business Results",
        stats: [
        {
            value: companyStats.aiAutomation[4].value,
            label: companyStats.aiAutomation[4].label,
        },
        {
            value: companyStats.aiAutomation[6].value,
            label: companyStats.aiAutomation[6].label,
        },
        {
            value: companyStats.aiAutomation[5].value,
            label: companyStats.aiAutomation[5].label,
        },
        {
            value: companyStats.aiAutomation[3].value,
            label: companyStats.aiAutomation[3].label,
        },
        ],
    },
    technologies: {
        title: "Technologies Used",
        items: [
        "OpenAI GPT",
        "OCR Engine",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "React",
        ],
    },
};

export const aiFAQContent = {
    badge: "FAQ",
    heading: "Frequently Asked Questions",
    description:
        "Everything you need to know about our AI & Automation services.",
    faqs: [
        {
        question: "What AI solutions do you develop?",
        answer:
            "We build AI chatbots, virtual assistants, workflow automation systems, document intelligence platforms, predictive analytics solutions, AI agents, recommendation engines, and custom AI applications.",
        },
        {
        question: "Can AI integrate with our existing ERP or CRM?",
        answer:
            "Yes. Our AI solutions integrate seamlessly with ERP, CRM, HRMS, accounting software, and custom enterprise applications using secure APIs.",
        },
        {
        question: "Which AI models do you work with?",
        answer:
            "We work with OpenAI GPT, Google Gemini, Claude, Llama, Mistral, and other open-source models depending on your business requirements.",
        },
        {
        question: "Is our business data secure?",
        answer:
            "Absolutely. We follow enterprise-grade security standards including encryption, access control, secure APIs, and private deployment options.",
        },
        {
        question: "How long does an AI implementation take?",
        answer:
            "The timeline depends on project complexity, integrations, and business goals. Most AI solutions are delivered through phased development and deployment.",
        },
        {
        question: "Do you provide post-deployment support?",
        answer:
            "Yes. We offer monitoring, maintenance, optimization, model improvements, and long-term technical support for all AI solutions.",
        },
    ],
};
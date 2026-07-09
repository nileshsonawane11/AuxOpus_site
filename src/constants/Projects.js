import LiveStrikeImg from "../assets/Projects/LiveStrike.png";
import Assign_ProImg from "../assets/Projects/Assign_Pro.png";
import Barber_ProImg from "../assets/Projects/Barber_Pro.png";
import Staypass_vertical from "../assets/Projects/Styapass_vertical.png";
import Staypass_horizantal from "../assets/Projects/Styapass_horizantal.jpeg";

// ============================================
// PORTFOLIO & PROJECTS DATA
// ============================================

export const featuredProjects = [
    {
        title: "StayPass",
        category: "Education",
        description: "A smart hostel management system that streamlines student entry, exit, leave approvals, and QR-based gate verification.",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: Staypass_horizantal,
    },
    {
        title: "LiveStrike",
        category: "Sports Technology",
        description: "A comprehensive sports management platform for live scoring, tournament administration, real-time updates, and audience engagement across multiple sports.",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: LiveStrikeImg,
    },
    {
        title: "Exam Supervision",
        category: "Education",
        description: "A comprehensive examination management system for faculty duty allocation, attendance tracking, billing, supervision letters, and automated reporting.",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: Assign_ProImg,
    },
    {
        title: "Barber Pro",
        category: "Bussiness Platform",
        description: "Complete ERP for HR, Finance, Inventory, Projects and Operations.",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: Barber_ProImg,
    },
];

export const caseStudies = [
    {
        title: "StayPass",
        industry: "Education",
        challenge: "Manual hostel entry-exit records and leave approvals led to delays, paperwork, and limited visibility into student movements.",
        solution: "Developed a digital hostel management system with online leave requests, QR-based gate verification, automated approvals, and real-time movement tracking.",
        result: "Streamlined hostel operations, enhanced student safety, reduced paperwork, and improved administrative efficiency."
    },
    {
        title: "LiveStrike",
        industry: "Sports Technology",
        challenge: "Managing live scoring, tournaments, and player statistics on a single platform.",
        solution: "Developed a cloud-based real-time cricket scoring ecosystem with analytics and tournament management.",
        result: "40% faster match management and seamless live score delivery.",
    },
];

export const ourProducts = [
    {
        icon: "FaUserCheck",
        library: "fa6",
        title: "StayPass",
        category: "Education",
        description: "An intelligent hostel entry–exit management solution designed to enhance security, efficiency, and operational control.",
    },
    {
        icon: "FaBaseballBall",
        library: "fa",
        title: "LiveStrike",
        category: "Sports Technology",
        description: "Real-time cricket scoring platform with tournaments, analytics, live streaming and player statistics.",
    },
    {
        icon: "FaGraduationCap",
        library: "fa6",
        title: "Assign Pro",
        category: "Education",
        description: "Automated invigilation allocation, duty scheduling and examination management system.",
    },
    {
        icon: "FaScissors",
        library: "fa6",
        title: "Barber Pro",
        category: "Bussiness Platform",
        description: "Complete ERP for HR, Finance, Inventory, Projects and Operations.",
    },
];

export const successStories = [
    {
        title: "StayPass",
        industry: "Education",
        description: "Securely manage hostel entry, exit, and leave requests through a centralized platform.",
        gradient: "from-blue-500 to-cyan-500",
        img: Staypass_horizantal,
    },
    {
        title: "LiveStrike",
        industry: "Sports Technology",
        description: "Automate tournament operations with live scoring, statistics, and scheduling.",
        gradient: "from-blue-500 to-cyan-500",
        img: LiveStrikeImg,
    },
];

// ============================================
// AI & AUTOMATION PORTFOLIO
// ============================================

export const aiPortfolio = [
    {
        title: "Enterprise AI Customer Support",
        industry: "SaaS Platform",
        description: "Built an AI-powered multilingual support assistant capable of resolving customer queries, creating tickets, and integrating directly with CRM systems.",
        technologies: ["OpenAI", "LangChain", "Node.js", "MongoDB"],
        outcome: "65% Faster Response Time",
    },
    {
        title: "Smart Invoice Processing",
        industry: "Finance",
        description: "Developed an OCR-powered document intelligence platform that extracts invoice data, validates information, and syncs with ERP software.",
        technologies: ["Python", "FastAPI", "OCR", "PostgreSQL"],
        outcome: "99% Extraction Accuracy",
    },
    {
        title: "Enterprise Knowledge Assistant",
        industry: "IT Services",
        description: "Created a Retrieval-Augmented Generation (RAG) assistant trained on internal company documents, SOPs, and knowledge bases.",
        technologies: ["GPT-4o", "Pinecone", "LangChain", "React"],
        outcome: "80% Faster Knowledge Retrieval",
    },
    {
        title: "Sales Prediction Dashboard",
        industry: "Retail",
        description: "Implemented machine learning models to forecast sales, optimize inventory planning, and improve demand prediction.",
        technologies: ["TensorFlow", "Python", "Power BI", "PostgreSQL"],
        outcome: "30% Better Forecast Accuracy",
    },
    {
        title: "Manufacturing Defect Detection",
        industry: "Manufacturing",
        description: "Built a computer vision system to identify product defects in real-time, reducing manual inspection and improving production quality.",
        technologies: ["YOLO", "OpenCV", "Python", "Docker"],
        outcome: "92% Detection Accuracy",
    },
    {
        title: "HR Recruitment Assistant",
        industry: "Human Resources",
        description: "Designed an AI assistant that screens resumes, ranks candidates, schedules interviews, and answers recruitment-related queries.",
        technologies: ["OpenAI", "FastAPI", "React", "MongoDB"],
        outcome: "75% Faster Hiring Process",
    },
];

// ============================================
// WEB DEVELOPMENT PORTFOLIO
// ============================================

export const webPortfolio = [
    {
        name: "LiveStrike",
        category: "Sports Technology",
        image: LiveStrikeImg,
        desc: "A comprehensive sports management platform with real-time live scoring and tournament management.",
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
        name: "Assign Pro",
        category: "Education",
        image: Assign_ProImg,
        desc: "Automate supervision scheduling, billing, and examination report generation.",
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
        name: "Barber Pro",
        category: "Bussiness Platform",
        image: Barber_ProImg,
        desc: "Manage customers, services, payments, and invoicing from a single platform.",
        tech: ["HTML", "Laravel", "MySQL"],
    },
];

// ============================================
// MOBILE APP PORTFOLIO
// ============================================

export const appPortfolio = [
    {
        image: Staypass_horizantal,
        title: "StayPass",
        description: "A smart hostel management system for digital leave approvals and QR-based gate verification.",
        technologies: ["React Native", "Supabase"],
    },
];

// ============================================
// CORPORATE TRAINING PORTFOLIO
// ============================================

export const corporateTrainingPortfolio = [
    {
        title: "InterShip Program 2026",
        duration: "1 Month",
        participants: "20 Interns",
        outcome: "Production-Ready Developers",
    },
];

// ============================================
// DIGITAL MARKETING PORTFOLIO
// ============================================

export const digitalMarketingPortfolio = [
    {
        title: "E-Commerce Growth Campaign",
        category: "SEO + PPC",
        description: "Executed a full-funnel SEO and paid advertising strategy to increase online sales and reduce acquisition costs.",
        result: "+310% Organic Traffic",
    },
    {
        title: "University Lead Generation",
        category: "Education Marketing",
        description: "Designed multi-channel campaigns that significantly increased admission inquiries and enrollment applications.",
        result: "+180% Student Leads",
    },
    {
        title: "Healthcare Digital Presence",
        category: "Local SEO",
        description: "Improved search visibility, online reputation, and appointment bookings for a healthcare provider.",
        result: "+240% Appointment Requests",
    },
    {
        title: "B2B SaaS Marketing",
        category: "Performance Marketing",
        description: "Generated qualified enterprise leads using LinkedIn Ads, content marketing, and landing page optimization.",
        result: "4.9X Marketing ROI",
    },
    {
        title: "Brand Awareness Campaign",
        category: "Social Media",
        description: "Built a strong digital presence through strategic content creation, influencer partnerships, and social campaigns.",
        result: "12M+ Reach",
    },
];

// ============================================
// MAINTENANCE & SUPPORT PORTFOLIO
// ============================================

export const maintenanceSupportPortfolio = [
    {
        title: "Cloud Infrastructure Monitoring",
        company: "Enterprise SaaS",
        result: "99.99% Uptime",
    },
    {
        title: "Database Optimization",
        company: "Healthcare Platform",
        result: "65% Faster Queries",
    },
    {
        title: "Security Maintenance",
        company: "FinTech Company",
        result: "Zero Critical Vulnerabilities",
    },
    {
        title: "24×7 Production Monitoring",
        company: "Manufacturing ERP",
        result: "70% Faster Incident Resolution",
    },
];

// ============================================
// UI/UX PORTFOLIO
// ============================================

export const uiuxPortfolio = [
    {
        title: "E-Commerce Platform",
        category: "Web Design",
        description: "Redesigned an online shopping platform to improve product discovery, checkout experience, and mobile usability.",
        result: "+42% Conversion Rate",
    },
    {
        title: "Banking Mobile App",
        category: "Mobile UI",
        description: "Designed a modern fintech application focused on accessibility, security, and intuitive financial management.",
        result: "4.9★ User Rating",
    },
    {
        title: "Enterprise CRM Dashboard",
        category: "Dashboard",
        description: "Built a scalable design system and analytics dashboard for enterprise sales and operations teams.",
        result: "35% Productivity Increase",
    },
    {
        title: "Learning Management System",
        category: "Education",
        description: "Created engaging learning experiences with interactive dashboards, course management, and assessments.",
        result: "+60% User Engagement",
    },
    {
        title: "Healthcare Portal",
        category: "Healthcare",
        description: "Designed a patient-centric healthcare portal with appointment booking, reports, and teleconsultation.",
        result: "90% Positive Feedback",
    },
];

import {appPortfolio} from "../Projects.js";
import Staypass from "../../assets/Projects/Styapass_vertical.png"
import Livestrike from "../../assets/Services/Livestrike_phone.jpg"

export const appHeroContent = {
    badge: {
        text: "App Development",
    },
    heading: {
        line1: "Mobile Apps",
        highlightedText: "Engineered For Enterprise",
    },
    description:
        "AuxOpus builds Android, iOS and cross-platform applications backed by solid engineering — scalable architecture, secure cloud integration and AI-driven automation baked in from day one.",
    buttons: [
        {
        text: "Build My App",
        link: "/contact",
        type: "primary",
        },
        {
        text: "View Apps",
        link: "/portfolio",
        type: "secondary",
        },
    ],
    floatingIcons: {
        left: "FaApple",
        right: "FaGooglePlay",
    },
    phones: {
        left: {
        gradient: "from-violet-500 to-cyan-400",
        img: Staypass, // Add image path here, or leave empty for gradient
        alt: "Left Phone Mockup",
        },
        right: {
        gradient: "from-cyan-500 to-blue-500",
        img: Livestrike, // Add image path here, or leave empty for gradient
        alt: "Right Phone Mockup",
        },
    },
};

export const appOverviewContent = {
    badge: "Overview",
    heading: "Mobile Engineering, Built The AuxOpus Way",
    description:
        "As a technology and engineering services company, we treat mobile app development as part of a bigger picture — digital transformation, cloud infrastructure and automation working together. Every app we ship is built to integrate cleanly with your existing systems and scale as your business does.",
    cards: [
        {
        title: "What",
        description:
            "Android, iOS and cross-platform apps engineered for real business systems, not just app stores.",
        bgColor: "bg-violet-50",
        },
        {
        title: "Why",
        description:
            "Turn manual, offline processes into automated mobile-first workflows that cut cost and save time.",
        bgColor: "bg-cyan-50",
        },
        {
        title: "Who",
        description:
            "Healthcare, Retail, Logistics, Education, Finance and fast-moving startups.",
        bgColor: "bg-blue-50",
        },
    ],
};

export const appOfferContent = {
    heading: "What We Offer",
    services: [
        {
        icon: "FaAndroid",
        title: "Android Apps",
        description: "Native performance, built to Play Store standards.",
        },
        {
        icon: "FaApple",
        title: "iOS Apps",
        description: "Polished, App Store-ready native experiences.",
        },
        {
        icon: "FaMobileScreen",
        title: "Flutter Apps",
        description: "One codebase, consistent experience across platforms.",
        },
        {
        icon: "FaTabletScreenButton",
        title: "React Native",
        description: "Fast iteration without sacrificing native feel.",
        },
        {
        icon: "FaCode",
        title: "Custom Apps",
        description: "Purpose-built solutions for niche workflows.",
        },
        {
        icon: "FaCloud",
        title: "Cloud Sync",
        description: "Real-time data across devices, teams and locations.",
        },
        {
        icon: "FaBell",
        title: "Push Notifications",
        description: "Timely, targeted alerts that keep users engaged.",
        },
        {
        icon: "FaDatabase",
        title: "Backend APIs",
        description: "Secure, well-documented APIs built to scale.",
        },
    ],
};

export const appTechnologiesContent = {
    heading: "Technologies We Use",
    categories: [
        {
        title: "Mobile",
        technologies: [
            { icon: "FaFlutter", library: "fa6", name: "Flutter", color: "text-sky-500" },
            { icon: "FaReact", library: "fa6", name: "React Native", color: "text-cyan-500" },
            { icon: "SiKotlin", library: "si", name: "Kotlin", color: "" },
            { icon: "SiSwift", library: "si", name: "Swift", color: "" },
        ],
        },
        {
        title: "Backend",
        technologies: [
            { icon: "FaNodeJs", library: "fa6", name: "Node.js", color: "" },
            { icon: "SiFirebase", library: "si", name: "Firebase", color: "" },
            { icon: "SiSupabase", library: "si", name: "Supabase", color: "" },
        ],
        },
        {
        title: "Database",
        technologies: [
            { icon: "SiMongodb", library: "si", name: "MongoDB", color: "" },
            { icon: "SiMysql", library: "si", name: "MySQL", color: "" },
            { icon: "SiPostgresql", library: "si", name: "PostgreSQL", color: "" },
        ],
        },
        {
        title: "Cloud & Automation",
        technologies: [
            { icon: "FaAws", library: "fa6", name: "AWS", color: "" },
            { icon: "SiVercel", library: "si", name: "Vercel", color: "" },
            { icon: "SiCloudflare", library: "si", name: "Cloudflare", color: "" },
        ],
        },
    ],
};

export const appIndustriesContent = {
    heading: "Industries We Serve",
    industries: [
        {
        name: "Healthcare",
        description: "Secure, compliant apps for patient and provider workflows.",
        },
        {
        name: "Education",
        description: "Apps that connect students, faculty and institutions.",
        },
        {
        name: "Retail",
        description: "Seamless shopping experiences from browse to checkout.",
        },
        {
        name: "Finance",
        description: "Reliable, secure apps for transactions and reporting.",
        },
        {
        name: "Manufacturing",
        description: "Operational apps that bring shop-floor data online.",
        },
        {
        name: "Travel",
        description: "Booking and itinerary apps built for real-time use.",
        },
        {
        name: "Startups",
        description: "MVPs built fast, engineered to scale later.",
        },
    ],
};

export const appPortfolioContent = {
    badge: "Portfolio",
    heading: "Mobile Applications We've Built",
    viewAllButton: {
        text: "View Portfolio",
        link: "/portfolio",
    },
    projects: appPortfolio,
    swiper: {
        delay: 3500,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
        0: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1300: { slidesPerView: 3 },
        },
    },
};

export const appCaseStudyContent = {
    badge: "Case Study",
    heading: "Digital Transformation Through Mobile Apps",
    sections: [
        {
        icon: "FaCircleExclamation",
        iconBg: "bg-red-100",
        iconColor: "text-red-500",
        title: "Challenge",
        description:
            "Client relied on offline, manual processes and had no mobile presence, leading to slow service and limited visibility into operations.",
        },
        {
        icon: "FaLightbulb",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Solution",
        description:
            "AuxOpus designed Android and iOS applications with cloud sync, role-based access, automated notifications and secure APIs tied directly into existing systems.",
        },
        {
        icon: "FaChartLine",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "Results",
        description:
            "75% increase in user engagement, faster service delivery, improved customer retention and significantly reduced manual work.",
        },
    ],
};

export const appFAQContent = {
    badge: "FAQs",
    heading: "Frequently Asked Questions",
    faqs: [
        {
        question: "Do you develop Android and iOS applications?",
        answer: "Yes. We build Android, iOS and cross-platform mobile applications end-to-end."
        },
        {
        question: "Which framework do you recommend?",
        answer: "Flutter or React Native for most businesses; native development when performance is critical."
        },
        {
        question: "Can you publish apps on Play Store and App Store?",
        answer: "Yes, we handle the complete deployment and release process."
        },
        {
        question: "Will I receive source code?",
        answer: "Yes, full source code is handed over after project completion."
        },
        {
        question: "Can existing apps be redesigned?",
        answer: "Yes — UI/UX redesign, performance optimization, and codebase cleanup are all in scope."
        },
        {
        question: "Do you provide backend APIs?",
        answer: "Yes, including cloud infrastructure and automation where it makes sense."
        },
        {
        question: "Can apps work offline?",
        answer: "Yes, depending on your workflow and data sync requirements."
        },
        {
        question: "Will my app be secure?",
        answer: "We implement authentication, encryption, role-based access and secure API design by default."
        },
        {
        question: "Do you provide maintenance?",
        answer: "Yes, ongoing maintenance and support plans are available after launch."
        },
        {
        question: "How long does development take?",
        answer: "Typically 6 to 16 weeks depending on scope and integrations."
        },
    ],
};
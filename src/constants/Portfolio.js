import {companyStats} from "./Stats.js"
import {featuredProjects} from "./Projects.js";
import {caseStudies} from "./Projects.js";
import Web_ERP from "../assets/Services/Web_ERP.png"

export const portfolioHeroContent = {
    badge: {
        text: "Our Portfolio",
        icon: "FaRocket",
    },
    heading: {
        line1: "Turning Ideas Into",
        highlightedText: " Digital Success",
    },
    description:
        "Explore our collection of innovative projects, business solutions, enterprise applications, and digital experiences crafted to solve real-world challenges and accelerate business growth.",
    buttons: [
        {
        text: "Start Your Project",
        link: "/contact",
        type: "primary",
        icon: "FaArrowRight",
        },
        {
        text: "Our Services",
        link: "/services",
        type: "secondary",
        },
    ],
    centerCard: {
        title: "Enterprise ERP",
        description: "End-to-end enterprise management platform.",
        gradient: "from-blue-500 to-cyan-400",
        img: Web_ERP, // Leave empty or add image path like: "https://example.com/image.jpg"
    },
    floatingCards: [
        {
        icon: "FaLaptopCode",
        text: "20+ Projects",
        color: "text-blue-600",
        position: "top-5 left-0",
        rotation: "rotate-[-12deg]",
        },
        {
        icon: "FaLayerGroup",
        text: "Multiple Industries",
        color: "text-cyan-600",
        position: "bottom-8 left-10",
        rotation: "rotate-[10deg]",
        },
        {
        icon: "FaCube",
        text: "Innovative Products",
        color: "text-blue-500",
        position: "top-20 right-0",
        rotation: "rotate-[12deg]",
        },
    ],
};

export const portfolioOverviewContent = {
    badge: "Overview",
    heading: {
        line1: "Projects That Deliver",
        line2: "Real Business Value",
    },
    paragraphs: [
        "Our portfolio showcases our commitment to transforming ideas into impactful digital solutions. Every project reflects our focus on innovation, quality, and delivering measurable business value through technology.",
        "From startups to enterprises, we develop scalable software, enterprise applications, mobile experiences, cloud solutions, automation, and digital platforms that help organizations innovate, optimize operations, and achieve sustainable growth.",
    ],
    highlights: [
        {
            icon: "FaLightbulb",
            title: "Innovation",
            description:
                "Transforming ideas into innovative digital solutions.",
        },
        {
            icon: "FaUsers",
            title: "Collaboration",
            description:
                "Working closely with clients through every stage.",
        },
        {
            icon: "FaArrowTrendUp",
            title: "Business Growth",
            description:
                "Technology that drives efficiency and sustainable growth.",
        },
        {
            icon: "FaAward",
            title: "Quality",
            description:
                "Delivering reliable, scalable, and high-quality solutions.",
        },
    ],
};

export const portfolioStatsContent = {
    stats: [
        {
        number: companyStats.overview[1].value,
        label: companyStats.overview[1].label,
        },
        {
        number: companyStats.overview[7].value,
        label: companyStats.overview[7].label,
        },
        {
        number: companyStats.overview[2].value,
        label: companyStats.overview[2].label,
        },
        {
        number: companyStats.overview[3].value,
        label: companyStats.overview[3].label,
        },
    ],
};

export const projectCategoriesContent = {
    badge: "Categories",
    heading: "Explore Our Expertise",
    categories: [
        {
        icon: "FaLaptopCode",
        title: "Web Applications",
        },
        {
        icon: "FaMobileScreen",
        title: "Mobile Apps",
        },
        {
        icon: "FaRobot",
        title: "AI Solutions",
        },
        {
        icon: "FaCloud",
        title: "Cloud Platforms",
        },
        {
        icon: "FaDatabase",
        title: "Enterprise Systems",
        },
        {
        icon: "FaGlobe",
        title: "Digital Products",
        },
    ],
};

export const featuredProjectsContent = {
    badge: "Featured Projects",
    heading: "Delivering Digital Excellence",
    projects: featuredProjects,
    viewButton: {
        text: "Explore Case Study",
    },
};

export const caseStudiesContent = {
    badge: "Case Studies",
    heading: "Transforming Ideas into Results",
    readMoreButton: {
        text: "Read More",
    },
    studies: caseStudies,
};

export const developmentProcessContent = {
    badge: "Process",
    heading: "How We Build Projects",
    process: [
        {
        icon: "FaMagnifyingGlass",
        title: "Research",
        },
        {
        icon: "FaPenRuler",
        title: "Design",
        },
        {
        icon: "FaCode",
        title: "Development",
        },
        {
        icon: "FaBug",
        title: "Testing",
        },
        {
        icon: "FaRocket",
        title: "Launch",
        },
    ],
};

export const technologiesUsedContent = {
    badge: "Technologies",
    heading: "Technologies We Use",
    technologies: [
        "React",
        "React Native",
        "Flutter",
        "Node.js",
        "PHP",
        "Laravel",
        "Python",
        "MongoDB",
        "MySQL",
        "Firebase",
        "AWS",
        "Docker",
        "AI",
        "OpenAI",
    ],
};

export const clientTestimonialsContent = {
    badge: "Testimonials",
    heading: "What Our Clients Say",
    testimonials: [
        {
        name: "Rahul Patil",
        company: "TechNova",
        review:
            "AuxOpus delivered a high-quality solution with exceptional communication throughout the project.",
        },
        {
        name: "Priya Sharma",
        company: "EduSpark",
        review:
            "Professional team, innovative ideas, and excellent execution. Highly recommended.",
        },
    ],
};
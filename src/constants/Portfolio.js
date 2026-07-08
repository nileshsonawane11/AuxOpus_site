import {companyStats} from "./Stats.js"


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
        img: "", // Leave empty or add image path like: "https://example.com/image.jpg"
    },
    floatingCards: [
        {
        icon: "FaLaptopCode",
        text: "40+ Projects",
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
        "Our portfolio represents more than completed projects—it reflects our commitment to solving real-world business challenges through technology, innovation, and collaboration.",
        "From startups to enterprises, we build scalable software, intelligent automation, mobile applications, AI-powered systems, and cloud solutions that empower organizations to achieve sustainable growth.",
    ],
    highlights: [
        {
        icon: "FaLightbulb",
        title: "Innovation",
        description:
            "Every project begins with understanding the client's vision and transforming ideas into practical digital solutions.",
        },
        {
        icon: "FaUsers",
        title: "Collaboration",
        description:
            "We work closely with our clients throughout the development lifecycle to ensure transparency and success.",
        },
        {
        icon: "FaArrowTrendUp",
        title: "Business Growth",
        description:
            "Our solutions are designed to improve efficiency, increase productivity, and accelerate business growth.",
        },
        {
        icon: "FaAward",
        title: "Quality",
        description:
            "From planning to deployment, we maintain high standards to deliver reliable and scalable products.",
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
    badge: "Featured",
    heading: "Selected Projects",
    projects: [
        {
        title: "LiveStrike",
        category: "Sports Technology",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: "",
        },
        {
        title: "Exam Supervision",
        category: "Education",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: "",
        },
        {
        title: "Hospital ERP",
        category: "Healthcare",
        gradient: "from-blue-500 via-cyan-400 to-sky-300",
        img: "",
        },
    ],
    viewButton: {
        text: "View Case Study",
    },
};

export const caseStudiesContent = {
    badge: "Case Studies",
    heading: "Real Challenges. Real Results.",
    readMoreButton: {
        text: "Read More",
    },
    studies: [
        {
        title: "LiveStrike",
        industry: "Sports Technology",
        challenge:
            "Managing live scoring, tournaments, and player statistics on a single platform.",
        solution:
            "Developed a cloud-based real-time cricket scoring ecosystem with analytics and tournament management.",
        result: "40% faster match management and seamless live score delivery.",
        },
        {
        title: "Exam Supervision System",
        industry: "Education",
        challenge:
            "Manual supervision allocation caused scheduling conflicts and inefficiencies.",
        solution:
            "Created an automated allocation platform with intelligent scheduling and reporting.",
        result: "Reduced manual effort by over 80% while improving transparency.",
        },
    ],
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
        "Next.js",
        "Node.js",
        "PHP",
        "Laravel",
        "Python",
        "Java",
        "Flutter",
        "MongoDB",
        "MySQL",
        "Firebase",
        "AWS",
        "Docker",
        "AI",
        "TensorFlow",
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
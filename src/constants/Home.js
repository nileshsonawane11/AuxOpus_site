import {companyStats} from "./Stats.js";

export const heroContent = {
    
    left:{
        heading: {
            line1: "Empowering Businesses Through",
            highlightedText: "Technology & Innovation",
        },
        description: "AuxOpus empowers businesses with scalable software, intelligent automation, cloud technologies, and AI-driven solutions that accelerate innovation, improve efficiency, and drive sustainable growth.",
        badge: {
            text: "Technology • Innovation • Growth",
        },
        trusted_by:[
            "Startups", "SMEs", "Enterprises", "Educational Intitutes"
        ]
    },

    right:{
        title: "Business Dashboard",
        companyName: "AuxOpus Analytics",
        revenueCard: {
        label: "Business Growth",
        value: "+128%",
        progressBar: {
            total: 100,
            current: 85,
        },
        },
        statsCards: [
            {
                label: "Active Projects",
                value: "20+",
                progress: 20,
            },
            {
                label: "AI Solutions",
                value: "10+",
                progress: 10,
            },
        ],
        satisfactionCard: {
            label: "Customer Satisfaction",
            value: "99.8%",
        },
        floatingCards: [
            {
            title: "AI Automation",
            subtitle: "Smart Workflows",
            icon: "FaBrain",
            },
            {
                title: "Digital Transformation",
                subtitle: "Modern Technology",
                icon: "FaRocket",
            },
            {
            title: "Enterprise Security",
            subtitle: "Protected Systems",
            icon: "FaShieldHalved",
            },
        ],
    },

    heroStats : [
        {
            value: companyStats.overview[7].value,
            title: companyStats.overview[7].label,
        },
        {
            value: companyStats.overview[2].value,
            title: companyStats.overview[2].label,
        },
        {
            value: companyStats.overview[3].value,
            title: companyStats.overview[3].label,
        },
        {
            value: companyStats.overview[5].value,
            title: companyStats.overview[5].label,
        },
    ]
};

export const overviewContent = {
  heading: "Overview",
  paragraphs: [
    "<strong>AuxOpus</strong> is a forward-thinking technology and business solutions company committed to helping organizations transform ideas into meaningful outcomes. We collaborate with businesses, startups, educational institutions, and enterprises to address complex challenges, improve operational efficiency, and unlock new opportunities for sustainable growth. By combining strategic expertise, innovation, and a collaborative approach, we deliver practical, scalable, and future-ready solutions tailored to the unique needs of every client.",

    "Our commitment extends beyond delivering services. We believe in building long-term partnerships founded on trust, transparency, and continuous improvement. Whether supporting digital transformation, providing technology consulting, delivering professional training, or enabling business innovation, every engagement is driven by a passion for excellence and a dedication to creating lasting value."
  ]
};

export const missionVisionContent = {
    badge: "Purpose",
    heading: "Mission & Vision",
    mission: {
        icon: "FaBullseye", // icon name for mapping
        title: "Our Mission",
        description: "To empower businesses with innovative, scalable, and future-ready technology solutions that drive growth, inspire innovation, and create lasting value through trusted partnerships.",
        cardStyle: "bg-white" // light card
    },
    vision: {
        icon: "FaRocket",
        title: "Our Vision",
        description: "To become a globally recognized technology partner delivering intelligent digital solutions that inspire innovation, create sustainable growth, and transform businesses worldwide.",
        cardStyle: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white" // dark card
    }
};

export const whyChooseContent = {
    badge: "Why AuxOpus",
    heading: "Why Choose Us?",
    description:
        "At AuxOpus, we build long-term partnerships through innovation, transparency, and an unwavering commitment to delivering measurable business value.",
        
    cards: [
        {
        icon: "FaHandshake",
        title: "Client-Centric Approach",
        desc: "We listen first, understand your unique requirements, and deliver solutions aligned with your business vision and long-term goals.",
        },
        {
        icon: "FaAward",
        title: "Quality-Driven Execution",
        desc: "Every project is delivered with precision, reliability, performance, and uncompromising quality standards.",
        },
        {
        icon: "FaPuzzlePiece",
        title: "Security at the Core",
        desc: "Security, privacy, and reliability are embedded into every stage of development—not treated as an afterthought.",
        },
        {
        icon: "FaLightbulb",
        title: "Innovation with Purpose",
        desc: "We leverage modern technologies to create practical, scalable, and future-ready digital solutions.",
        },
        {
        icon: "FaUsers",
        title: "Transparent Collaboration",
        desc: "Clear communication and continuous updates ensure a smooth and trustworthy partnership.",
        },
        {
        icon: "FaArrowTrendUp",
        title: "Long-Term Partnership",
        desc: "Our support continues after delivery, helping your business grow through continuous improvements.",
        },
    ],
};

export const industriesContent = {
    badge: "Industries We Serve",
    heading: "Delivering Solutions Across Industries",
    description:
        "We help organizations across industries accelerate growth through innovative, scalable, and future-ready technology solutions tailored to their unique business goals.",

    industries: [
        { icon: "FaRocket", title: "Startups" },
        { icon: "FaBuilding", title: "Small & Medium Enterprises" },
        { icon: "FaIndustry", title: "Enterprises" },
        { icon: "FaGraduationCap", title: "Education" },
        { icon: "FaCartShopping", title: "Retail & E-Commerce" },
        { icon: "FaBriefcaseMedical", title: "Healthcare" },
        { icon: "FaSackDollar", title: "Finance & Banking" },
        { icon: "FaIndustry", title: "Manufacturing" },
        { icon: "FaLandmark", title: "Hospitality & Tourism" },
        { icon: "FaBuildingColumns", title: "Government & Public Sector" },
        { icon: "FaWheatAwn", title: "Agriculture" },
        { icon: "FaGlobe", title: "Non-Profit Organizations" },
    ],
};

export const contactHomeContent = {
    badge: "Get In Touch",
    heading: "Let's Build Something Amazing",
    description:
        "Whether you're starting a new project, looking for expert guidance, or exploring digital transformation, we're here to help.",

    cards: [
        {
        icon: "FaLightbulb",
        title: "Share Your Vision",
        description:
            "Tell us about your goals, and we'll connect with you to bring your ideas to life.",
        button: "Send an Inquiry",
        link: "/contact",
        className: "lg:translate-x-14 md:-rotate-6",
        },
        {
        icon: "FaComments",
        title: "Let's Connect",
        description:
            "Have an idea or business challenge? Let's discuss how technology can help.",
        button: "Talk to Our Team",
        link: "/contact",
        className: "z-10 scale-105",
        featured: true,
        },
        {
        icon: "FaCalendarDays",
        title: "Schedule a Consultation",
        description:
            "Book a meeting with our experts and discover the best solution for your business.",
        button: "Book a Meeting",
        link: "/contact",
        className: "lg:-translate-x-14 lg:translate-y-5 md:rotate-6",
        },
    ],
};

import Img from "../assets/AuxOpus.png";

export const testimonialsContent = {
    badge: "Testimonials",
    heading: "What Our Clients Say",
    description:
        "Trusted by businesses that value quality, innovation, and long-term partnerships.",

    testimonials: [
        {
        name: "Nilesh Sonawane",
        designation: "Managing Director • AuxOpus",
        image: Img,
        review:
            "Helping organizations maximize their impact with efficient digital tools, collaboration platforms, and streamlined operations.",
        },
        {
        name: "Rahul Patil",
        designation: "CEO • TechNova",
        image: Img,
        review:
            "AuxOpus delivered exactly what we needed. Their team was professional, responsive, and committed throughout the project.",
        },
        {
        name: "Priya Sharma",
        designation: "Founder • EduSpark",
        image: Img,
        review:
            "Excellent communication and outstanding technical expertise. They transformed our ideas into a scalable solution.",
        },
        {
        name: "Amit Kulkarni",
        designation: "Director • FinEdge",
        image: Img,
        review:
            "The quality of work exceeded our expectations. We highly recommend AuxOpus for reliable software development services.",
        },
    ],
};
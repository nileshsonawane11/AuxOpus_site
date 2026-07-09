import BG from "../assets/Company_BG.jpeg";
import {contactInfoContent} from "./Contact.js"
import {companyStats} from "./Stats.js"

export const aboutHeroContent = {
    
    background: {
        image: BG,
    },

    badge: "About AuxOpus",
    
    heading: {
        line1: "Engineering",
        highlightedText: "Digital Excellence",
    },

    description:
        "We empower startups and enterprises with innovative software, intelligent automation, and scalable digital solutions that drive business growth.",
    
        buttons: [
        {
        text: "Explore Services",
        icon: "FaArrowRight",
        link: "/services",
        },
        {
        text: "Portfolio",
        icon: "FaRocket",
        link: "/Portfolio",
        },
    ],
    stats: [
        {
        value: companyStats.overview[1].value,
        label: companyStats.overview[1].label,
        },
        {
        value: companyStats.overview[8].value,
        label: companyStats.overview[8].label,
        },
        {
        value: companyStats.overview[0].value,
        label: companyStats.overview[0].label,
        },
    ],
};

export const whoWeAreContent = {
    badge: "Who We Are",
    heading: {
        line1: "Transforming Ideas Into",
        highlightedText: " Digital Success",
    },
    paragraphs: [
        "AuxOpus is a technology company dedicated to delivering innovations in the form of digital products that help businesses automate, scale, and succeed. Our services include web development, mobile apps, cloud technologies, artificial intelligence, and enterprise software.",
        "We not only develop applications but also develop technology partnerships for the organizations.",
    ],
    services: [
        {
        icon: "FaLaptopCode",
        title: "Custom Software",
        },
        {
        icon: "FaMobileScreen",
        title: "Mobile Apps",
        },
        {
        icon: "FaCloud",
        title: "Cloud Solutions",
        },
        {
        icon: "FaBrain",
        title: "Artificial Intelligence",
        },
    ],
};


export const companyStatsContent = {
    badge: "Our Journey",
    heading: "Company Highlights",
    stats: [
        { value: companyStats.overview[1].value, label: companyStats.overview[1].label },
        { value: companyStats.overview[8].value, label: companyStats.overview[8].label },
        { value: companyStats.overview[0].value, label: companyStats.overview[0].label },
        { value: companyStats.overview[2].value, label: companyStats.overview[2].label },
        { value: companyStats.overview[4].value, label: companyStats.overview[4].label },
        { value: companyStats.overview[5].value, label: companyStats.overview[5].label },
    ],
};

export const coreValuesContent = {
    badge: "Our Core Values",
    heading: "Built on Values. Driven by Vision.",
    description:
        "Our culture is shaped by principles that foster innovation, accountability, and meaningful partnerships. These values guide every solution we build and every relationship we create.",

    values: [
        {
        icon: "FaRocket",
        title: "Innovation First",
        desc: "We constantly explore emerging technologies to build intelligent, future-ready solutions that create lasting business value.",
        },
        {
        icon: "FaPeopleGroup",
        title: "Client Partnership",
        desc: "We work as an extension of your team, focusing on collaboration, transparency, and shared success.",
        },
        {
        icon: "FaShieldHalved",
        title: "Trust & Security",
        desc: "Every product is designed with security, reliability, and data protection at its core.",
        },
        {
        icon: "FaBolt",
        title: "Execution Excellence",
        desc: "We transform ambitious ideas into high-quality digital products through disciplined execution and attention to detail.",
        },
        {
        icon: "FaChartLine",
        title: "Growth Mindset",
        desc: "Continuous learning, adaptability, and measurable improvement fuel our progress and our clients' success.",
        },
        {
        icon: "FaEarthAsia",
        title: "Purposeful Impact",
        desc: "We create technology that solves real-world challenges and contributes to sustainable business growth.",
        },
    ],
};

export const whyChooseUsContent = {
    badge: "Why Choose AuxOpus",

    heading: "Building Technology That Moves Businesses Forward",

    description:
        "At AuxOpus, we combine modern engineering practices, strategic thinking, and a commitment to quality to deliver digital solutions that are scalable, secure, and built for long-term success.",

    checklist: [
        "Business-Driven Development",
        "Modern Tech Stack",
        "Scalable & Secure Architecture",
        "Transparent Collaboration",
        "Agile Delivery Process",
        "Future-Ready Solutions",
    ],

    features: [
        {
        icon: "FaCompass",
        title: "Business-Centric Approach",
        desc: "Every solution begins with understanding your business goals before writing a single line of code.",
        },
        {
        icon: "FaLayerGroup",
        title: "Scalable Architecture",
        desc: "Applications designed to adapt, perform, and grow alongside your business.",
        },
        {
        icon: "FaMicrochip",
        title: "Modern Technologies",
        desc: "Leveraging AI, cloud, automation, and cutting-edge frameworks to build future-ready products.",
        },
        {
        icon: "FaChartLine",
        title: "Focused on Long-Term Value",
        desc: "Our objective is to create solutions that continue delivering measurable business impact well into the future.",
        },
    ],
};

export const developmentProcessContent = {
    badge: "Development Lifecycle",
    heading: "From Vision to Digital Excellence",
    description:
        "We follow a structured, collaborative, and agile development approach that transforms ideas into secure, scalable, and high-performing digital products. Every stage is designed to maximize quality, transparency, and business value.",

    process: [
        {
        icon: "FaMagnifyingGlass",
        title: "Discovery & Strategy",
        desc: "We understand your business, challenges, users, and objectives to define a clear roadmap for success.",
        },
        {
        icon: "FaSitemap",
        title: "Architecture & Planning",
        desc: "Designing scalable system architecture, project workflows, and technical strategies before development begins.",
        },
        {
        icon: "FaPalette",
        title: "UI/UX Design",
        desc: "Creating intuitive, engaging, and user-centric experiences that align with your brand and business goals.",
        },
        {
        icon: "FaLaptopCode",
        title: "Development",
        desc: "Developing secure, scalable, and maintainable applications using modern technologies and best practices.",
        },
        {
        icon: "FaShieldHalved",
        title: "Quality Assurance",
        desc: "Rigorous testing ensures reliability, security, performance, and a seamless user experience across platforms.",
        },
        {
        icon: "FaCloudArrowUp",
        title: "Deployment & Optimization",
        desc: "Deploying with confidence, monitoring performance, and continuously optimizing for long-term growth.",
        },
    ],
};

export const technologiesContent = {
    badge: "Technologies",
    heading: "Tools & Technologies We Use",
    description:
        "We leverage modern frameworks, cloud platforms, and industry-leading technologies to build secure, scalable, and future-ready solutions.",
    technologies: [
        { icon: "FaReact", library: "fa6", name: "React" },
        { icon: "FaNodeJs", library: "fa6", name: "Node.js" },
        { icon: "FaPython", library: "fa6", name: "Python" },
        { icon: "FaLaravel", library: "fa6", name: "Laravel" },
        { icon: "FaPhp", library: "fa6", name: "PHP" },
        { icon: "FaAws", library: "fa6", name: "AWS" },
        { icon: "FaDocker", library: "fa6", name: "Docker" },
        { icon: "SiMysql", library: "si", name: "MySQL" },
        { icon: "SiMongodb", library: "si", name: "MongoDB" },
        { icon: "SiFirebase", library: "si", name: "Firebase" },
        { icon: "FaGitAlt", library: "fa6", name: "Git" },
    ],
};


import Img from "../assets/AuxOpus.png";

export const teamContent = {
    badge: "Our Team",
    heading: "Meet The Experts",
    description:
        "AuxOpus is led by passionate innovators dedicated to building impactful technology solutions. Our leadership combines strategic thinking, technical expertise, and a commitment to delivering exceptional value to every client.",
    team: [
        {
        name: "Yashraj Chavan",
        role: "Chief Executive Officer",
        image: Img,
        },
        {
        name: "Guru Bhamare",
        role: "Chief Technology Officer",
        image: Img,
        },
        {
        name: "Nilesh Sonawane",
        role: "Chief Operating Officer",
        image: Img,
        },
        {
        name: "Kaustubh Patil",
        role: "Chief Marketing Officer",
        image: Img,
        },
        {
        name: "Himanshu Patil",
        role: "Chief Finance Officer",
        image: Img,
        },
    ],
};

export const ctaContent = {
    badge: "Let's Build Together",
    heading: {
        line1: "Turn Your Vision Into",
        line2: "Digital Reality",
    },
    description:
        "Whether you're building a new product, modernizing existing systems, or accelerating digital transformation, AuxOpus partners with you to deliver innovative, scalable, and future-ready technology solutions.",
    contact: [
        {
        icon: "FaPhone",
        label: "Call Us",
        value: contactInfoContent.contactMethods[1].value,
        },
        {
        icon: "FaEnvelope",
        label: "Email Us",
        value: contactInfoContent.contactMethods[2].value,
        },
    ],
    button: {
        text: "Schedule a Consultation",
        icon: "FaArrowRight",
    },
};
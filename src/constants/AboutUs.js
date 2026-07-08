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
        text: "Watch Overview",
        icon: "FaPlay",
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
        "AuxOpus is a technology company focused on delivering innovative digital products that help businesses automate, scale, and grow. Our expertise spans web, mobile, cloud, AI, and enterprise software solutions.",
        "We don't just build applications—we build long-term technology partnerships that enable organizations to stay competitive in an evolving digital landscape.",
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
    heading: "Numbers That Speak",
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
    badge: "Core Values",
    heading: "Principles That Drive Us",
    description:
        "Every decision we make is guided by values that inspire innovation, collaboration, and long-term success.",
    values: [
        {
        icon: "FaLightbulb",
        title: "Innovation",
        desc: "We embrace creativity and emerging technologies to build future-ready digital solutions.",
        },
        {
        icon: "FaHandshake",
        title: "Integrity",
        desc: "Honesty, transparency, and trust are the foundation of every partnership.",
        },
        {
        icon: "FaAward",
        title: "Excellence",
        desc: "Delivering exceptional quality through precision, dedication, and continuous improvement.",
        },
        {
        icon: "FaUsers",
        title: "Customer First",
        desc: "Understanding our clients enables us to create meaningful business value.",
        },
        {
        icon: "FaArrowTrendUp",
        title: "Growth",
        desc: "Helping businesses grow while continuously improving ourselves.",
        },
        {
        icon: "FaShieldHalved",
        title: "Reliability",
        desc: "Secure, scalable, and dependable solutions built for long-term success.",
        },
    ],
};

export const whyChooseUsContent = {
    badge: "Why AuxOpus",
    heading: "Your Trusted Technology Partner",
    description:
        "We combine innovation, technical expertise, and business understanding to build solutions that accelerate growth and digital transformation.",
    checklist: [
        "Agile Development Process",
        "Experienced Development Team",
        "Transparent Communication",
        "Modern Technologies",
        "Scalable Architecture",
        "Long-Term Support",
    ],
    features: [
        {
        icon: "FaCode",
        title: "Custom Software",
        desc: "Tailor-made applications designed around your business needs.",
        },
        {
        icon: "FaMobileScreen",
        title: "Mobile Apps",
        desc: "High-performance Android and iOS applications.",
        },
        {
        icon: "FaCloud",
        title: "Cloud Solutions",
        desc: "Secure and scalable cloud infrastructure for modern businesses.",
        },
        {
        icon: "FaBrain",
        title: "AI Integration",
        desc: "Intelligent automation powered by Artificial Intelligence.",
        },
        {
        icon: "FaHeadset",
        title: "24/7 Support",
        desc: "Dedicated technical assistance whenever you need it.",
        },
    ],
};


export const developmentProcessContent = {
    badge: "Our Process",
    heading: "How We Turn Ideas Into Products",
    description:
        "Every successful solution begins with a clear process. From idea to deployment, we ensure transparency, quality, and continuous collaboration.",
    process: [
        {
        icon: "FaClipboardList",
        title: "Discovery",
        desc: "Understanding your goals, users, and business challenges.",
        },
        {
        icon: "FaPenRuler",
        title: "Planning & Design",
        desc: "Creating architecture, wireframes, UI/UX, and project roadmap.",
        },
        {
        icon: "FaCode",
        title: "Development",
        desc: "Building scalable, secure, and high-performance applications.",
        },
        {
        icon: "FaVialCircleCheck",
        title: "Testing",
        desc: "Ensuring quality through functional and performance testing.",
        },
        {
        icon: "FaRocket",
        title: "Deployment",
        desc: "Launching your product with confidence and reliability.",
        },
        {
        icon: "FaHeadset",
        title: "Support",
        desc: "Continuous monitoring, maintenance, and feature improvements.",
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
        { icon: "FaLaravel", library: "fa6", name: "Laravel" },
        { icon: "FaPhp", library: "fa6", name: "PHP" },
        { icon: "FaPython", library: "fa6", name: "Python" },
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
        "Passionate professionals committed to delivering innovation, excellence, and exceptional customer experiences.",
    team: [
        {
        name: "Nilesh Sonawane",
        role: "Chief Operating Officer",
        image: Img,
        },
        {
        name: "John Doe",
        role: "Chief Technology Officer",
        image: Img,
        },
        {
        name: "Jane Smith",
        role: "Project Manager",
        image: Img,
        },
        {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        image: Img,
        },
    ],
};

export const ctaContent = {
    badge: "Let's Build Together",
    heading: {
        line1: "Ready To Transform",
        line2: "Your Business?",
    },
    description:
        "Whether you're launching a startup, scaling your business, or modernizing enterprise software, AuxOpus is here to turn your ideas into powerful digital solutions.",
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
        text: "Start Your Project",
        icon: "FaArrowRight",
    },
};
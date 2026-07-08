export const appHeroContent = {
    badge: {
        text: "App Development",
    },
    heading: {
        line1: "Mobile Apps",
        highlightedText: "Built For Growth",
    },
    description:
        "Develop beautiful Android, iOS and cross-platform mobile applications that delight users, increase engagement and accelerate business growth.",
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
        img: "", // Add image path here, or leave empty for gradient
        alt: "Left Phone Mockup",
        },
        right: {
        gradient: "from-cyan-500 to-blue-500",
        img: "", // Add image path here, or leave empty for gradient
        alt: "Right Phone Mockup",
        },
    },
};

export const appOverviewContent = {
    badge: "Overview",
    heading: "Mobile Experiences That Users Love",
    description:
        "We create intuitive, high-performance mobile applications tailored for startups, enterprises and growing businesses. From idea validation to App Store deployment, we provide complete mobile application development services.",
    cards: [
        {
        title: "What",
        description:
            "Android, iOS and cross-platform applications for every business.",
        bgColor: "bg-violet-50",
        },
        {
        title: "Why",
        description:
            "Improve customer engagement, automate operations, increase sales.",
        bgColor: "bg-cyan-50",
        },
        {
        title: "Who",
        description:
            "Healthcare, Retail, Logistics, Education, Finance, Startups.",
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
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaApple",
        title: "iOS Apps",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaMobileScreen",
        title: "Flutter Apps",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaTabletScreenButton",
        title: "React Native",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaCode",
        title: "Custom Apps",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaCloud",
        title: "Cloud Sync",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaBell",
        title: "Push Notifications",
        description: "Modern scalable mobile solutions.",
        },
        {
        icon: "FaDatabase",
        title: "Backend APIs",
        description: "Modern scalable mobile solutions.",
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
        ],
        },
        {
        title: "Database",
        technologies: [
            { icon: "SiMongodb", library: "si", name: "MongoDB", color: "" },
            { icon: "SiMysql", library: "si", name: "MySQL", color: "" },
        ],
        },
        {
        title: "Cloud",
        technologies: [
            { icon: "FaAws", library: "fa6", name: "AWS", color: "" },
        ],
        },
    ],
};

export const appIndustriesContent = {
    heading: "Industries We Serve",
    industries: [
        {
        name: "Healthcare",
        description: "Mobile applications designed for the healthcare industry.",
        },
        {
        name: "Education",
        description: "Mobile applications designed for the education industry.",
        },
        {
        name: "Retail",
        description: "Mobile applications designed for the retail industry.",
        },
        {
        name: "Finance",
        description: "Mobile applications designed for the finance industry.",
        },
        {
        name: "Manufacturing",
        description: "Mobile applications designed for the manufacturing industry.",
        },
        {
        name: "Travel",
        description: "Mobile applications designed for the travel industry.",
        },
        {
        name: "Food Delivery",
        description: "Mobile applications designed for the food delivery industry.",
        },
        {
        name: "Startups",
        description: "Mobile applications designed for the startups industry.",
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
    projects: [
        {
        image: "https://placehold.co/700x900",
        title: "Healthcare App",
        description:
            "Doctor appointment booking, prescriptions, online consultation and patient management.",
        technologies: ["Flutter", "Firebase", "Node.js"],
        },
        {
        image: "https://placehold.co/700x900",
        title: "Food Delivery App",
        description:
            "Complete delivery ecosystem with customer, delivery partner and admin applications.",
        technologies: ["React Native", "Laravel", "MySQL"],
        },
        {
        image: "https://placehold.co/700x900",
        title: "Education Platform",
        description:
            "Online learning platform with video lectures, quizzes and progress tracking.",
        technologies: ["Flutter", "Spring Boot", "MongoDB"],
        },
        {
        image: "https://placehold.co/700x900",
        title: "Finance Application",
        description:
            "Secure fintech application with analytics and digital payment integration.",
        technologies: ["Flutter", "Node.js", "PostgreSQL"],
        },
    ],
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
            "Client needed to digitize their offline services and provide a seamless mobile experience.",
        },
        {
        icon: "FaLightbulb",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Solution",
        description:
            "Designed Android and iOS applications with cloud synchronization, push notifications and secure APIs.",
        },
        {
        icon: "FaChartLine",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "Results",
        description:
            "75% increase in user engagement, faster service delivery, improved customer retention and reduced manual work.",
        },
    ],
};

export const appFAQContent = {
    badge: "FAQs",
    heading: "Frequently Asked Questions",
    faqs: [
        {
        question: "Do you develop Android and iOS applications?",
        answer: "Yes. We develop Android, iOS and cross-platform mobile applications."
        },
        {
        question: "Which framework do you recommend?",
        answer: "Flutter for most businesses and native development for high-performance applications."
        },
        {
        question: "Can you publish apps on Play Store and App Store?",
        answer: "Yes, we handle complete deployment."
        },
        {
        question: "Will I receive source code?",
        answer: "Yes, after successful project completion."
        },
        {
        question: "Can existing apps be redesigned?",
        answer: "Yes, including UI redesign and performance optimization."
        },
        {
        question: "Do you provide backend APIs?",
        answer: "Yes, complete backend development is included."
        },
        {
        question: "Can apps work offline?",
        answer: "Yes, depending on business requirements."
        },
        {
        question: "Will my app be secure?",
        answer: "We implement authentication, encryption and secure APIs."
        },
        {
        question: "Do you provide maintenance?",
        answer: "Yes, annual maintenance and support plans are available."
        },
        {
        question: "How long does development take?",
        answer: "Generally between 6 and 16 weeks depending on features."
        },
    ],
};
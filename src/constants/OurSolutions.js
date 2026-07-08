import {companyStats} from "./Stats.js"

export const solutionsHeroContent = {
    badge: {
        text: "AI Powered Business Solutions",
        icon: "FaRobot",
    },
    heading: {
        line1: "Smart Digital",
        highlightedText: "Solutions",
        line3: "For Modern Businesses",
    },
    description:
        "Empower your organization with intelligent software, automation, cloud infrastructure, AI, analytics and scalable enterprise solutions designed for long-term business growth.",
    buttons: [
        {
        text: "Discuss Your Project",
        link: "/contact",
        type: "primary",
        icon: "FaArrowRight",
        },
        {
        text: "Explore Services",
        link: "/services",
        type: "secondary",
        },
    ],
    stats: [
        { value: companyStats.overview[1].value, label: companyStats.overview[1].label },
        { value: companyStats.overview[7].value, label: companyStats.overview[7].label },
        { value: companyStats.overview[5].value, label: companyStats.overview[5].label},
        { value: companyStats.overview[4].value, label: companyStats.overview[4].label },
    ],
    trustedTechnologies: {
        label: "Trusted Technologies",
        items: ["React", "Node.js", "Laravel", "AWS", "Docker", "OpenAI"],
    },
    floatingIcons: {
        topLeft: { icon: "FaCloud", color: "text-blue-600" },
        topRight: { icon: "FaDatabase", color: "text-indigo-600" },
        bottomLeft: { icon: "FaRobot", color: "text-cyan-600" },
        bottomRight: { icon: "FaShieldHalved", color: "text-green-600" },
    },
    dashboard: {
        title: "AuxOpus ERP",
        subtitle: "Business Dashboard",
        user: {
        name: "Admin",
        status: "Online",
        },
        kpiCards: [
        { label: "Revenue", value: "₹8.5M", change: "+18%", changeColor: "text-green-500" },
        { label: "Users", value: "12.8K", change: "+240", changeColor: "text-blue-500" },
        { label: "Projects", value: "264", change: "Active", changeColor: "text-cyan-500" },
        { label: "Support", value: "99%", change: "SLA", changeColor: "text-green-500" },
        ],
        chartData: [40, 60, 50, 80, 70, 100, 120, 110, 130, 150, 170, 200],
        pieChart: {
        value: "70%",
        },
        recentActivity: [
        "Project Created",
        "Invoice Generated",
        "AI Analysis Complete",
        "New Client Added",
        ],
        projectProgress: [
        { name: "ERP", value: 92 },
        { name: "CRM", value: 76 },
        { name: "AI Module", value: 64 },
        ],
        teamMembers: {
        count: 5,
        active: "48",
        },
    },
    mobileMockup: {
        title: "AuxOpus",
        subtitle: "Mobile ERP",
        revenue: "₹2.4M",
        progressBars: [70, 90, 55],
        button: "Open Dashboard",
    },
    widgets: {
        aiAssistant: {
        icon: "FaRobot",
        title: "AI Assistant",
        subtitle: "Live Intelligence",
        items: [
            "Sales prediction completed",
            "Inventory optimized",
            "Customer insights generated",
        ],
        },
        cloud: {
        icon: "FaCloud",
        title: "Cloud Infrastructure",
        uptime: "99.98%",
        progress: 96,
        },
        revenue: {
        value: "₹8.5M",
        icon: "FaChartLine",
        },
        server: {
        icon: "FaServer",
        title: "Server Status",
        status: "Healthy",
        metrics: [
            { name: "CPU", value: "68%" },
            { name: "RAM", value: "54%" },
            { name: "Storage", value: "82%" },
        ],
        },
        automation: {
        icon: "FaCode",
        title: "Automation",
        tasksCompleted: "1,245",
        },
    },
    orbitingIcons: [
        { icon: "FaCloud", color: "text-blue-500", size: "large", direction: "forward", speed: 25, distance: 320 },
        { icon: "FaDatabase", color: "text-cyan-500", size: "large", direction: "forward", speed: 18, distance: 320 },
        { icon: "FaRobot", color: "text-indigo-500", size: "large", direction: "reverse", speed: 30, distance: 320 },
        { icon: "FaLaptopCode", color: "text-blue-600", size: "large", direction: "reverse", speed: 22, distance: 320 },
        { icon: "FaShieldHalved", color: "text-green-500", size: "small", direction: "forward", speed: 35, distance: 350 },
        { icon: "FaChartLine", color: "text-purple-500", size: "small", direction: "reverse", speed: 28, distance: 350 },
    ],
};

export const solutionsOverviewContent = {
    badge: "Overview",
    heading: "Solutions Designed Around Your Business",
    description:
        "Every organization has unique goals and challenges. Our solutions are carefully designed to streamline operations, improve collaboration, automate repetitive processes, and deliver measurable business value.",
};

export const solutionCategoriesContent = {
    heading: "Solution Categories",
    categories: [
        {
        icon: "FaBuilding",
        title: "Business Solutions",
        },
        {
        icon: "FaRobot",
        title: "AI Solutions",
        },
        {
        icon: "FaCloud",
        title: "Cloud Solutions",
        },
        {
        icon: "FaChartLine",
        title: "Analytics",
        },
        {
        icon: "FaUserGroup",
        title: "HR Solutions",
        },
        {
        icon: "FaMobileScreen",
        title: "Mobile Solutions",
        },
    ],
};

export const businessSolutionsContent = {
    badge: "Business Solutions",
    heading: "Digitize Every Business Process",
    description:
        "Improve efficiency through integrated software solutions that automate workflows, centralize information, and improve organizational productivity.",
    features: [
        "ERP Solutions",
        "CRM Platforms",
        "Inventory Management",
        "Billing Systems",
        "HR Management",
        "Payroll Systems",
        "Customer Portals",
        "Vendor Management",
    ],
    showcase: {
        icon: "FaBuilding",
    },
};

export const ourProductsContent = {
    badge: "Ready-to-Deploy Products",
    heading: "Our Software Products",
    description:
        "Along with custom software development, we offer industry-ready products that can be deployed quickly and customized according to your business needs.",
    products: [
        {
        icon: "FaBaseballBall",
        library: "fa",
        title: "LiveStrike",
        category: "Sports Management",
        description:
            "Real-time cricket scoring platform with tournaments, analytics, live streaming and player statistics.",
        },
        {
        icon: "FaGraduationCap",
        library: "fa6",
        title: "Exam Supervision",
        category: "Education",
        description:
            "Automated invigilation allocation, duty scheduling and examination management system.",
        },
        {
        icon: "FaBuilding",
        library: "fa6",
        title: "Business ERP",
        category: "Enterprise",
        description:
            "Complete ERP for HR, Finance, Inventory, Projects and Operations.",
        },
        {
        icon: "FaUserCheck",
        library: "fa6",
        title: "HRMS",
        category: "Human Resources",
        description:
            "Attendance, payroll, leave management and employee lifecycle automation.",
        },
        {
        icon: "FaHospital",
        library: "fa6",
        title: "Hospital Management",
        category: "Healthcare",
        description:
            "Manage appointments, doctors, billing, pharmacy and patient records.",
        },
        {
        icon: "FaCartShopping",
        library: "fa6",
        title: "Retail POS",
        category: "Retail",
        description:
            "Billing, inventory, GST, barcode and sales reporting solution.",
        },
    ],
};

export const productAdvantagesContent = {
    advantages: [
        {
        icon: "FaRocket",
        title: "Quick Deployment",
        desc: "Go live within days instead of months.",
        },
        {
        icon: "FaShieldHalved",
        title: "Secure & Reliable",
        desc: "Built using industry-standard security practices.",
        },
        {
        icon: "FaCloud",
        title: "Cloud Ready",
        desc: "Accessible from anywhere with scalable infrastructure.",
        },
        {
        icon: "FaGears",
        title: "Fully Customizable",
        desc: "Adapt every product to your organization's workflow.",
        },
    ],
};

export const aiSolutionsContent = {
    badge: "Artificial Intelligence",
    heading: "AI That Works For Your Business",
    description:
        "Transform business operations using Artificial Intelligence, automation, and intelligent decision-making systems that improve efficiency and reduce manual effort.",
    features: [
        "AI Chatbots",
        "AI Voice Assistants",
        "Generative AI",
        "Predictive Analytics",
        "Document Processing",
        "OCR Solutions",
        "Recommendation Engines",
        "Workflow Automation",
    ],
    cards: [
        {
        icon: "FaRobot",
        title: "AI Chatbots",
        },
        {
        icon: "FaBrain",
        title: "Machine Learning",
        },
        {
        icon: "FaMicrochip",
        title: "Computer Vision",
        },
        {
        icon: "FaComments",
        title: "AI Assistants",
        },
    ],
};

export const cloudSolutionsContent = {
    badge: "Cloud Solutions",
    heading: {
        line1: "Secure, Reliable &",
        highlightedText: " Scalable Cloud",
    },
    description:
        "Modern cloud infrastructure helps organizations improve scalability, security, collaboration, and operational efficiency.",
    services: [
        "Cloud Migration",
        "AWS & Azure",
        "Google Cloud",
        "Cloud Security",
        "Backup & Recovery",
        "DevOps",
        "Scalable Infrastructure",
        "Disaster Recovery",
    ],
    cards: [
        {
        icon: "FaCloud",
        title: "Cloud",
        },
        {
        icon: "FaServer",
        title: "Infrastructure",
        },
        {
        icon: "FaDatabase",
        title: "Database",
        },
        {
        icon: "FaShieldHalved",
        title: "Security",
        },
    ],
};

export const dataAnalyticsContent = {
    badge: "Data Analytics",
    heading: "Transform Data Into Decisions",
    description:
        "Unlock valuable business insights through dashboards, reporting, analytics, and intelligent visualization.",
    analytics: [
        "Business Intelligence",
        "Interactive Dashboards",
        "Data Visualization",
        "Predictive Analytics",
        "Real-time Reports",
        "KPI Monitoring",
        "Big Data",
        "Decision Support",
    ],
    chartIcons: [
        "FaChartColumn",
        "FaChartPie",
        "FaChartLine",
    ],
};

export const automationSolutionsContent = {
    heading: "Automation Solutions",
    description:
        "Reduce manual work, improve accuracy, and increase productivity through intelligent automation.",
    cards: [
        {
        icon: "FaGears",
        title: "Workflow Automation",
        },
        {
        icon: "FaBolt",
        title: "Process Optimization",
        },
        {
        icon: "FaRobot",
        title: "AI Automation",
        },
        {
        icon: "FaArrowRightArrowLeft",
        title: "System Integration",
        },
    ],
};

export const enterpriseSolutionsContent = {
    badge: "Enterprise Solutions",
    heading: {
        line1: "Powerful Software For",
        highlightedText: " Large Organizations",
    },
    description:
        "Centralize business operations, improve collaboration, automate departments, and gain complete visibility across your organization.",
    solutions: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Document Management System",
        "Supply Chain Management",
        "Human Resource Management",
        "Finance & Accounting",
        "Business Intelligence",
        "Custom Enterprise Portals",
    ],
    cards: [
        {
        icon: "FaBuilding",
        title: "ERP",
        },
        {
        icon: "FaDatabase",
        title: "Data",
        },
        {
        icon: "FaUsers",
        title: "HRM",
        },
        {
        icon: "FaNetworkWired",
        title: "Integration",
        },
    ],
};

export const industrySolutionsContent = {
    heading: "Industry Specific Solutions",
    description:
        "Every industry has unique challenges. Our tailored solutions help organizations improve productivity and accelerate growth.",
    industries: [
        {
        icon: "FaBuilding",
        title: "Startups & SMEs",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
        {
        icon: "FaIndustry",
        title: "Manufacturing",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
        {
        icon: "FaHospital",
        title: "Healthcare",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
        {
        icon: "FaGraduationCap",
        title: "Education",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
        {
        icon: "FaCartShopping",
        title: "Retail",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
        {
        icon: "FaBuildingColumns",
        title: "Government",
        desc: "Customized digital solutions designed specifically for this industry.",
        },
    ],
};

export const benefitsSectionContent = {
    heading: "Why Businesses Choose Our Solutions",
    benefits: [
        {
        icon: "FaArrowTrendUp",
        title: "Business Growth",
        desc: "Increase efficiency and unlock new revenue opportunities.",
        },
        {
        icon: "FaShieldHalved",
        title: "Enhanced Security",
        desc: "Protect business data using modern security practices.",
        },
        {
        icon: "FaClock",
        title: "Save Time",
        desc: "Automate repetitive processes and reduce manual effort.",
        },
        {
        icon: "FaUsers",
        title: "Better Collaboration",
        desc: "Improve communication between teams and departments.",
        },
    ],
};

export const technologyIntegrationContent = {
    badge: "Technologies",
    heading: "Powered By Modern Technologies",
    technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
        "IoT",
        "Blockchain",
        "Big Data",
        "Cyber Security",
        "API Integration",
        "Automation",
        "DevOps",
    ],
};

export const solutionProcessContent = {
    badge: "Process",
    heading: "Our Solution Delivery Process",
    process: [
        {
        icon: "FaComments",
        title: "Discovery",
        desc: "Understand business goals, challenges, and opportunities.",
        },
        {
        icon: "FaClipboardList",
        title: "Planning",
        desc: "Prepare architecture, roadmap, timelines, and strategy.",
        },
        {
        icon: "FaCode",
        title: "Implementation",
        desc: "Develop, integrate, test, and deploy the complete solution.",
        },
        {
        icon: "FaRocket",
        title: "Optimization",
        desc: "Monitor, improve, and continuously support your business.",
        },
    ],
};

export const successStoriesContent = {
    badge: "Portfolio",
    heading: "Solution Success Stories",
    viewAllButton: {
        text: "View All",
        link: "/portfolio",
    },
    stories: [
        {
        title: "Digital ERP Platform",
        industry: "Manufacturing",
        description:
            "Complete business transformation with scalable, secure, and intelligent software.",
        gradient: "from-blue-500 to-cyan-500",
        },
        {
        title: "Hospital Management",
        industry: "Healthcare",
        description:
            "Complete business transformation with scalable, secure, and intelligent software.",
        gradient: "from-blue-500 to-cyan-500",
        },
        {
        title: "Learning Management",
        industry: "Education",
        description:
            "Complete business transformation with scalable, secure, and intelligent software.",
        gradient: "from-blue-500 to-cyan-500",
        },
    ],
};

export const solutionStatsContent = {
    stats: [
        {
        number: companyStats.overview[6].value,
        title: companyStats.overview[6].label,
        },
        {
        number: companyStats.overview[1].value,
        title: companyStats.overview[1].label,
        },
        {
        number: companyStats.overview[8].value,
        title: companyStats.overview[8].label,
        },
        {
        number: companyStats.overview[5].value,
        title: companyStats.overview[5].label,
        },
    ],
};

export const solutionsFAQContent = {
    heading: "Frequently Asked Questions",
    faqs: [
        {
        q: "Can solutions be customized?",
        a: "Yes. Every solution is tailored according to your business workflow and objectives.",
        },
        {
        q: "Can you integrate existing software?",
        a: "Absolutely. We integrate CRMs, ERPs, payment gateways, APIs, and third-party platforms.",
        },
        {
        q: "Do you provide post-launch support?",
        a: "Yes. We offer maintenance, monitoring, upgrades, and technical support.",
        },
        {
        q: "Are your solutions scalable?",
        a: "Yes. They are designed to grow with your business requirements.",
        },
    ],
};
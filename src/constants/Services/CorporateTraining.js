import {companyStats} from "../Stats.js"

export const corporateTrainingHeroContent = {
    badge: {
        text: "Corporate Training",
    },
    heading: {
        line1: "Build",
        line2: "High-Performance",
        highlightedText: "Teams",
    },
    description:
        "Upskill your workforce with industry-focused training programs designed by experienced professionals in software, AI, cloud, cybersecurity, and modern technologies.",
    buttons: [
        {
        text: "Schedule Training",
        link: "/Contact",
        type: "primary",
        },
        {
        text: "View Demo Session",
        link: "/Portfolio",
        type: "secondary",
        },
    ],
    stats: [
        {
        value: companyStats.corporateTraining[0].value,
        label: companyStats.corporateTraining[0].label,
        },
        {
        value: companyStats.corporateTraining[1].value,
        label: companyStats.corporateTraining[1].label,
        },
        {
        value: companyStats.corporateTraining[2].value,
        label: companyStats.corporateTraining[2].label,
        },
    ],
    courses: [
        {
        name: "AI & Automation",
        duration: "8 Weeks",
        level: "Advanced",
        enrolled: 234,
        },
        {
        name: "Full Stack Development",
        duration: "12 Weeks",
        level: "Intermediate",
        enrolled: 456,
        },
        {
        name: "Cloud Computing",
        duration: "6 Weeks",
        level: "Advanced",
        enrolled: 189,
        },
        {
        name: "Cyber Security",
        duration: "10 Weeks",
        level: "Expert",
        enrolled: 312,
        },
    ],
    dashboard: {
        title: "Live Training",
        subtitle: "Active Sessions",
        liveStatus: "Live",
        progress: {
        title: "Training Progress",
        subtitle: "Company-wide completion rate",
        value: "78%",
        change: "+12%",
        progressWidth: "78%",
        },
    },
    floatingCards: {
        award: {
        title: "Industry Certified",
        programs: "50+",
        label: "Programs",
        },
        students: {
        count: "2.4K+",
        label: "Active Learners",
        },
    },
};

export const corporateTrainingOverviewContent = {
    badge: "Overview",
    heading: "Empower Teams Through Continuous Learning",
    description:
        "We help organizations build future-ready teams through practical, project-based, and technology-driven corporate training programs.",
    cards: [
        {
        title: "Corporate Workshops",
        text: "Interactive instructor-led sessions tailored for organizations.",
        },
        {
        title: "Hands-on Learning",
        text: "Practical projects, assignments, and real-world case studies.",
        },
        {
        title: "Role-Based Training",
        text: "Customized learning paths for developers, managers, and teams.",
        },
        {
        title: "Certification",
        text: "Industry-recognized completion certificates for participants.",
        },
        {
        title: "Expert Trainers",
        text: "Sessions delivered by experienced software professionals.",
        },
        {
        title: "Updated Curriculum",
        text: "Training aligned with current technologies and market demands.",
        },
    ],
};

export const corporateTrainingOfferContent = {
    badge: "Programs",
    heading: "Training Programs We Offer",
    courses: [
        { title: "Full Stack Development" },
        { title: "Mobile App Development" },
        { title: "Artificial Intelligence" },
        { title: "Automation & RPA" },
        { title: "Cloud Computing" },
        { title: "Cyber Security" },
        { title: "Database Technologies" },
        { title: "DevOps & CI/CD" },
    ],
};

export const corporateTrainingTechnologiesContent = {
    badge: "Technologies",
    heading: "Learn Modern Technologies",
    stacks: [
        {
        title: "Programming",
        list: ["Java", "Python", "JavaScript", "C#", "Go"],
        },
        {
        title: "Frontend",
        list: ["React", "Next.js", "Angular", "Flutter", "React Native"],
        },
        {
        title: "Backend",
        list: ["Node.js", "Laravel", "Spring", ".NET", "Express"],
        },
        {
        title: "AI",
        list: ["OpenAI", "Gemini", "LangChain", "ML", "TensorFlow"],
        },
        {
        title: "Cloud",
        list: ["AWS", "Azure", "Docker", "Kubernetes", "Firebase"],
        },
        {
        title: "DevOps",
        list: ["Git", "CI/CD", "Terraform", "Jenkins", "GitHub Actions"],
        },
    ],
};

export const corporateTrainingIndustriesContent = {
    badge: {
        text: "Industries We Train",
    },
    heading: {
        line1: "Customized Training For",
        highlightedText: "Every Industry",
    },
    description:
        "Tailored learning solutions designed to address the unique challenges and technology needs of your specific industry sector.",
    industries: [
        {
        title: "Enterprise IT",
        desc: "Upskill software teams with modern technologies and engineering best practices.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
        borderColor: "border-blue-200",
        stats: "200+ Companies",
        },
        {
        title: "Manufacturing",
        desc: "Industry 4.0, ERP, automation, IoT, and digital transformation training.",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        borderColor: "border-orange-200",
        stats: "150+ Factories",
        },
        {
        title: "Healthcare",
        desc: "Healthcare software, cybersecurity, compliance, and digital healthcare systems.",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50",
        textColor: "text-pink-600",
        borderColor: "border-pink-200",
        stats: "100+ Hospitals",
        },
        {
        title: "Finance",
        desc: "Cloud security, fintech development, AI, and enterprise banking solutions.",
        color: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-200",
        stats: "80+ Banks",
        },
        {
        title: "Education",
        desc: "Faculty development, AI literacy, LMS, and educational technologies.",
        color: "from-violet-500 to-indigo-500",
        bgColor: "bg-violet-50",
        textColor: "text-violet-600",
        borderColor: "border-violet-200",
        stats: "300+ Institutions",
        },
        {
        title: "Retail",
        desc: "Digital commerce, CRM, analytics, and customer experience technologies.",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        textColor: "text-amber-600",
        borderColor: "border-amber-200",
        stats: "120+ Retailers",
        },
        {
        title: "Sports",
        desc: "Sports analytics, live scoring systems, and digital engagement platforms.",
        color: "from-sky-500 to-blue-500",
        bgColor: "bg-sky-50",
        textColor: "text-sky-600",
        borderColor: "border-sky-200",
        stats: "50+ Organizations",
        },
        {
        title: "Startups",
        desc: "Accelerated learning paths for rapidly growing technology startups.",
        color: "from-slate-700 to-slate-900",
        bgColor: "bg-slate-50",
        textColor: "text-slate-600",
        borderColor: "border-slate-200",
        stats: "500+ Startups",
        },
    ],
    cta: {
        title: "Don't see your industry?",
        subtitle: "We create custom training programs for any sector",
        button: {
        text: "Request Custom Program",
        },
    },
};

export const corporateTrainingPortfolioContent = {
    badge: "Success Programs",
    heading: "Corporate Training Portfolio",
    portfolio: [
        {
        title: "Enterprise AI Bootcamp",
        duration: "6 Weeks",
        participants: "180 Employees",
        outcome: "AI Adoption Across Teams",
        },
        {
        title: "Full Stack Developer Program",
        duration: "12 Weeks",
        participants: "85 Engineers",
        outcome: "Production-Ready Developers",
        },
        {
        title: "Cloud Migration Workshop",
        duration: "5 Days",
        participants: "120 Professionals",
        outcome: "AWS Certified Teams",
        },
        {
        title: "Cyber Security Awareness",
        duration: "3 Days",
        participants: "600 Employees",
        outcome: "Reduced Security Risks",
        },
    ],
};

export const corporateTrainingCaseStudyContent = {
    badge: "Case Study",
    heading: "Workforce Transformation Journey",
    phases: [
        {
        title: "Skill Assessment",
        text: "Evaluate existing technical skills and identify learning gaps.",
        },
        {
        title: "Customized Curriculum",
        text: "Create a role-specific learning roadmap aligned with business goals.",
        },
        {
        title: "Hands-on Training",
        text: "Interactive workshops, live coding sessions, labs, and real projects.",
        },
        {
        title: "Business Impact",
        text: "Higher productivity, faster delivery, and improved technical capabilities.",
        },
    ],
};

export const corporateTrainingFAQContent = {
    heading: "Frequently Asked Questions",
    faqs: [
        {
        question: "Can the training be customized for our company?",
        answer:
            "Yes. Every training program is customized based on your team's skills, technologies, business goals, and project requirements.",
        },
        {
        question: "Do you provide online and onsite training?",
        answer:
            "Yes. We offer classroom training, virtual instructor-led sessions, hybrid learning, and self-paced programs.",
        },
        {
        question: "Will participants receive certificates?",
        answer:
            "Yes. Participants receive industry-recognized completion certificates after successfully completing the training.",
        },
        {
        question: "Do you include hands-on projects?",
        answer:
            "Absolutely. Every program includes practical assignments, real-world projects, coding exercises, and assessments.",
        },
        {
        question: "Which technologies do you cover?",
        answer:
            "We cover Web Development, Mobile Apps, AI, Machine Learning, Cloud, DevOps, Cyber Security, UI/UX, Databases, and Enterprise Software.",
        },
    ],
};
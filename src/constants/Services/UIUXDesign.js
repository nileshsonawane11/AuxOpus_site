import {companyStats} from "../Stats.js";
import {uiuxPortfolio} from "../Projects.js";

export const uiuxHeroContent = {
  badge: {
    text: "UI/UX Design Services",
  },
  heading: {
    line1: "Design",
    highlightedText: "Experiences",
    line3: "People Love",
  },
  description:
    "We create intuitive digital experiences that combine beautiful interfaces, seamless usability, and user-centered design to help businesses increase engagement and conversions.",
  buttons: [
    {
      text: "Start Design Project",
      link: "/Contact",
      type: "primary",
    },
    {
      text: "View Portfolio",
      link: "/Portfolio",
      type: "secondary",
    },
  ],
  stats: [
    {
      value: companyStats.uiux[0].value,
      label: companyStats.uiux[0].label,
    },
    {
      value: companyStats.uiux[1].value,
      label: companyStats.uiux[1].label,
    },
    {
      value: companyStats.uiux[2].value,
      label: companyStats.uiux[2].label,
    },
  ],
  dashboard: {
    subtitle: "Live Design System",
    title: "Design Workspace",
    modules: [
      "Wireframing",
      "High-Fidelity UI",
      "Prototype Testing",
    ],
    moduleLabel: "Active Design Module",
  },
};

export const uiuxOverviewContent = {
  badge: "Overview",
  heading: "Creating Digital Experiences That Drive Results",
  description:
    "Great products begin with exceptional user experiences. Our UI/UX design process combines research, creativity, and usability testing to deliver products that users enjoy using.",
  features: [
    {
      title: "User-Centered Design",
      description:
        "Every interface is designed around user behavior, ensuring intuitive navigation and seamless interactions.",
    },
    {
      title: "Modern Interfaces",
      description:
        "Clean, scalable, and visually engaging interfaces tailored to your brand identity.",
    },
    {
      title: "Responsive Experience",
      description:
        "Optimized designs that deliver consistent experiences across desktop, tablet, and mobile devices.",
    },
    {
      title: "Interactive Prototypes",
      description:
        "Validate ideas early with clickable prototypes before development begins.",
    },
  ],
  whySection: {
    heading: "Why Invest in UI/UX?",
    description:
      "A well-designed interface improves customer satisfaction, strengthens your brand, and helps users achieve their goals with minimal effort.",
    benefits: [
      "Increase user engagement",
      "Improve conversion rates",
      "Reduce user frustration",
      "Strengthen brand identity",
      "Enhance usability",
      "Create consistent experiences",
    ],
  },
  designCard: {
    title: "Better Design = Better Business",
    description:
      "Businesses with user-focused products experience higher customer retention, increased engagement, improved conversions, and stronger long-term brand loyalty.",
  },
};

export const uiuxOfferContent = {
  badge: "What We Offer",
  heading: "Complete UI/UX Design Services",
  description:
    "From user research and wireframes to polished interfaces and design systems, we create digital experiences that users enjoy and businesses trust.",
  learnMoreButton: {
    text: "Learn More",
  },
  services: [
    {
      title: "UI Design",
      description:
        "Modern, visually engaging, and brand-consistent interfaces designed for web and mobile applications.",
    },
    {
      title: "UX Research",
      description:
        "User interviews, competitor analysis, journey mapping, and usability research to build better products.",
    },
    {
      title: "Mobile App Design",
      description:
        "Native Android and iOS interfaces focused on usability, accessibility, and delightful user experiences.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Adaptive interfaces optimized for desktops, tablets, laptops, and smartphones.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Low and high-fidelity wireframes with interactive prototypes before development begins.",
    },
    {
      title: "Design Systems",
      description:
        "Scalable component libraries, design tokens, typography, colors, icons, and reusable UI guidelines.",
    },
    {
      title: "Usability Testing",
      description:
        "Validate interfaces with real users to identify friction points and improve product usability.",
    },
    {
      title: "UX Optimization",
      description:
        "Improve engagement, conversions, and retention by optimizing existing digital experiences.",
    },
  ],
};

export const uiuxToolsContent = {
  badge: "Tools & Technologies",
  heading: "Our UI/UX Toolkit",
  description:
    "We use industry-leading design tools and proven methodologies to deliver scalable, intuitive, and user-friendly digital experiences.",
  categories: [
    {
      title: "Design Tools",
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Photoshop",
        "Illustrator",
        "Framer",
      ],
    },
    {
      title: "UX Research",
      tools: [
        "User Personas",
        "Journey Mapping",
        "User Interviews",
        "Information Architecture",
        "Competitor Analysis",
      ],
    },
    {
      title: "Design Deliverables",
      tools: [
        "Wireframes",
        "Mockups",
        "Interactive Prototype",
        "Design System",
        "Style Guide",
      ],
    },
    {
      title: "Frontend Ready",
      tools: [
        "Tailwind CSS",
        "Material UI",
        "Shadcn UI",
        "Bootstrap",
        "React Components",
      ],
    },
    {
      title: "Testing",
      tools: [
        "Usability Testing",
        "Accessibility",
        "Heatmaps",
        "A/B Testing",
        "Feedback Sessions",
      ],
    },
    {
      title: "Design Principles",
      tools: [
        "Consistency",
        "Accessibility",
        "Responsive Design",
        "Micro Interactions",
        "Visual Hierarchy",
      ],
    },
  ],
};

export const uiuxIndustriesContent = {
  badge: "Industries",
  heading: "Designing Experiences Across Industries",
  description:
    "Every industry has unique users and challenges. We design tailored experiences that improve usability, engagement, and business performance.",
  exploreButton: {
    text: "Explore",
  },
  industries: [
    {
      title: "E-Commerce",
      description:
        "High-converting shopping experiences with intuitive navigation, seamless checkout flows, and personalized product discovery.",
      tags: ["Marketplace", "Checkout", "Product Pages"],
    },
    {
      title: "Healthcare",
      description:
        "Accessible and user-friendly healthcare platforms, appointment systems, patient portals, and telemedicine applications.",
      tags: ["Patient Portal", "Telemedicine", "EMR UI"],
    },
    {
      title: "Finance",
      description:
        "Secure, trustworthy, and intuitive banking dashboards, fintech platforms, and investment applications.",
      tags: ["Banking", "FinTech", "Insurance"],
    },
    {
      title: "Education",
      description:
        "Interactive LMS platforms, online learning portals, student dashboards, and educational mobile applications.",
      tags: ["LMS", "E-Learning", "Student Portal"],
    },
    {
      title: "Manufacturing",
      description:
        "Industrial dashboards, production monitoring systems, inventory management, and ERP interfaces.",
      tags: ["ERP", "Production", "Analytics"],
    },
    {
      title: "Enterprise",
      description:
        "Modern SaaS products, CRM systems, HRMS platforms, and enterprise software with exceptional usability.",
      tags: ["CRM", "HRMS", "SaaS"],
    },
    {
      title: "Hospitality",
      description:
        "Hotel booking systems, restaurant management, travel platforms, and guest experience applications.",
      tags: ["Hotels", "Travel", "Booking"],
    },
    {
      title: "Sports",
      description:
        "Sports management platforms, live scoring systems, athlete dashboards, and fan engagement applications.",
      tags: ["Live Score", "Analytics", "Events"],
    },
  ],
};

export const uiuxPortfolioContent = {
  badge: "Portfolio",
  heading: "Featured UI/UX Projects",
  description:
    "Explore a selection of user-centered interfaces crafted to solve real-world challenges and deliver measurable business outcomes.",
  viewProjectButton: {
    text: "View Project",
  },
  projects: uiuxPortfolio,
};

export const uiuxCaseStudyContent = {
  badge: "Case Study",
  heading: "E-Commerce Platform Redesign",
  description:
    "Transforming an outdated online shopping experience into a modern, user-focused platform that significantly increased engagement and conversions.",
  client: {
    title: "Client Overview",
    subtitle: "Retail & E-Commerce Brand",
    challenges: [
      "High bounce rate due to confusing navigation",
      "Outdated UI with inconsistent branding",
      "Poor mobile experience affecting conversions",
      "Complex checkout flow causing cart abandonment",
    ],
  },
  solution: {
    title: "Design Solution",
    subtitle: "User-Centered Design Process",
    solutions: [
      "Complete UX research and competitor analysis",
      "Redesigned information architecture",
      "Modern responsive interface",
      "Interactive prototype and usability testing",
      "Optimized checkout experience",
      "Built reusable design system",
    ],
  },
  results: {
    title: "Project Results",
    stats: [
      {
        value: companyStats.uiux[3].value,
        label: companyStats.uiux[3].label,
      },
      {
        value: companyStats.uiux[1].value,
        label: companyStats.uiux[1].label,
      },
      {
        value: companyStats.uiux[0].value,
        label: companyStats.uiux[0].label,
      },
      {
        value: companyStats.uiux[5].value,
        label: companyStats.uiux[5].label,
      },
    ],
  },
  tools: {
    title: "Tools Used",
    items: [
      "Figma",
      "Adobe XD",
      "FigJam",
      "Maze",
      "Tailwind CSS",
      "React",
    ],
  },
};

export const uiuxFAQContent = {
  badge: "FAQ",
  heading: "Frequently Asked Questions",
  description: "Everything you need to know about our UI/UX Design services.",
  faqs: [
    {
      question: "Why is UI/UX design important?",
      answer:
        "Good UI/UX improves usability, increases customer satisfaction, strengthens brand perception, and helps businesses achieve higher conversion rates.",
    },
    {
      question: "Do you design for both web and mobile?",
      answer:
        "Yes. We create responsive web interfaces, Android apps, iOS apps, SaaS dashboards, enterprise software, and cross-platform experiences.",
    },
    {
      question: "Which design tools do you use?",
      answer:
        "We primarily use Figma, Adobe XD, FigJam, Photoshop, Illustrator, and other industry-standard collaboration tools.",
    },
    {
      question: "Will I receive editable design files?",
      answer:
        "Yes. Upon project completion, you'll receive organized Figma files, design systems, assets, prototypes, and documentation.",
    },
    {
      question: "Can you redesign an existing product?",
      answer:
        "Absolutely. We perform UX audits, identify usability issues, modernize interfaces, and optimize user journeys while preserving your business goals.",
    },
    {
      question: "Do developers receive implementation support?",
      answer:
        "Yes. We provide developer-ready assets, component specifications, responsive layouts, and ongoing collaboration throughout development.",
    },
  ],
};
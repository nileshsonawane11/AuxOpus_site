import {webPortfolio} from '../Projects.js';

export const webHeroContent = {
  badge: {
    text: "Web Design & Development",
  },
  heading: {
    line1: "Build Websites",
    highlightedText: "That Grow Businesses",
  },
  description:
    "We design modern, responsive and scalable websites that improve user experience, strengthen your brand and generate measurable business growth.",
  buttons: [
    {
      text: "Start Your Project",
      link: "/contact",
      type: "primary",
    },
    {
      text: "View Portfolio",
      link: "/portfolio",
      type: "secondary",
    },
  ],
  dashboardCard: {
    gradient: "from-blue-600 to-cyan-400",
    img: "", // Add image path here, or leave empty for gradient
    alt: "Web Development Dashboard",
  },
  floatingCards: [
    {
      icon: "FaGlobe",
      title: "Responsive Design",
      color: "text-blue-600",
      position: "right-0 top-20",
    },
    {
      icon: "FaServer",
      title: "Secure Backend",
      color: "text-cyan-600",
      position: "bottom-10 left-10",
    },
    {
      icon: "FaCode",
      title: "Clean Code",
      color: "text-indigo-600",
      position: "bottom-16 right-10",
    },
  ],
};

export const webOverviewContent = {
  badge: "Overview",
  heading: "Professional Web Development Services",
  description:
    "Your website is the digital face of your business. At AuxOpus, we create fast, secure, scalable, and user-friendly websites that help organizations establish a strong online presence while improving customer engagement and business growth.",
  cards: [
    {
      title: "What",
      description:
        "Custom websites, web applications, ERP systems, portals and enterprise platforms.",
      bgColor: "bg-blue-50",
    },
    {
      title: "Why",
      description:
        "Increase visibility, automate operations, generate leads and improve customer experience.",
      bgColor: "bg-cyan-50",
    },
    {
      title: "Who",
      description:
        "Startups, SMEs, Enterprises, Healthcare, Education, Government, Retail and Manufacturing.",
      bgColor: "bg-indigo-50",
    },
  ],
};

export const webOfferContent = {
  heading: "What We Offer",
  services: [
    {
      icon: "FaBuilding",
      title: "Corporate Websites",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaBriefcase",
      title: "Business Websites",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaCartShopping",
      title: "E-Commerce",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaGlobe",
      title: "Landing Pages",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaCode",
      title: "Web Applications",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaDatabase",
      title: "ERP & CRM",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaMobileScreen",
      title: "Progressive Web Apps",
      description: "Custom solutions designed for your business growth.",
    },
    {
      icon: "FaServer",
      title: "API Development",
      description: "Custom solutions designed for your business growth.",
    },
  ],
};

export const webTechnologiesContent = {
  heading: "Technologies We Use",
  categories: [
    {
      title: "Frontend",
      technologies: [
        { icon: "FaReact", library: "fa6", name: "React", color: "text-cyan-500" },
        { icon: "SiNextdotjs", library: "si", name: "Next.js", color: "" },
        { icon: "FaVuejs", library: "fa6", name: "Vue", color: "text-green-600" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { icon: "FaNodeJs", library: "fa6", name: "Node.js", color: "text-green-600" },
        { icon: "SiPhp", library: "si", name: "PHP", color: "" },
        { icon: "FaLaravel", library: "fa6", name: "Laravel", color: "text-red-500" },
        { icon: "SiSpringboot", library: "si", name: "Spring Boot", color: "text-green-600" },
      ],
    },
    {
      title: "Database",
      technologies: [
        { icon: "SiMongodb", library: "si", name: "MongoDB", color: "text-green-600" },
        { icon: "SiMysql", library: "si", name: "MySQL", color: "text-blue-600" },
        { icon: "SiPostgresql", library: "si", name: "PostgreSQL", color: "text-sky-600" },
      ],
    },
    {
      title: "Cloud",
      technologies: [
        { icon: "FaAws", library: "fa6", name: "AWS", color: "text-orange-500" },
        { icon: "FaDocker", library: "fa6", name: "Docker", color: "text-blue-500" },
      ],
    },
  ],
};

export const webIndustriesContent = {
  heading: "Industries We Serve",
  industries: [
    {
      name: "Healthcare",
      description: "Customized web solutions tailored for the healthcare industry.",
    },
    {
      name: "Education",
      description: "Customized web solutions tailored for the education industry.",
    },
    {
      name: "Finance",
      description: "Customized web solutions tailored for the finance industry.",
    },
    {
      name: "Retail",
      description: "Customized web solutions tailored for the retail industry.",
    },
    {
      name: "Manufacturing",
      description: "Customized web solutions tailored for the manufacturing industry.",
    },
    {
      name: "Real Estate",
      description: "Customized web solutions tailored for the real estate industry.",
    },
    {
      name: "Government",
      description: "Customized web solutions tailored for the government industry.",
    },
    {
      name: "Startups",
      description: "Customized web solutions tailored for the startups industry.",
    },
  ],
};

export const webPortfolioContent = {
  badge: "Portfolio",
  heading: "Recent Web Projects",
  viewAllButton: {
    text: "View All",
    link: "/portfolio",
  },
  projects: webPortfolio,
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

export const webCaseStudyContent = {
  badge: "Case Study",
  heading: "From Challenge To Success",
  sections: [
    {
      icon: "FaCircleExclamation",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      title: "Problem",
      description:
        "Client had an outdated website, slow loading speed, poor SEO and no lead generation.",
    },
    {
      icon: "FaLightbulb",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Solution",
      description:
        "Built a responsive React platform with CMS, SEO optimization, analytics and cloud hosting.",
    },
    {
      icon: "FaChartLine",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Result",
      description:
        "3x more traffic, 65% faster loading, increased conversions, improved customer engagement.",
    },
  ],
};

export const webFAQContent = {
  badge: "FAQs",
  heading: "Frequently Asked Questions",
  faqs: [
    {
      q: "How long does a website take?",
      a: "Usually 2–8 weeks depending on project complexity.",
    },
    {
      q: "Will my website be mobile responsive?",
      a: "Yes, every website is fully responsive.",
    },
    {
      q: "Can you redesign existing websites?",
      a: "Yes, we modernize outdated websites.",
    },
    {
      q: "Do you provide SEO?",
      a: "Basic SEO is included in every project.",
    },
    {
      q: "Can you build custom ERP portals?",
      a: "Yes, completely customized solutions.",
    },
    {
      q: "Which technologies do you use?",
      a: "React, Laravel, Node, PHP, Spring Boot and more.",
    },
    {
      q: "Do you provide hosting?",
      a: "Yes, cloud deployment and hosting support.",
    },
    {
      q: "Will I get source code?",
      a: "Yes after project completion.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes, annual and monthly maintenance plans.",
    },
    {
      q: "Can you integrate APIs?",
      a: "Yes, payment gateways, CRM, ERP and third-party APIs.",
    },
  ],
};
import {companyStats} from "../Stats.js"
import {maintenanceSupportPortfolio} from "../Projects.js"

export const maintenanceSupportHeroContent = {
  badge: {
    text: "Maintenance & Support",
  },
  heading: {
    line1: "Keep Your",
    highlightedText: "Business Running",
    line3: "Without Downtime",
  },
  description:
    "Continuous monitoring, proactive maintenance, rapid issue resolution, and dedicated technical support that keeps your applications secure, optimized, and always available.",
  buttons: [
    {
      text: "Get Support",
      link: "/Contact",
      type: "primary",
    },
    {
      text: "View SLA",
      link: "/Portfolio",
      type: "secondary",
    },
  ],
  metrics: [
    {
      value: companyStats.maintenanceSupport[0].value,
      label: companyStats.maintenanceSupport[0].label,
    },
    {
      value: companyStats.maintenanceSupport[1].value,
      label: companyStats.maintenanceSupport[1].label,
    },
    {
      value: companyStats.maintenanceSupport[2].value,
      label: companyStats.maintenanceSupport[2].label,
    },
  ],
  dashboard: {
    title: "Live System Status",
    subtitle: "Infrastructure Monitoring",
    services: [
      "Infrastructure Monitoring",
      "Application Support",
      "Security Updates",
      "Performance Optimization",
    ],
    statusText: "Active",
  },
};

export const maintenanceSupportOverviewContent = {
  badge: "Overview",
  heading: "Reliable Support Beyond Deployment",
  description:
    "Launching software is only the beginning. Our maintenance services ensure your systems remain secure, stable, fast, and available as your business grows.",
  cards: [
    {
      title: "Security Maintenance",
      description:
        "Regular patching, security audits, vulnerability fixes, and infrastructure hardening.",
    },
    {
      title: "24×7 Monitoring",
      description:
        "Continuous monitoring of servers, databases, APIs, and cloud infrastructure.",
    },
    {
      title: "Preventive Maintenance",
      description:
        "Identify issues before they become failures through proactive maintenance.",
    },
    {
      title: "Rapid Incident Response",
      description:
        "Dedicated support engineers minimize downtime with quick issue resolution.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve application speed, scalability, and infrastructure efficiency.",
    },
    {
      title: "Bug Fixes & Enhancements",
      description:
        "Continuous improvements, feature updates, and issue resolution after deployment.",
    },
  ],
};

export const maintenanceSupportOfferContent = {
  badge: "What We Offer",
  heading: "Complete Support Services",
  exploreButton: {
    text: "Explore",
  },
  offers: [
    {
      title: "Server Management",
    },
    {
      title: "Database Maintenance",
    },
    {
      title: "Security Monitoring",
    },
    {
      title: "Cloud Infrastructure",
    },
    {
      title: "Software Updates",
    },
    {
      title: "Backup & Recovery",
    },
    {
      title: "Technical Support",
    },
    {
      title: "Performance Monitoring",
    },
  ],
};

export const maintenanceSupportTechnologiesContent = {
  heading: "Technologies We Support",
  stacks: [
    {
      title: "Infrastructure",
      items: ["Linux", "Windows Server", "Nginx", "Apache", "Docker"],
    },
    {
      title: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQL Server"],
    },
    {
      title: "Security",
      items: ["Cloudflare", "SSL", "Firewall", "WAF", "Fail2Ban"],
    },
    {
      title: "Monitoring",
      items: ["Grafana", "Prometheus", "UptimeRobot", "Sentry", "LogRocket"],
    },
    {
      title: "DevOps",
      items: ["GitHub Actions", "Jenkins", "Kubernetes", "Terraform", "Ansible"],
    },
  ],
};

export const maintenanceSupportIndustriesContent = {
  badge: "Industries",
  heading: "Trusted Across Multiple Industries",
  description:
    "We ensure mission-critical applications remain secure, available, and optimized regardless of industry.",
  industries: [
    {
      title: "Healthcare",
      color: "bg-red-50 text-red-600",
      description:
        "24/7 support for hospital systems, EMR platforms, telemedicine applications, and healthcare infrastructure.",
    },
    {
      title: "Finance",
      color: "bg-emerald-50 text-emerald-600",
      description:
        "Secure maintenance for banking systems, payment gateways, fintech platforms, and compliance updates.",
    },
    {
      title: "Retail & E-Commerce",
      color: "bg-orange-50 text-orange-600",
      description:
        "Ensure uninterrupted shopping experiences with infrastructure monitoring and rapid incident response.",
    },
    {
      title: "Manufacturing",
      color: "bg-blue-50 text-blue-600",
      description:
        "Maintain ERP systems, production monitoring software, IoT infrastructure, and analytics platforms.",
    },
    {
      title: "Education",
      color: "bg-violet-50 text-violet-600",
      description:
        "Support LMS platforms, online examination portals, ERP systems, and digital classrooms.",
    },
    {
      title: "Hospitality",
      color: "bg-cyan-50 text-cyan-600",
      description:
        "Continuous monitoring for booking engines, hotel management systems, and POS solutions.",
    },
    {
      title: "Sports",
      color: "bg-amber-50 text-amber-600",
      description:
        "Maintain live scoring platforms, tournament systems, broadcasting APIs, and fan engagement apps.",
    },
    {
      title: "Enterprise",
      color: "bg-slate-100 text-slate-700",
      description:
        "End-to-end support for CRM, HRMS, ERP, cloud infrastructure, and enterprise software ecosystems.",
    },
  ],
};

export const maintenanceSupportPortfolioContent = {
  badge: "Success Stories",
  heading: "Proven Maintenance Excellence",
  projects: maintenanceSupportPortfolio,
};

export const maintenanceSupportCaseStudyContent = {
  badge: "Case Study",
  heading: "Enterprise Infrastructure Transformation",
  timeline: [
    {
      phase: "Challenge",
      text: "Frequent outages, slow response times, and unplanned downtime affecting business operations.",
    },
    {
      phase: "Assessment",
      text: "Infrastructure audit, performance profiling, security assessment, and monitoring implementation.",
    },
    {
      phase: "Solution",
      text: "Implemented proactive monitoring, automated backups, server optimization, and security hardening.",
    },
    {
      phase: "Outcome",
      text: "99.99% uptime, 70% faster incident resolution, and significant reduction in operational risks.",
    },
  ],
};

export const maintenanceSupportFAQContent = {
  heading: "Frequently Asked Questions",
  faqs: [
    {
      q: "Do you provide 24×7 technical support?",
      a: "Yes. Our support team continuously monitors your infrastructure and responds quickly to critical incidents.",
    },
    {
      q: "Do you support cloud infrastructure?",
      a: "Yes. We maintain AWS, Azure, Google Cloud, DigitalOcean, and hybrid cloud environments.",
    },
    {
      q: "Can you maintain software developed by another company?",
      a: "Absolutely. We perform audits, understand the architecture, and provide ongoing maintenance regardless of the original developer.",
    },
    {
      q: "Do you provide SLA-based support?",
      a: "Yes. We offer customizable Service Level Agreements based on your business requirements.",
    },
    {
      q: "What is included in maintenance?",
      a: "Bug fixes, monitoring, backups, security updates, performance optimization, infrastructure management, and technical support.",
    },
  ],
};
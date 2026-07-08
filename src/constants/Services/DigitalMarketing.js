import {companyStats} from "../Stats.js"

export const digitalMarketingHeroContent = {
  badge: {
    text: "Digital Marketing Services",
  },
  heading: {
    line1: "Grow Faster",
    highlightedText: "With Data-Driven Marketing",
  },
  description:
    "Increase traffic, generate qualified leads, improve brand awareness, and maximize ROI with modern digital marketing strategies tailored to your business.",
  buttons: [
    {
      text: "Start Campaign",
      link: "/Contact",
      type: "primary",
    },
    {
      text: "View Success Stories",
      link: "/Portfolio",
      type: "secondary",
    },
  ],
  stats: [
    { value: companyStats.digitalMarketing[0].value, label: companyStats.digitalMarketing[0].label },
    { value: companyStats.digitalMarketing[1].value, label: companyStats.digitalMarketing[1].label },
    { value: companyStats.digitalMarketing[2].value, label: companyStats.digitalMarketing[2].label },
  ],
  dashboard: {
    subtitle: "Marketing Dashboard",
    title: "Campaign Analytics",
    metrics: [
      { label: "Reach", value: "2.4M", change: "+12%" },
      { label: "Conversions", value: "48.5K", change: "+24%" },
      { label: "CTR", value: "3.2%", change: "+8%" },
    ],
    performance: {
      title: "Performance Trend",
      subtitle: "Last 30 days",
      change: "+28.5%",
      graphData: [45, 52, 48, 65, 58, 72, 68, 78, 85, 82, 90, 96],
      weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    campaigns: [
      { name: "SEO Performance", status: "Active", progress: 85 },
      { name: "Paid Advertising", status: "Optimizing", progress: 92 },
      { name: "Social Media Growth", status: "Growing", progress: 78 },
    ],
  },
};

export const digitalMarketingOverviewContent = {
  badge: "Overview",
  heading: "Digital Marketing That Delivers Real Business Growth",
  description:
    "Our data-driven marketing strategies combine SEO, paid advertising, content marketing, email campaigns, and analytics to maximize your online presence and revenue.",
  features: [
    {
      title: "SEO Optimization",
      description:
        "Improve search rankings and attract high-quality organic traffic with technical and content-driven SEO.",
    },
    {
      title: "Paid Advertising",
      description:
        "Run high-converting campaigns on Google Ads, Meta Ads, LinkedIn, and other advertising platforms.",
    },
    {
      title: "Social Media Growth",
      description:
        "Build a strong brand presence and engage your audience through strategic social media marketing.",
    },
    {
      title: "Performance Analytics",
      description:
        "Track every campaign using advanced analytics to continuously improve ROI and conversions.",
    },
  ],
  whySection: {
    heading: "Why Digital Marketing Matters",
    description:
      "Effective digital marketing helps businesses connect with the right audience, generate measurable results, and stay ahead in an increasingly competitive online marketplace.",
    benefits: [
      "Increase website traffic",
      "Generate quality leads",
      "Improve brand awareness",
      "Boost online sales",
      "Increase customer engagement",
      "Measure marketing ROI",
    ],
  },
  dataCard: {
    title: "Marketing Backed By Data",
    description:
      "Every campaign is planned, monitored, optimized, and measured using real-time analytics to ensure sustainable growth and maximum return on investment.",
  },
};

export const digitalMarketingOfferContent = {
  badge: "What We Offer",
  heading: "Complete Digital Marketing Services",
  description:
    "From SEO and paid advertising to social media and analytics, we provide end-to-end digital marketing solutions that drive measurable business growth.",
  learnMoreButton: {
    text: "Learn More",
  },
  services: [
    {
      title: "Search Engine Optimization",
      description:
        "Improve rankings, increase organic traffic, optimize technical SEO, and enhance website visibility.",
    },
    {
      title: "Google & Meta Ads",
      description:
        "Launch ROI-focused advertising campaigns across Google, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your audience through engaging content, campaigns, and consistent brand communication.",
    },
    {
      title: "Content Marketing",
      description:
        "Create blogs, landing pages, case studies, and SEO content that attracts and converts customers.",
    },
    {
      title: "Email Marketing",
      description:
        "Automated email campaigns, newsletters, customer nurturing, and lead engagement strategies.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor KPIs, campaign performance, conversions, and customer behavior with detailed reports.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Optimize landing pages, CTAs, funnels, and user journeys to maximize conversions.",
    },
    {
      title: "Brand Strategy",
      description:
        "Develop digital branding strategies that strengthen awareness, trust, and long-term customer loyalty.",
    },
  ],
};

export const digitalMarketingTechnologiesContent = {
  badge: "Tools & Platforms",
  heading: "Marketing Technology Stack",
  description:
    "We leverage industry-leading marketing platforms, analytics tools, and automation software to maximize campaign performance and measurable growth.",
  categories: [
    {
      title: "SEO Tools",
      tools: [
        "Google Search Console",
        "Ahrefs",
        "SEMrush",
        "Moz",
        "Screaming Frog",
        "Ubersuggest",
      ],
    },
    {
      title: "Analytics",
      tools: [
        "Google Analytics 4",
        "Looker Studio",
        "Google Tag Manager",
        "Hotjar",
        "Mixpanel",
      ],
    },
    {
      title: "Advertising",
      tools: [
        "Google Ads",
        "Meta Ads",
        "LinkedIn Ads",
        "YouTube Ads",
        "Microsoft Ads",
      ],
    },
    {
      title: "Marketing Automation",
      tools: [
        "HubSpot",
        "Mailchimp",
        "Brevo",
        "Zoho Campaigns",
        "ActiveCampaign",
      ],
    },
    {
      title: "Content & Social",
      tools: [
        "Canva",
        "Buffer",
        "Hootsuite",
        "WordPress",
        "Notion",
      ],
    },
    {
      title: "Performance",
      tools: [
        "A/B Testing",
        "Heatmaps",
        "Funnel Analysis",
        "Conversion Tracking",
        "ROI Reporting",
      ],
    },
  ],
};

export const digitalMarketingIndustriesContent = {
  badge: "Industries",
  heading: "Marketing Solutions for Every Industry",
  description:
    "Every industry has different audiences and buying behaviors. We create personalized marketing strategies that deliver measurable business growth.",
  exploreButton: {
    text: "Explore",
  },
  industries: [
    {
      title: "E-Commerce",
      description:
        "Increase online sales through SEO, paid advertising, conversion optimization, and remarketing campaigns.",
      tags: ["SEO", "Google Ads", "Meta Ads"],
    },
    {
      title: "Education",
      description:
        "Generate student inquiries using digital campaigns, local SEO, and content marketing strategies.",
      tags: ["Lead Generation", "LMS", "Admissions"],
    },
    {
      title: "Healthcare",
      description:
        "Build trust and attract patients through local SEO, healthcare marketing, and reputation management.",
      tags: ["Local SEO", "Appointments", "Branding"],
    },
    {
      title: "Finance",
      description:
        "Reach qualified audiences with compliant digital campaigns and performance-focused advertising.",
      tags: ["FinTech", "Banking", "Insurance"],
    },
    {
      title: "Manufacturing",
      description:
        "Generate B2B leads using LinkedIn marketing, SEO, and industrial branding strategies.",
      tags: ["B2B", "Industrial", "Lead Gen"],
    },
    {
      title: "Hospitality",
      description:
        "Drive bookings with local SEO, travel campaigns, influencer marketing, and social media promotions.",
      tags: ["Hotels", "Travel", "Restaurants"],
    },
    {
      title: "Enterprise",
      description:
        "Scale SaaS products and enterprise brands through account-based marketing and performance campaigns.",
      tags: ["SaaS", "CRM", "Enterprise"],
    },
    {
      title: "Sports",
      description:
        "Boost fan engagement, ticket sales, sponsorship visibility, and event registrations through digital channels.",
      tags: ["Events", "Live Sports", "Community"],
    },
  ],
};

export const digitalMarketingPortfolioContent = {
  badge: "Portfolio",
  heading: "Marketing Success Stories",
  description:
    "Discover how our digital marketing strategies have helped businesses improve visibility, generate qualified leads, and achieve measurable growth.",
  viewCaseStudyButton: {
    text: "View Case Study",
  },
  projects: [
    {
      title: "E-Commerce Growth Campaign",
      category: "SEO + PPC",
      description:
        "Executed a full-funnel SEO and paid advertising strategy to increase online sales and reduce acquisition costs.",
      result: "+310% Organic Traffic",
    },
    {
      title: "University Lead Generation",
      category: "Education Marketing",
      description:
        "Designed multi-channel campaigns that significantly increased admission inquiries and enrollment applications.",
      result: "+180% Student Leads",
    },
    {
      title: "Healthcare Digital Presence",
      category: "Local SEO",
      description:
        "Improved search visibility, online reputation, and appointment bookings for a healthcare provider.",
      result: "+240% Appointment Requests",
    },
    {
      title: "B2B SaaS Marketing",
      category: "Performance Marketing",
      description:
        "Generated qualified enterprise leads using LinkedIn Ads, content marketing, and landing page optimization.",
      result: "4.9X Marketing ROI",
    },
    {
      title: "Brand Awareness Campaign",
      category: "Social Media",
      description:
        "Built a strong digital presence through strategic content creation, influencer partnerships, and social campaigns.",
      result: "12M+ Reach",
    },
  ],
};

export const digitalMarketingCaseStudyContent = {
  badge: "Case Study",
  heading: "Scaling an E-Commerce Brand with Digital Marketing",
  description:
    "Learn how our integrated SEO, paid advertising, and conversion optimization strategy transformed an online business into a high-performing digital brand.",
  client: {
    title: "Client Overview",
    subtitle: "E-Commerce Retail Company",
    challenges: [
      "Low organic search visibility",
      "High customer acquisition cost",
      "Poor conversion rate on landing pages",
      "Minimal brand awareness in target market",
    ],
  },
  solution: {
    title: "Marketing Strategy",
    subtitle: "Performance-Driven Campaigns",
    solutions: [
      "Comprehensive SEO optimization",
      "Google Ads & Meta Ads campaigns",
      "Landing page redesign and CRO",
      "Content marketing strategy",
      "Email automation campaigns",
      "Weekly analytics and campaign optimization",
    ],
  },
  results: {
    title: "Campaign Results",
    stats: [
      {
        value: companyStats.digitalMarketing[3].value,
        label: companyStats.digitalMarketing[3].label,
      },
      {
        value: companyStats.digitalMarketing[6].value,
        label: companyStats.digitalMarketing[6].label,
      },
      {
        value: companyStats.digitalMarketing[4].value,
        label: companyStats.digitalMarketing[4].label,
      },
      {
        value: companyStats.digitalMarketing[5].value,
        label: companyStats.digitalMarketing[5].label,
      },
    ],
  },
  tools: {
    title: "Platforms & Tools",
    items: [
      "Google Analytics 4",
      "Google Ads",
      "Meta Ads",
      "Search Console",
      "SEMrush",
      "Looker Studio",
    ],
  },
};

export const digitalMarketingFAQContent = {
  badge: "FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Answers to common questions about our Digital Marketing services.",
  faqs: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy. Depending on competition and website authority, noticeable improvements typically begin within 3–6 months.",
    },
    {
      question: "Do you manage Google Ads and Meta Ads?",
      answer:
        "Yes. We create, manage, optimize, and monitor campaigns across Google Ads, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      question: "Can you help generate more leads for my business?",
      answer:
        "Absolutely. Our strategies focus on attracting qualified traffic, improving conversion rates, and maximizing lead generation.",
    },
    {
      question: "Will I receive campaign reports?",
      answer:
        "Yes. We provide detailed performance reports including traffic, conversions, ROI, ad spend, and actionable recommendations.",
    },
    {
      question: "Do you offer social media management?",
      answer:
        "Yes. We create content calendars, manage social platforms, run paid campaigns, and analyze engagement metrics.",
    },
    {
      question: "Can digital marketing help local businesses?",
      answer:
        "Definitely. Local SEO, Google Business Profile optimization, and targeted advertising are highly effective for local businesses.",
    },
  ],
};
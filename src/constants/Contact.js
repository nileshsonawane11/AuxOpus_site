
export const contactInfoContent = {
    heading: "Contact Information",
    description:
        "Reach out through any of the following channels. We're always happy to discuss your ideas.",
    contactMethods: [
        {
        icon: "FaLocationDot",
        title: "Office",
        value: "Plot 5B, Mahavir Nagar, B/H Bright Eng Med School, Shindkheda, Dhule- 425406, Maharashtra, India",
        },
        {
        icon: "FaPhone",
        title: "Phone",
        value: "+917378698790",
        },
        {
        icon: "FaEnvelope",
        title: "Email",
        value: "auxopus.team@gmail.com",
        },
        {
        icon: "FaClock",
        title: "Working Hours",
        value: "Monday - Saturday | 9:00 AM - 7:00 PM",
        },
    ],
};

export const contactHeroContent = {
    badge: {
        text: "Contact AuxOpus",
        icon: "FaEnvelopeOpenText",
    },
    heading: {
        line1: "Let's Build",
        highlightedText: "Something Amazing",
    },
    description:
        "Whether you're planning a new project, looking for technology consulting, or simply have a question, our team is ready to help.",
    quickStats: [
        {
        icon: "FaClock",
        text: "Response within 2 hours",
        },
        {
        icon: "FaHeadset",
        text: "24/7 Support Available",
        },
    ],
    floatingCards: [
        {
        icon: "FaPhone",
        title: "Call Us",
        value: contactInfoContent.contactMethods[1].value,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        },
        {
        icon: "FaMessage",
        title: "Email Us",
        value: contactInfoContent.contactMethods[2].value,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        },
        {
        icon: "FaLocationDot",
        title: "Visit Us",
        value: contactInfoContent.contactMethods[0].value,
        color: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        },
    ],
    centralCard: {
        icon: "FaHeadset",
        title: "Get in Touch",
        description:
        "Our team is ready to discuss your project and provide tailored solutions.",
        button: {
        text: "Start Conversation",
        arrow: "→",
        },
    },
};

export const contactFormContent = {
    heading: "Send Us a Message",
    description:
        "Fill in the form below and our team will get back to you shortly.",
    fields: [
        {
        type: "text",
        name: "fullName",
        placeholder: "Full Name",
        required: true,
        grid: "md:grid-cols-2",
        },
        {
        type: "email",
        name: "email",
        placeholder: "Email Address",
        required: true,
        grid: "md:grid-cols-2",
        },
        {
        type: "text",
        name: "phone",
        placeholder: "Phone Number",
        required: false,
        grid: "md:grid-cols-2",
        },
        {
        type: "text",
        name: "company",
        placeholder: "Company Name",
        required: false,
        grid: "md:grid-cols-2",
        },
        {
        type: "text",
        name: "subject",
        placeholder: "Subject",
        required: true,
        grid: null,
        },
        {
        type: "textarea",
        name: "message",
        placeholder: "Tell us about your project...",
        rows: 6,
        required: true,
        grid: null,
        },
    ],
    button: {
        text: "Send Message",
    },
};

export const contactCardsContent = {
    heading: "Why Connect With AuxOpus?",
    description:
        "We believe every conversation is the beginning of a successful partnership.",
    cards: [
        {
        icon: "FaHandshake",
        title: "Collaborative Approach",
        text: "We work closely with you to understand your goals and transform ideas into practical digital solutions.",
        },
        {
        icon: "FaCode",
        title: "Modern Engineering",
        text: "Building secure, scalable, and future-ready applications using today's leading technologies and best practices.",
        },
        {
        icon: "FaShieldHalved",
        title: "Trust & Transparency",
        text: "Open communication, clear expectations, and complete confidentiality throughout every engagement.",
        },
        {
        icon: "FaRocket",
        title: "Focused on Growth",
        text: "Creating technology that helps businesses innovate, scale, and stay ahead in a rapidly evolving digital world.",
        },
    ],
};

export const contactMapContent = {
    heading: "Visit Our Office",
    description:
        "We welcome clients, partners, and innovators to connect with us. Schedule a visit and let's discuss your next big idea.",
    map: {
        title: "AuxOpus Location",
        src: "https://www.google.com/maps?q=21.2688026,74.7368461&output=embed",
        height: "h-[550px]",
        loading: "lazy",
        allowFullScreen: true,
    },
};

export const contactFAQContent = {
  heading: "Frequently Asked Questions",

  description:
    "Find answers to common questions about our services, engagement process, and how we work with businesses of all sizes.",

  faqs: [
    {
      question: "What industries does AuxOpus serve?",
      answer:
        "We partner with startups, SMEs, enterprises, educational institutions, healthcare organizations, financial services, manufacturing, retail, and government sectors to deliver tailored digital solutions.",
    },
    {
      question: "What types of projects do you undertake?",
      answer:
        "We build custom software, web applications, mobile apps, AI-powered solutions, cloud platforms, enterprise systems, automation tools, and digital transformation initiatives.",
    },
    {
      question: "How does your development process work?",
      answer:
        "Our process begins with discovery and planning, followed by solution design, agile development, quality assurance, deployment, and continuous optimization to ensure successful project delivery.",
    },
    {
      question: "Can AuxOpus work with our existing technology stack?",
      answer:
        "Yes. We can integrate with your existing systems, modernize legacy applications, and build solutions that complement your current technology ecosystem.",
    },
    {
      question: "How do you ensure security and confidentiality?",
      answer:
        "We follow secure development practices, implement industry-standard security measures, and are happy to sign Non-Disclosure Agreements (NDAs) whenever required.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes. We offer ongoing maintenance, performance monitoring, feature enhancements, and technical support to ensure your solution continues to evolve with your business.",
    },
  ],
};

export const contactSocialContent = {
    heading: "Stay Connected",
    description:
        "Follow AuxOpus for company updates, technology insights, and industry trends.",
    social: [
        {
        icon: "FaLinkedinIn",
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/auxopus-llp",
        color: "hover:bg-blue-600 hover:text-white",
        },
        {
        icon: "FaInstagram",
        name: "Instagram",
        url: "https://www.instagram.com/auxopus",
        color: "hover:bg-pink-600 hover:text-white",
        },
        {
        icon: "FaFacebookF",
        name: "Facebook",
        url: "#",
        color: "hover:bg-blue-700 hover:text-white",
        },
        {
        icon: "FaXTwitter",
        name: "X",
        url: "https://x.com/AuxOpusLLP",
        color: "hover:bg-black hover:text-white",
        },
    ],
};
import Logo from "../assets/AuxOpus.png";

export const footerContent = {
    cta: {
        badge: "Let's Build Together",
        heading: {
        line1: "Empower Your Business",
        line2: "With Innovative Technology",
        },
        description:
        "We design, develop, and deliver reliable digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.",
        button: {
        text: "Get Started",
        link: "/Contact",
        },
    },
    company: {
        logo: Logo,
        alt: "AuxOpus",
        description:
        "AuxOpus is a technology-driven company providing innovative software development, IT consulting, digital transformation, and business automation services to organizations worldwide.",
    },
    companyLinks: {
        title: "Company",
        links: [
        { text: "Home", link: "/" },
        { text: "About Us", link: "/about" },
        { text: "Services", link: "/services" },
        { text: "Portfolio", link: "/portfolio" },
        // { text: "Industries", link: "/industries" },
        // { text: "Careers", link: "/careers" },
        { text: "Contact", link: "/contact" },
        ],
    },
    servicesLinks: {
        title: "Our Services",
        links: [
        "Web Development",
        "Mobile App Development",
        "Custom Software",
        "UI / UX Design",
        "Cloud Solutions",
        "Artificial Intelligence",
        "Digital Marketing",
        "IT Consulting",
        ],
    },
    contact: {
        title: "Contact Us",
        address: {
        lines: [
            "Office No. XX,",
            "Your Business Address,",
            "Maharashtra, India",
        ],
        },
        phone: "+91 XXXXX XXXXX",
        email: "info@auxopus.com",
        social: {
        title: "Follow Us",
        links: [
            { icon: "FaLinkedinIn", link: "#", hoverColor: "hover:bg-blue-500" },
            { icon: "FaInstagram", link: "#", hoverColor: "hover:bg-pink-500" },
            { icon: "FaFacebookF", link: "#", hoverColor: "hover:bg-blue-700" },
            { icon: "FaXTwitter", link: "#", hoverColor: "hover:bg-black hover:text-white" },
        ],
        },
    },
    bottom: {
        copyright: "© 2026 AuxOpus Technologies LLP. All Rights Reserved.",
        links: [
        { text: "Privacy Policy", link: "/Privacy-Policy" },
        { text: "Terms & Conditions", link: "/Terms&Conditions" },
        { text: "Refund Policy", link: "/Return-Policy" },
        ],
    },
};
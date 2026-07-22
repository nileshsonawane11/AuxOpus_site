import Logo from "../assets/AuxOpus.png";
import { contactInfoContent } from "./Contact.js"
import { contactSocialContent } from "./Contact.js"
import NavItems from "./NavItems.js";

const social = contactSocialContent.social;
const Menu = NavItems.map((item) => {
    return { text: item.page, link: item.path }
});

const SubMenuPages = NavItems.flatMap(item =>
    item.items ? item.items.map(sub => sub.page) : []
);

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
        links: Menu,
    },
    servicesLinks: {
        title: "Our Services",
        links: SubMenuPages,
    },
    contact: {
        title: "Contact Us",
        address: {
            lines: [
                contactInfoContent.contactMethods[0].value,
            ],
        },
        phone: contactInfoContent.contactMethods[1].value,
        email: contactInfoContent.contactMethods[2].value,
        social: {
            title: "Follow Us",
            links: [
                { icon: social[0].icon, link: social[0].url, hoverColor: social[0].color },
                { icon: social[1].icon, link: social[1].url, hoverColor: social[1].color },
                { icon: social[2].icon, link: social[2].url, hoverColor: social[2].color },
                { icon: social[3].icon, link: social[3].url, hoverColor: social[3].color },
            ],
        },
    },
    bottom: {
        copyright: "© 2026 AuxOpus Technologies LLP. All Rights Reserved.",
        links: [
            { text: "Privacy Policy", link: "/Privacy-Policy" },
            { text: "Terms & Conditions", link: "/TermsandConditions" },
            { text: "Refund Policy", link: "/Refund-Policy" },
        ],
    },
};
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp, FaRobot, FaComments } from "react-icons/fa6";
import {contactInfoContent} from "../../constants/Contact.js"
 
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <div className="fixed w-screen px-10 bottom-6 z-[9999] flex justify-between items-center gap-4  pointer-events-none">

        {/* WhatsApp */}

        <div className="">
            <a
                href={`https://wa.me/${contactInfoContent.contactMethods[1].value}`}
                target="_blank"
                rel="noreferrer"
                className="
                cursor-pointer
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#75e9a0]
                text-white
                shadow-[0_12px_35px_rgba(37,211,102,.45)]
                hover:scale-110
                hover:-translate-y-1
                transition-all
                "
            >

                <FaWhatsapp size={26} className="relative z-10" />
            </a>
        </div>

        <div className="flex flex-row-reverse items-center gap-8 pointer-events-auto">
            {/* AI Assistant */}
            {/* <button
                className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-xl
                px-4
                py-3
                hover:shadow-blue-200
                hover:-translate-y-1
                transition-all
                duration-300
                "
            >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-white">

                <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></span>

                <FaRobot className="relative z-10" size={22} />

                </div>

                <div className="hidden md:block text-left">

                <div className="font-semibold text-slate-800">
                    AI Assistant
                </div>

                <div className="text-xs text-slate-500">
                    Ask anything...
                </div>

                </div>
            </button> */}
            

            {/* Scroll To Top */}

            <button
                onClick={scrollTop}
                className={`
                cursor-pointer
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-xl
                text-blue-600
                hover:bg-blue-600
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
                ${
                    showTop
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none"
                }
                `}
            >
                <FaArrowUp size={18} />
            </button>
        </div>

    </div>
  );
}

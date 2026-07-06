import React from 'react'
import {Link} from "react-router-dom"

export default function ContactHome() {
  return (
    <section className="h-max w-full bg-white">
        <div className="h-full w-full p-5 justify-center md:p-10 flex flex-row flex-wrap gap-10">
            <div className="w-full max-w-70 flex flex-col items-center justify-between gap-5 p-2 text-center p-10 rounded-xl shadow-md lg:translate-x-15 md:-rotate-10">
                <div className="text-xl font-semibold">Share Your Vision</div>
                <div className="text-gray-700">Tell us about your goals,
and we'll connect with you.</div>
                <div className="uppercase p-3 px-4 shadow-lg text-sm rounded-md bg-blue-500 font-medium text-white">
                    <Link to="/Contact">Send an Inquiry</Link>
                </div>
            </div>

            <div className="w-full max-w-70 flex flex-col items-center justify-between gap-5 p-2 text-center p-10 rounded-xl shadow-md bg-white z-10">
                <div className="text-xl font-semibold">Let's Connect</div>
                <div className="text-gray-700">Have an idea or business challenge?
Let's discuss it together.</div>
                <div className="uppercase p-3 px-4 shadow-lg text-sm rounded-md bg-blue-500 font-medium text-white">
                    <Link to="/Contact">Talk to Our Team</Link>
                </div>
            </div>

            <div className="w-full max-w-70 flex flex-col items-center justify-between gap-5 p-2 text-center p-10 rounded-xl shadow-md lg:-translate-x-12 lg:translate-y-5 md:rotate-15">
                <div className="text-xl font-semibold">Schedule a Consultation</div>
                <div className="text-gray-700">Book a session with our experts
to explore the right solution.</div>
                <div className="uppercase p-3 px-4 shadow-lg text-sm rounded-md bg-blue-500 font-medium text-white">
                    <Link to="/Contact">Book a Meeting</Link></div>                
            </div>

        </div>
    </section>
  )
}

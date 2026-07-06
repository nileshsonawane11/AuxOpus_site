import React from 'react'
import BG from "../assets/BG.png"
import {Link} from "react-router-dom"
import { FaStar } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div className="h-max w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        {/* <img src={BG} alt="" className="absolute inset-0 w-full"/> */}
        <div className="p-8 inset-0  flex gap-10 pt-15 md:p-15 h-max w-full backdrop-blur-sm z-20">
            {/* Left */}
            <div className="w-full flex flex-col gap-5 md:max-w-1/2">
                <div className="flex gap-1 items-center mt-10 font-semibold text-white text-sm bg-blue-500 shadow-blue-500 shadow-md w-max px-5 p-1 rounded-full"><FaStar /> Technology • Innovation • Growth</div>
                
                <div className="text-6xl md:text-7xl font-bold">
                    Empowering Businesses Through <span className="bg-linear-45 from-blue-500 to-green-200 text-transparent bg-clip-text">Technology & Innovation</span>
                </div>

                <div className="text-lg text-gray-600">
                    Delivering practical expertise, trusted partnerships, and measurable results through a client-centric approach, ensuring every solution is tailored to unique goals, challenges, and long-term success.
                </div>

                <div className="flex justify-between md:justify-start md:gap-8 mt-5">
                    <Link to="Services" className='px-4 flex items-center justify-center active:scale-95 md:px-6 border-2 font-semibold p-3 rounded-full uppercase'>Our Services</Link>
                    <Link to="/Contact" className='px-4 flex items-center justify-center active:scale-95 md:px-6 bg-blue-500 text-white font-semibold p-3 rounded-full uppercase'>Talk To An Expert</Link>
                </div>
            </div>

            {/* Right */}
            <div className="">

            </div>
        </div>

        {/* stats */}
        <div className="w-full p-10 h-max gap-15 bg-white/20 rounded-2xl grid md:grid-cols-4 w-full backdrop-blur-3xl">
            <div className="flex flex-col text-xl justify-center items-center bg-gray-100/10 gap-3 shadow-gray-300 shadow-md p-5 rounded-xl backdrop-blur-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="w-full text-center">Industry Services</div>
            </div>
            <div className="flex flex-col text-xl justify-center items-center bg-gray-100/10 gap-3 shadow-gray-300 shadow-md p-5 rounded-xl backdrop-blur-xl">
                <div className="text-4xl font-bold">5+</div>
                <div className="w-full text-center">Technology Domains</div>
            </div>
            <div className="flex flex-col text-xl justify-center items-center bg-gray-100/10 gap-3 shadow-gray-300 shadow-md p-5 rounded-xl backdrop-blur-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="w-full text-center">Client-Focused Approach</div>
            </div>
            <div className="flex flex-col text-xl justify-center items-center bg-gray-100/10 gap-3 shadow-gray-300 shadow-md p-5 rounded-xl backdrop-blur-xl">
                <div className="text-4xl font-bold">24/7</div>
                <div className="w-full text-center">Support & Assistance</div>
            </div>
        </div>
    </div>
  )
}

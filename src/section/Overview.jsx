import { section } from 'framer-motion/client'
import React from 'react'
import { FaBullseye, FaEye } from 'react-icons/fa6'

export default function Overview() {
  return (
    <section className='h-max w-full bg-white'>
        <div className="h-full w-full p-5 md:p-15 flex flex-col gap-10">
            {/* OverView */}
            <div className="flex flex-col gap-8">
                <div className="md:text-5xl text-3xl font-semibold">Overview</div>
                <div className="flex flex-col gap-3 text-md md:text-lg">
                    <p className="">
                        AuxOpus is a forward-thinking technology and business solutions company committed to helping organizations transform ideas into meaningful outcomes. We collaborate with businesses, startups, educational institutions, and enterprises to address complex challenges, improve operational efficiency, and unlock new opportunities for sustainable growth. By combining strategic expertise, innovation, and a collaborative approach, we deliver practical, scalable, and future-ready solutions tailored to the unique needs of every client.
                    </p>
                    <p className="">
                        Our commitment extends beyond delivering services. We believe in building long-term partnerships founded on trust, transparency, and continuous improvement. Whether supporting digital transformation, providing technology consulting, delivering professional training, or enabling business innovation, every engagement is driven by a passion for excellence and a dedication to creating lasting value.
                    </p>
                </div>
            </div>

            {/* Visio-Mision */}
            <div className="flex flex-col lg:w-3/4 m-auto gap-18 mt-10">
                <div className="relative flex flex-col md:flex-row gap-10 items-center justify-center w-full text-xl shadow-lg rounded-3xl p-8 group">
                    <div className="absolute text-2xl right-0 -top-10 p-5 rounded-2xl font-semibold text-blue-400 group-hover:-translate-y-3 transition-all">Our Vision</div>
                    <div className="flex items-center flex-1">
                        <FaBullseye className="group-hover:text-blue-400 transition-all" size={60}/>
                    </div>
                    <div className="text-center w-full text-[1.1rem] md:text-xl">
                        To become a trusted global partner recognized for empowering organizations through innovation, expertise, and meaningful collaboration, enabling them to achieve sustainable growth and create lasting impact in an ever-evolving world.
                    </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row-reverse gap-10 items-center justify-center w-full shadow-lg text-xl rounded-3xl p-8 group">
                    <div className="absolute text-2xl left-0 -top-10 p-5 rounded-2xl font-semibold text-blue-400 group-hover:-translate-y-3 transition-all">Our Mission</div>
                    <div className="flex items-center flex-1">
                        <FaEye className="group-hover:text-blue-400 transition-all"  size={60}/>
                    </div>
                    <div className="text-center w-full text-[1.1rem] md:text-xl">
                        Our mission is to deliver reliable, high-quality solutions and services that help businesses, institutions, and individuals overcome challenges, embrace opportunities, and achieve their goals. We are committed to fostering innovation, nurturing talent, building long-term partnerships, and creating value through integrity, excellence, and continuous improvement.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

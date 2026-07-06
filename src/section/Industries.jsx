import React from 'react'
import { FaBriefcaseMedical, FaBuilding, FaBuildingColumns, FaCartShopping, FaGlobe, FaGraduationCap, FaIndustry, FaLandmark, FaRocket, FaSackDollar, FaWheatAwn } from 'react-icons/fa6'

export default function Industries() {
  return (
    <section className="h-max w-full bg-white">
        <div className="h-full w-full p-5 md:p-15 flex flex-row flex-wrap gap-10">
            <div className="md:text-5xl text-3xl font-semibold">Industries</div>
            <div className="w-full h-full grid md:grid-cols-2 gap-8">
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaRocket className='flex flex-1' size={35}/>
                    Startups

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaBuilding className='flex flex-1' size={35} />
                    Small & Medium Enterprises (SMEs)

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaIndustry className='flex flex-1' size={35}/>
                    Enterprises

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaGraduationCap className='flex flex-1' size={35} />
                    Education

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaCartShopping className='flex flex-1' size={35}/>
                    Retail & E-Commerce

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaBriefcaseMedical className='flex flex-1' size={35}/>
                    Healthcare

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaSackDollar className='flex flex-1' size={35}/>
                    Finance & Banking

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaIndustry className='flex flex-1' size={35} />
                    Manufacturing

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaLandmark className='flex flex-1' size={35}/>
                    Hospitality & Tourism

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaBuildingColumns className='flex flex-1' size={35}/>
                    Government & Public Sector

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaWheatAwn className='flex flex-1' size={35}/>
                    Agriculture

                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2 text-lg font-medium uppercase p-5 text-center rounded-xl shadow-md group hover:scale-105 transition-all cursor-pointer">
                    <FaGlobe className='flex flex-1' size={35}/>
                    Non-Profit Organizations

                </div>
            </div>
        </div>
        
    </section>
  )
}

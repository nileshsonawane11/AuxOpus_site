import React from 'react'

export default function WhyToChoose() {
  return (
    <section className='h-max w-full bg-white'>
        <div className="h-full w-full p-5 md:p-15 flex flex-col gap-10">
            {/* Description */}
            <div className="flex flex-col gap-8">
                <div className="md:text-5xl text-3xl font-semibold">Why to Choose Us?</div>
                <div className=" text-md md:text-lg">
                    At AuxOpus, we believe success is built through collaboration, trust, and a deep understanding of our clients' goals. We go beyond delivering services by becoming a reliable partner committed to creating long-term value. Every engagement is guided by quality, transparency, innovation, and a results-driven approach, ensuring solutions that not only address today's challenges but also prepare organizations for tomorrow's opportunities.
                </div>
            </div>

            {/* cards */}
            <div className="w-full h-full grid md:grid-cols-3 gap-5">

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Client-Centric Approach
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        We listen first, understand your unique requirements, and deliver
                        solutions that align with your vision, objectives, and long-term goals.
                    </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Quality-Driven Execution
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        Every project is delivered with attention to detail, high standards,
                        and a commitment to reliability, performance, and excellence.
                    </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Tailored Solutions
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        No two businesses are the same. We provide customized strategies and
                        services designed to address your specific challenges and opportunities.
                    </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Innovation with Purpose
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        We embrace modern technologies and forward-thinking approaches to
                        create practical, impactful, and future-ready solutions.
                    </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Transparent Collaboration
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        Clear communication, honest guidance, and regular updates ensure a
                        smooth and trustworthy partnership throughout every stage of the
                        journey.
                    </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg w-full text-center font-semibold text-xl group cursor-pointer">
                    Long-Term Partnership
                    <p
                        className="
                            text-sm font-light mt-3
                            overflow-hidden
                            max-h-40 opacity-100
                            transition-all duration-500 ease-in-out

                            md:max-h-0 md:opacity-0
                            md:group-hover:max-h-40
                            md:group-hover:opacity-100
                        "
                    >
                        Our commitment extends beyond project completion. We provide
                        continuous support, guidance, and improvements to help your
                        organization grow with confidence.
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

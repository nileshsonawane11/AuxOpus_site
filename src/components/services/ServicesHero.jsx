import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaMobileScreen,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaShieldHalved,
  FaServer,
  FaMicrochip,
  FaNetworkWired,
  FaGear,
  FaRocket,
} from "react-icons/fa6";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 text-white min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/30 animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 25}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8 lg:sticky lg:top-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-xs font-semibold tracking-[0.3em] text-blue-300 uppercase">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900">
                Technology
                <span className="relative inline-block ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
                  Solutions
                  <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#4F46E5" />
                      </linearGradient>
                    </defs>
                    <rect width="200" height="4" fill="url(#gradient)" rx="2" />
                  </svg>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600">
                  That Drive Growth
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              From websites and mobile applications to AI, automation, digital
              marketing, and enterprise software, we build digital products
              designed for measurable business success.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.4)] group-hover:shadow-[0_15px_50px_rgba(37,99,235,0.6)] transition-shadow" />
                <span className="relative text-white flex items-center gap-3">
                  Start Project
                  <FaArrowRight className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 border border-gray-300 hover:border-blue-400/50"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm group-hover:bg-white/10 transition-colors" />
                <span className="relative text-gray-800 flex items-center gap-3">
                  View Portfolio
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </span>
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {[
                ["10+", "Years Experience"],
                ["250+", "Projects"],
                ["99%", "Client Satisfaction"],
                ["24/7", "Support"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="backdrop-blur-sm bg-white/70 p-4 rounded-2xl border border-gray-200 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Trusted Companies */}
            <div className="pt-4">
              <div className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6">
                Trusted by leading companies
              </div>
              <div className="flex flex-wrap gap-8 text-gray-600 font-medium">
                <span className="hover:text-gray-900 transition-colors cursor-pointer">Microsoft</span>
                <span className="hover:text-gray-900 transition-colors cursor-pointer">AWS</span>
                <span className="hover:text-gray-900 transition-colors cursor-pointer">Google</span>
                <span className="hover:text-gray-900 transition-colors cursor-pointer">HubSpot</span>
                <span className="hover:text-gray-900 transition-colors cursor-pointer">Zoho</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - 3D Visualization */}
          <div className="relative h-[800px] lg:flex items-center justify-center hidden">
            
            {/* Background Glow Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-cyan-500/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-indigo-500/10 animate-[spin_20s_linear_infinite]" />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { icon: <FaCloud />, delay: "0s" },
                { icon: <FaDatabase />, delay: "5s" },
                { icon: <FaMicrochip />, delay: "10s" },
                { icon: <FaNetworkWired />, delay: "15s" },
                { icon: <FaShieldHalved />, delay: "2s" },
                { icon: <FaServer />, delay: "7s" },
                { icon: <FaGear />, delay: "12s" },
                { icon: <FaRocket />, delay: "17s" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: `orbit 20s linear infinite ${item.delay}`,
                  }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 flex items-center justify-center text-2xl text-blue-600 hover:text-blue-700 transition-colors shadow-xl hover:scale-110 hover:rotate-12 duration-500">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Central Platform */}
            <div className="absolute inset-0 flex items-center justify-center [transform:perspective(1200px)_rotateX(5deg)]">
              <div className="relative">
                {/* Platform Shadow */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[30px] bg-blue-500/20 blur-3xl rounded-full" />
                
                {/* Platform Rings */}
                <div className="relative w-[350px] h-[350px] rounded-full border border-blue-500/30 shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-white/5">
                  <div className="absolute inset-[-20px] rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[-40px] rounded-full border border-indigo-500/10 animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-[-60px] rounded-full border border-blue-500/5 animate-[spin_25s_linear_infinite]" />
                  
                  {/* Platform Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 animate-pulse" />
                </div>

                {/* Glass Cube */}
                <div className="absolute inset-0 flex items-center justify-center [transform:perspective(1200px)_rotateX(10deg)_rotateY(-15deg)] group hover:[transform:perspective(1200px)_rotateX(5deg)_rotateY(-5deg)] transition-all duration-1000">
                  <div className="relative w-[160px] h-[160px]">
                    {/* Cube Glow */}
                    <div className="absolute inset-[-30px] bg-blue-500/20 blur-3xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Cube Faces */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-shadow duration-700 bg-white/90">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaCode className="text-6xl text-blue-600 group-hover:text-cyan-600 group-hover:scale-110 transition-all duration-700" />
                      </div>
                      
                      {/* Cube Grid Lines */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl" />
                    </div>
                    
                    {/* Cube Edge Highlights */}
                    <div className="absolute -top-[2px] -left-[2px] w-[20px] h-[20px] border-t-2 border-l-2 border-blue-500 rounded-tl-2xl" />
                    <div className="absolute -top-[2px] -right-[2px] w-[20px] h-[20px] border-t-2 border-r-2 border-cyan-500 rounded-tr-2xl" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-[20px] h-[20px] border-b-2 border-l-2 border-indigo-500 rounded-bl-2xl" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-[20px] h-[20px] border-b-2 border-r-2 border-purple-500 rounded-br-2xl" />
                  </div>
                </div>

                {/* Floating Service Cards */}
                {[
                  {
                    icon: <FaCode />,
                    title: "Web Development",
                    desc: "React, Next.js, Laravel",
                    position: "top-[-120px] left-0",
                    delay: "0s"
                  },
                  {
                    icon: <FaMobileScreen />,
                    title: "Mobile Apps",
                    desc: "React Native, Flutter",
                    position: "top-[-80px] right-0",
                    delay: "2s"
                  },
                  {
                    icon: <FaRobot />,
                    title: "AI Solutions",
                    desc: "ML, NLP, Automation",
                    position: "bottom-[-120px] left-0",
                    delay: "4s"
                  },
                  {
                    icon: <FaChartLine />,
                    title: "Digital Marketing",
                    desc: "SEO, Analytics, Social",
                    position: "bottom-[-80px] right-0",
                    delay: "6s"
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`absolute ${card.position} w-52 [transform:perspective(1200px)_rotateY(10deg)_rotateX(5deg)]`}
                    style={{
                      animation: `floatCard ${6 + i}s ease-in-out infinite ${card.delay}`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Card Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="text-3xl text-blue-600 group-hover:text-cyan-600 transition-colors">
                          {card.icon}
                        </div>
                        <h4 className="mt-3 font-bold text-lg text-gray-900">{card.title}</h4>
                        <p className="mt-1 text-sm text-gray-600">{card.desc}</p>
                      </div>
                      
                      {/* Card Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Widgets */}
            <div className="absolute top-10 left-4 w-48 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <FaRobot />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">AI Assistant</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Tasks</span>
                  <span className="text-green-600">1,245</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-200">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-4 w-48 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '3s' }}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Revenue</span>
                <span className="text-xs text-green-600">+18%</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-gray-900">₹8.5M</div>
              <div className="mt-3 flex items-end gap-1 h-12">
                {[25,45,35,55,75,65,95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-cyan-400"
                    style={{ height: `${h * 0.4}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-4 w-48 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '2s' }}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Server Status</span>
                <span className="text-xs text-green-600">● Online</span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["CPU", "68%"],
                  ["RAM", "54%"],
                  ["Storage", "82%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">{label}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                    <div className="h-1 rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-10 right-4 w-40 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '4s' }}>
              <div className="flex items-center justify-between">
                <FaCloud className="text-blue-600 text-xl" />
                <span className="text-xs text-green-600">99.98%</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-900">Uptime</div>
              <div className="mt-1 text-xs text-gray-600">Cloud Infrastructure</div>
            </div>

            {/* SVG Network Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 700">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connection Lines */}
              <line x1="350" y1="350" x2="150" y2="150" stroke="url(#lineGradient)" strokeWidth="1.5" />
              <line x1="350" y1="350" x2="550" y2="150" stroke="url(#lineGradient)" strokeWidth="1.5" />
              <line x1="350" y1="350" x2="150" y2="550" stroke="url(#lineGradient)" strokeWidth="1.5" />
              <line x1="350" y1="350" x2="550" y2="550" stroke="url(#lineGradient)" strokeWidth="1.5" />
              <line x1="350" y1="350" x2="200" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="350" y1="350" x2="500" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="350" y1="350" x2="200" y2="400" stroke="url(#lineGradient)" strokeWidth="1" />
              <line x1="350" y1="350" x2="500" y2="400" stroke="url(#lineGradient)" strokeWidth="1" />
              
              {/* Animated Dots */}
              <circle cx="350" cy="350" r="8" fill="#3B82F6" filter="url(#glow)">
                <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="150" r="4" fill="#06B6D4">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="550" cy="150" r="4" fill="#06B6D4">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="550" r="4" fill="#06B6D4">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="550" cy="550" r="4" fill="#06B6D4">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
              </circle>
              
              {/* Moving Dot on Line */}
              <circle r="4" fill="#60A5FA" filter="url(#glow)">
                <animateMotion dur="6s" repeatCount="indefinite" path="M350,350 L150,150" />
              </circle>
              <circle r="4" fill="#60A5FA" filter="url(#glow)">
                <animateMotion dur="7s" repeatCount="indefinite" path="M350,350 L550,150" />
              </circle>
              <circle r="4" fill="#60A5FA" filter="url(#glow)">
                <animateMotion dur="5s" repeatCount="indefinite" path="M350,350 L150,550" />
              </circle>
              <circle r="4" fill="#60A5FA" filter="url(#glow)">
                <animateMotion dur="8s" repeatCount="indefinite" path="M350,350 L550,550" />
              </circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(calc(var(--rotate, 0deg) * 0.5)); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(-350px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(-350px) rotate(-360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
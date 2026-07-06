import React, { useState, useEffect } from 'react'
import Logo from "./Logo.jsx"
import NavItems from '../../constants/NavItems.js'
import { FaAngleDown, FaBarsStaggered, FaRegComments, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [Mobilemenu, setMobilemenu] = useState(true);
   const [openMenu, setOpenMenu] = useState(null);
   
  return (
    <div className='fixed w-full left-0 right-0 z-50'>
      <div className="relative w-full">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16 px-6 lg:px-10 
                      bg-white shadow-lg shadow-gray-200/50 border-b border-gray-100">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NavItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link 
                  to={item.path} 
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-600 
                           hover:text-blue-600 hover:bg-blue-50 rounded-lg
                           transition-all duration-200 font-medium text-sm"
                >
                  {item.page}
                  {item.items && (
                    <FaAngleDown 
                      size={12} 
                      className="transition-transform duration-200 group-hover:rotate-180" 
                    />
                  )}
                </Link>

                {item.items && (
                  <div className="absolute top-full left-0 mt-1 w-56 
                                bg-white rounded-xl shadow-xl shadow-gray-200/50 
                                border border-gray-100
                                opacity-0 invisible group-hover:opacity-100
                                group-hover:visible transition-all duration-200 
                                transform group-hover:translate-y-0 translate-y-1">
                    <div className="py-2">
                      {item.items.map((subItem, subIdx) => (
                        <Link 
                          to={subItem.path}
                          key={subIdx}
                          className="flex items-center px-4 py-2.5 text-gray-600 
                                   hover:text-blue-600 hover:bg-blue-50
                                   transition-all duration-200 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 
                                         opacity-0 group-hover:opacity-100"></span>
                          {subItem.page}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Contact button */}
            <Link 
              to="/Contact" 
              className="hidden sm:flex items-center gap-2 px-5 py-2 
                       bg-blue-500 hover:bg-blue-600
                       text-white rounded-lg font-medium text-sm
                       shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                       transform hover:scale-105 active:scale-95
                       transition-all duration-200"
            >
              <FaRegComments size={16} />
              <span>Contact Us</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobilemenu(prev => !prev)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center
                       rounded-lg text-gray-600 hover:text-blue-600 
                       hover:bg-gray-50 transition-all duration-200"
            >
              {Mobilemenu ? <FaBarsStaggered size={22} /> : <FaXmark size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out
                      ${!Mobilemenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <div className="px-6 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {NavItems.map((item, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={item.path}
                      onClick={() => setMobilemenu(true)}
                      className="flex-1 py-3 text-gray-600 hover:text-blue-600 
                               transition-colors duration-200 font-medium"
                    >
                      {item.page}
                    </Link>
                    {item.items && (
                      <button
                        onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                        className="p-2 text-gray-400 hover:text-blue-600 
                                 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      >
                        <FaAngleDown 
                          size={14}
                          className={`transition-transform duration-200 ${
                            openMenu === idx ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile submenu */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden
                                ${openMenu === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-blue-200 ml-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setMobilemenu(true)}
                          className="block py-2 px-3 text-gray-500 hover:text-blue-600 
                                   text-sm rounded-lg hover:bg-blue-50 
                                   transition-all duration-200"
                        >
                          {subItem.page}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile contact button */}
              <Link
                to="/Contact"
                onClick={() => setMobilemenu(true)}
                className="sm:hidden flex items-center justify-center gap-2 mt-4 
                         px-5 py-3 bg-blue-500 hover:bg-blue-600
                         text-white rounded-lg font-medium
                         shadow-lg shadow-blue-500/20 active:scale-95
                         transition-all duration-200"
              >
                <FaRegComments size={18} />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
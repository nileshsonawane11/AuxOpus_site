import React, { useState, useEffect } from 'react'
import Logo from "./Logo.jsx"
import NavItems from '../../constants/NavItems.js'
import { FaAngleDown, FaBarsStaggered, FaRegComments, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [Mobilemenu, setMobilemenu] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`
      fixed w-screen bg-white lg:bg-white/20 backdrop-blur-2xl z-999 
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="relative w-full flex items-center justify-between top-0 h-15">
        {/* Logo */}
        <div className="pl-5">
          <Logo />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6 pr-5">
          <div className="hidden lg:flex gap-6">
            {NavItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link 
                  to={item.path} 
                  className="text-lg flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.page}
                  {item.items && <FaAngleDown size={15} className="transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {item.items && (
                  <div className="absolute top-full -right-20 mt-2 w-64 bg-white rounded-md shadow-lg
                                  opacity-0 invisible group-hover:opacity-100
                                  group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                    {item.items.map((subItem, subIdx) => (
                      <Link 
                        to={subItem.path}
                        key={subIdx}
                        className="px-4 flex py-3 w-full hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:pl-6"
                      >
                        {subItem.page}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact button */}
          <Link 
            to="/Contact" 
            className="bg-blue-500 h-10 w-max p-3 flex items-center justify-center rounded-lg text-white gap-1 cursor-pointer active:scale-95 transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <FaRegComments size={20} className="transition-transform duration-300 group-hover:rotate-12" /> 
            Contact Us
          </Link>

          <div 
            onClick={() => { setMobilemenu(prev => !prev) }} 
            className="lg:hidden flex items-center justify-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            {Mobilemenu ? 
              <FaBarsStaggered size={25} className="transition-all duration-300 hover:rotate-180" /> : 
              <FaXmark size={25} className="transition-all duration-300 hover:rotate-180" />
            }
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            absolute p-5 text-lg top-15 h-screen w-full bg-white/96 backdrop-blur-2xl
            transition-all duration-500 ease-in-out
            ${Mobilemenu ? 'opacity-0 invisible translate-x-full' : 'opacity-100 visible translate-x-0'}
          `}
        >
          {NavItems.map((item, idx) => (
            <div 
              key={idx}
              className="transform transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: Mobilemenu ? 0 : 1,
                transform: Mobilemenu ? 'translateX(50px)' : 'translateX(0)'
              }}
            >
              <div
                className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-100 hover:border-blue-200 transition-colors duration-300"
              >
                <Link 
                  to={item.path}
                  className="hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setMobilemenu(true)}
                >
                  {item.page}
                </Link>
                {item.items && (
                  <FaAngleDown
                    onClick={() => { setOpenMenu(openMenu === idx ? null : idx) }}
                    className={`transition-all duration-300 ${
                      openMenu === idx ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                )}
              </div>

              {item.items && (
                <div 
                  className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
                    openMenu === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.items.map((subItem, subIdx) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block py-2 hover:text-blue-600 hover:pl-2 transition-all duration-300 border-b border-gray-50"
                      style={{
                        transitionDelay: `${subIdx * 50}ms`,
                      }}
                      onClick={() => setMobilemenu(true)}
                    >
                      {subItem.page}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
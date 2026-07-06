import React, { useState } from 'react'
import Logo from "./Logo.jsx"
import NavItems from '../../constants/NavItems.js'
import { FaAngleDown, FaBarsStaggered, FaRegComments, FaXmark   } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [Mobilemenu, setMobilemenu] = useState(true);
   const [openMenu, setOpenMenu] = useState(null);
  return (
    <div className='fixed w-screen bg-white lg:bg-white/20 backdrop-blur-2xl z-999'>
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
                            <Link to={item.path} className="text-lg flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-all">
                                {item.page}
                                {item.items && <FaAngleDown size={15} />}
                            </Link>

                            {item.items && (
                                <div className="absolute top-full -right-20 mt-2 w-64 bg-white rounded-md shadow-lg
                                                opacity-0 invisible group-hover:opacity-100
                                                group-hover:visible transition-all duration-200 z-50">
                                {item.items.map((subItem, subIdx) => (
                                    <Link to={subItem.path}
                                    key={subIdx}
                                    className="px-4 flex py-3 w-full hover:bg-gray-100 cursor-pointer"
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
                <Link to="/Contact" className="bg-blue-500 h-10 w-max p-3 flex items-center justify-center rounded-lg text-white gap-1 cursor-pointer active:scale-95 transition-all"><FaRegComments size={20}  /> Contact Us</Link>
                

                <div onClick={()=>{setMobilemenu(prev => !prev)}} className="lg:hidden flex items-center justify-center cursor-pointer">
                    {Mobilemenu ? <FaBarsStaggered size={25} /> : <FaXmark size={25} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {!Mobilemenu && (
                <div className="absolute p-5 text-lg top-15 h-screen w-full bg-white/96 backdrop-blur-2xl">
                    {NavItems.map((item, idx) => (
                    <div key={idx}>
                        <div
                        className="flex justify-between items-center py-3 cursor-pointer"
                        >
                        <Link to={item.path}>{item.page}</Link>
                        {item.items && (
                            <FaAngleDown
                            onClick={()=>{setOpenMenu(openMenu === idx ? null : idx)}}
                            className={`transition-transform ${
                                openMenu === idx ? "rotate-180" : ""
                            }`}
                            />
                        )}
                        </div>

                        {item.items && openMenu === idx && (
                        <div className="pl-4">
                            {item.items.map((subItem) => (
                            <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block py-2"
                            >
                                {subItem.page}
                            </Link>
                            ))}
                        </div>
                        )}
                    </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

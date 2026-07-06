import React from 'react'
import LogoImage from "../../assets/AuxOpus.png"

export default function Logo() {
  return (
    <div className="flex gap-2 justify-center items-center">
        <img src={LogoImage} alt="AuxOpus" className='h-10'/>
        <div className="text-2xl font-bold bg-linear-135 from-blue-800 to-gray-400 text-transparent bg-clip-text">AuxOpus</div>
    </div>
  )
}

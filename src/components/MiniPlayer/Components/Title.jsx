import React from 'react'
import {IoIosHeartEmpty} from "react-icons/io"
import { urlFor } from "@/lib/client"
import logo from "../../../../public/logo.png"
import Image from "next/image"
const Title = ({title,image}) => {
  return (
    <div className="flex flex-row items-center gap-5 py-4">
        <img
        className="h-[30px] w-[30px] bg-white object-cover rounded-lg"
        src={image ? `${urlFor(image)}` : null} alt={logo} />
        
        <p className="text-sm">{title}</p>
        
        <button className="text-lg">
        <IoIosHeartEmpty/>
        </button>


    </div>
  )
}

export default Title
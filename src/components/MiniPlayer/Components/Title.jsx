import React, { useState } from 'react'
import {IoIosHeartEmpty, IoIosHeart} from "react-icons/io"
import { urlFor } from "@/lib/client"
import logo from "../../../../public/logo.png"
import Image from "next/image"
const Title = ({title,image}) => {

  const [WishList,setWishList] = useState(false)

  const handleClick = () => {
    setWishList(!WishList)
  }
  return (
    <div className="flex flex-row items-center gap-5 py-4 text-white">
        <img
        className="h-[30px] w-[30px] bg-white object-cover rounded-lg"
        src={image ? `${urlFor(image)}` : null} alt={logo} />
        
        <p className="text-sm text-white">{title}</p>
        
        <button
        onClick={() => handleClick()}
        className="text-lg">
        {WishList?<IoIosHeartEmpty/>:<IoIosHeart/>}
        </button>


    </div>
  )
}

export default Title
import React from 'react'
import Image from "next/image"
import {IoMdPlay} from "react-icons/io"
const TopBanner = () => {
  return (
    <div className="h-[350px] rounded-lg w-3/4 bg-red-300 py-4 flex justify-between items-center px-20">
     <div className="flex flex-col justify-center gap-5 h-full">
      <h2 className="text-[4rem] font-semibold">NRJ Maurice</h2>
      
    
        <button className="px-6 py-4 rounded-lg bg-black text-2xl flex justify-between items-center gap-5">
          <h3>Play</h3>
          <IoMdPlay/>
        </button>
     </div>
    
    <img
    className="w-[250px] h-[250px] object-cover"
    src={"https://o.remove.bg/downloads/fb86d3f4-2194-4eab-b7af-a260138f2658/png-transparent-nrj-hits-internet-radio-television-nrj-music-award-radio-television-electronics-text-removebg-preview.png"} />
    </div>
  )
}

export default TopBanner
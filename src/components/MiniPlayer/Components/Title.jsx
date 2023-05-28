import React from 'react'
import {IoIosHeartEmpty} from "react-icons/io"
const Title = () => {
  return (
    <div className="flex flex-row items-center gap-5 py-4">
        <img
        className="h-full w-full object-cover rounded-lg"
        src="https://static.wixstatic.com/media/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg/v1/fill/w_1152,h_649,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/49f14e_f1a4922de335415e9837a8efb03bb9cff000.jpg" />
        
        <p className="text-sm">NRJ Maurice</p>
        
        <button className="text-lg">
        <IoIosHeartEmpty/>
        </button>


    </div>
  )
}

export default Title
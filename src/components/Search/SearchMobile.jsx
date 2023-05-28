import React, { useState } from 'react'
import {IoSearch,IoClose} from 'react-icons/io5'

const SearchMobile = () => {
    const [ShowSearch , setShowSearch] = useState(false)

    const handleClick = () => {
        setShowSearch(!ShowSearch)
    }
  return (
    <div className="lg:hidden flex ">
    <button
    onClick={() => handleClick()}
    className="text-xl">
    <IoSearch/>
    </button>

    {ShowSearch ?
     <div className="fixed top-0 left-0 h-16 w-full z-10 bg-[#232427] border-b border-black ">
    
     <form className="w-full flex items-center text-lg justify-between py-2 px-4 h-full rounded-xl">
     <button
     onClick={() => handleClick()}
     className="text-3xl">
     <IoClose />
     </button>
     
     <input
     className="w-full p-4 bg-transparent h-full border-b"
      placeholder="Search Station or Music" />

     <button className="text-3xl">
     <IoSearch /> 
     </button>
    </form>
        
    </div> : null}

    </div>
  )
}

export default SearchMobile
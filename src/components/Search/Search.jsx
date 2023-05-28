import React from 'react'
import {IoSearch} from 'react-icons/io5'
const Search = () => {
  return (
    <>
    <form className="hidden w-1/2 lg:flex items-center text-lg justify-between py-2 px-4 h-full rounded-xl">
     <input
     className="w-full p-4 bg-transparent h-full border-b"
      placeholder="Search Station or Music" />

     <button className="text-3xl">
     <IoSearch /> 
     </button>
    </form>
    </>
  )
}

export default Search
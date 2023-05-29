import React from 'react'
import {IoSearch} from 'react-icons/io5'
import { useState } from "react"
import { useRouter } from "next/router"
const Search = () => {

  const router = useRouter()

  const [SearchQuery, setSearchQuery] = useState("")

  const handleSubmit = () => {
    router.push(`/search/${SearchQuery}`)
  }
  return (
    <>
    <form 
    onSubmit={() => handleSubmit()}
    className="hidden w-1/2 lg:flex items-center text-lg justify-between py-2 px-4 h-full rounded-xl">
     <input
     className="w-full p-4 bg-transparent h-full border-b"
      placeholder="Search Station or Music" 
      value={SearchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}/>

     <button className="text-3xl">
     <IoSearch /> 
     </button>
    </form>
    </>
  )
}

export default Search
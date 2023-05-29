import React from 'react'
import Image from "next/image"
import logo from '../../../public/logo.png'
  // import Search from "../Search/Search"
import User from "../User/User"
import Link from "next/link"
// import SearchMobile from "../Search/SearchMobile"

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 w-full items-center px-4 lg:px-32">
     <Link href={""}>
      <Image className="w-14" src={logo} alt="LOGO" /> 
     </Link>
      {/* <Search /> */}
      <div className="flex gap-2">
      {/* <SearchMobile/> */}
      <User />
      </div>
    </div>
  )
}

export default Navbar
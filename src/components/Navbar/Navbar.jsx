import React from 'react'
import Image from "next/image"
import logo from '../../../public/logo.png'
import Search from "../Search/Search"
import User from "../User/User"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-evenly w-full items-center">
     <Link href={""}>
      <Image className="w-12" src={logo} alt="LOGO" /> 
     </Link>
      <Search />
      <User />
    </div>
  )
}

export default Navbar
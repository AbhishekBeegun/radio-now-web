import Link from "next/link"
import React from 'react'

const LoginBtn = () => {
  return (
    <Link className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center"

    href="/api/auth/login">Login</Link>
  )
}

export default LoginBtn
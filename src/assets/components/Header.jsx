import React from 'react'
import logo from "../logo/logo.png"
const Header = () => {
  return (
    <header className="flex justify-around p-3 m-auto  bg-slate-700 max-w-screen-lg font-sans  text-white">
        <div className="flex items-center gap-1 ">
            <img className='w-14' src={logo} alt="" />
            <h1>TN</h1>
        </div>
        <div className="">
            <ul className='flex items-center gap-4  font-sans '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Address</li>
            </ul>
        </div>
    </header>
  )
}

export default Header



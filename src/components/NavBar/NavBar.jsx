// import { ReactComponent as Profile } from '../../assets/svg/profile.svg'
// import { ReactComponent as Contact } from '../../assets/svg/contact.svg'
import { ReactComponent as MenuClose } from '../../assets/svg/menuClose.svg'
import { ReactComponent as MenuOpen } from '../../assets/svg/menuOpen.svg'

import { useState } from "react"

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  const handleClick = () => {
    setOpenNav(!openNav)
  }
  
  return (
    <nav className='relative flex justify-between py-5 px-4 md:px-6 lg:px-60'>
      <div>
        <p>
          NmesomaHenry©
        </p>
      </div>
      <ul className='hidden md:flex gap-8'>
        <li className="tracking-normal transition-all ease-in-out delay-150 hover:text-blue-500 hover:tracking-widest duration-300 cursor-pointer">Home</li>
        <li className="tracking-normal transition-all ease-in-out delay-150 hover:text-blue-500 hover:tracking-widest duration-300 cursor-pointer">Skills and Tools</li>
        <li className="tracking-normal transition-all ease-in-out delay-150 hover:text-blue-500 hover:tracking-widest duration-300 cursor-pointer">Projects</li>
        <li className="tracking-normal transition-all ease-in-out delay-150 hover:text-blue-500 hover:tracking-widest duration-300 cursor-pointer">About</li>
      </ul>
      <div className='md:hidden'>
          <MenuOpen  onClick = {() => handleClick()} className="fill-white h-6 w-6"/>
      </div>
      <div className={`${openNav ? "absolute" : "hidden"} z-50 pt-[50%] bg-slate-900 opacity-90 h-[100vh] w-[100vw]`}>
        <MenuClose onClick = {() => handleClick()} className="fill-white h-10 w-10 absolute top-10 left-5"/>
        <ul className='flex flex-col items-center gap-8 text-3xl'>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Skills and Tools</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
import { ReactComponent as Profile } from '../../assets/svg/profile.svg'
import { ReactComponent as Contact } from '../../assets/svg/contact.svg'
import { ReactComponent as Skills } from '../../assets/svg/skills.svg'
import { ReactComponent as Project } from '../../assets/svg/project.svg'

const NavBar = () => {
  return (
    <nav className='flex flex-col gap-4 fixed top-[20vh]'>
      <div className='cursor-pointer opacity-40 transition-all ease-in-out delay-150 py-1 w-10 hover:bg-slate-500 hover:w-40 hover:opacity-100 rounded duration-300'>
        <Profile className="h-8 w-8"/>
      </div>
      <div className='cursor-pointer opacity-40 transition-all ease-in-out delay-150 py-1 w-10 hover:bg-slate-500 hover:w-40  hover:opacity-100 rounded duration-300'>
        <Skills className="h-8 w-8"/>
      </div>
      <div className='cursor-pointer opacity-40 transition-all ease-in-out delay-150 py-1 w-10 hover:bg-slate-500 hover:w-40 hover:opacity-100 rounded duration-300'>
        <Project className="h-8 w-8"/>
      </div>
      <div className='cursor-pointer opacity-40 transition-all ease-in-out delay-150 py-1 w-10 hover:bg-slate-500 hover:w-40 hover:opacity-100 rounded duration-300'>
       <Contact className="h-8 w-8"/>
      </div>
    </nav>
  )
}

export default NavBar
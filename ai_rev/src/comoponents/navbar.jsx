import { useState } from 'react'
import '../App.css'
const links=[
  {name: "Home", href: "#home"},
  {name: "AI Types", href: "#types"},
  {name: "Benefits", href: "#benefits"},
  {name: "Contact", href: "#contact"}
]

function Navbar() {
  const[mobileMenuOpen, setMobileMenuOpen]=useState(false);
  return (

    <nav className='bg-white/80 backrob-blur-md shadow-sm fixed w-full z-50'>
      <div className='app-container flex justify-between items-center h-16'>
        {/* logo */ }
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ">AI Revolution</span>
        {/* desktop links */}
        <div className="hidden md:flex item-center space-x-8">
          {/*make loop for links */}
          {links.map((links)=>(
          <a key={links.name} href={links.href} className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
            {links.name}
          </a>
          ))}
          <a href="#" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition">Get Started</a>
        </div>
        {/*Mobile menu button */}
        <button onClick={()=>setMobileMenuOpen((prev)=>!prev)} className='md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {/*mobileMenueOpen */}
      {mobileMenuOpen&&(
        <div className='md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1'>
          {links.map((links)=>(
          <a key={links.name} href={links.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50">
            {links.name}
          </a>
          ))}
          <a href='#' className='bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition'>Get Started</a>
        </div>
      )}
    </nav>
    )
}

export default Navbar
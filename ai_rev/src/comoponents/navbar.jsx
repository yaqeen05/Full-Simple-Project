import React from 'react'
import '../App.css'
const links=[
  {name: "Home", href: "#home"},
  {name: "AI Types", href: "#types"},
  {name: "Benefits", href: "#benefits"},
  {name: "Contact", href: "#contact"}
]

function Navbar() {
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
        <a href="" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition">Get Started</a>
      </div>

      
      </div>      
    </nav>
    )
}

export default Navbar
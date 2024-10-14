"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <header className="bg-gray-900 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center px-4">
      <h1 className=" text-3xl font-bold ">TechConf 2024</h1>
      <ul className="space-x-4   hidden md:flex ">
        <li><Link href={"#About"} className="hover:underline">About</Link></li>
        <li><Link href={"#Speaker"} className="hover:underline">Speakers</Link></li>
        <li><Link href={"#Schedule"} className="hover:underline">Schedule</Link></li>
        <li><Link href="#Contact" className="hover:underline">Contact</Link></li>
      </ul>
      <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    </nav>

    {/* Mobile Menu */}
    {isOpen && (
        <div className="md:hidden">
          <Link href="/About" className="block py-2 px-4 text-sm hover:bg-gray-700">About</Link>
          <Link href="/Speakers" className="block py-2 px-4 text-sm hover:bg-gray-700">Speakers</Link>
          <Link href="/Schedule" className="block py-2 px-4 text-sm hover:bg-gray-700">Schedule</Link>
          <Link href="/Contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</Link>
        </div>
      )}
  </header>
  )
}

export default Header
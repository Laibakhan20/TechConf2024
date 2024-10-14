import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 TechConf. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:underline">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="hover:underline">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="hover:underline">
          <Linkedin  className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
    )
}

export default Footer
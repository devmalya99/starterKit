import { Menu, X } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
function Navigation({menuOpen, setMenuOpen}) {
  return (
    <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">Connectify</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link to="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
            <Link to="#about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
            <Link to="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
          
          <Link 
            to="/login" 
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Join Now
          </Link>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="#features" className="block px-3 py-2 rounded bg-blue-50 text-blue-600">Features</Link>
            <Link to="#about" className="block px-3 py-2 rounded hover:bg-blue-50">About</Link>
            <Link to="#testimonials" className="block px-3 py-2 rounded hover:bg-blue-50">Testimonials</Link>
            <Link to="#contact" className="block px-3 py-2 rounded hover:bg-blue-50">Contact</Link>
            <Link 
              to="/signup" 
              className="block w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center"
            >
              Sign Up Free
            </Link>
          </div>
        )}
      </nav>
  )
}

export default Navigation
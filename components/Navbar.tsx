'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">Navbar</h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2 border-t border-gray-200 pt-3">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-gray-800 py-2 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-2 transition-colors">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 py-2 transition-colors">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}




import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-blue-500 font-bold text-xl flex items-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-1"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M9.5 16.5v-9l7 4.5-7 4.5z" />
              </svg>
              RENTCARS
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Become a renter
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Rental deals
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              How it work
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Why choose us
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
              Sign in
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Sign up
            </button>
          </div>
        </nav>
    </>
  )
}

export default Navbar

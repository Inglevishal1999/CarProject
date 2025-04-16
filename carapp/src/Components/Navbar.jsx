// Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navbar.jsx - Handle Logout
// In Navbar.jsx
const handleLogout = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Include credentials if you're using cookies for sessions
    });

    if (!response.ok) {
      throw new Error('Failed to log out');
    }

    // Clear authentication state and localStorage
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from localStorage
    navigate('/signin'); // Redirect to sign-in page
  } catch (error) {
    console.error('Logout failed:', error);
  }
};



  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
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
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/become-renter" className="text-gray-600 hover:text-gray-900">
              Become a renter
            </Link>
            <Link to="/rental-deals" className="text-gray-600 hover:text-gray-900">
              Rental deals
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link to="/why-choose-us" className="text-gray-600 hover:text-gray-900">
              Why choose us
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Sign out
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/become-renter" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Become a renter
            </Link>
            <Link to="/rental-deals" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Rental deals
            </Link>
            <Link to="/how-it-works" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              How it works
            </Link>
            <Link to="/why-choose-us" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Why choose us
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                Sign out
              </button>
            ) : (
              <div className="space-y-1">
                <Link
                  to="/signin"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

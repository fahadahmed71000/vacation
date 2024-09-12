import React, { useState } from 'react';
import Logo from '../../public/assets/logo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#6EACDA] text-white w-full h-20">
      <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-12" src={Logo} alt="Logo" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar}>
            {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>

        {/* Navbar Links (Hidden on small screens) */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-6 lg:gap-12">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/cardpage" className="hover:text-gray-300">Destinations</Link>
          <Link to="/overview" className="hover:text-gray-300">Overview</Link>
          <Link to="/detail" className="hover:text-gray-300">Details</Link>
          <Link to="/vision" className="hover:text-gray-300">Vision</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Sign Up Button (Hidden on small screens) */}
        <div className="hidden md:flex items-center">
          <Link to="/signup">
            <button className="rounded-md px-4 py-2 bg-[#4475F2] hover:bg-[#355fcc] transition duration-300 flex items-center">
              Sign up Now <ArrowForwardIcon className="ml-1" />
            </button>
          </Link>
        </div>

        {/* Sidebar for small screens */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#6EACDA] text-white w-64 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="p-6">
            <button onClick={toggleSidebar} className="mb-8">
              <CloseIcon fontSize="large" />
            </button>
            <div className="flex flex-col gap-6">
              <Link to="/home" onClick={closeSidebar} className="hover:text-gray-300">Home</Link>
              <Link to="/cardpage" onClick={closeSidebar} className="hover:text-gray-300">Destinations</Link>
              <Link to="/overview" onClick={closeSidebar} className="hover:text-gray-300">Overview</Link>
              <Link to="/detail" onClick={closeSidebar} className="hover:text-gray-300">Details</Link>
              <Link to="/vision" onClick={closeSidebar} className="hover:text-gray-300">Vision</Link>
              <Link to="/login" onClick={closeSidebar} className="hover:text-gray-300">Login</Link>
              <Link to="/contact" onClick={closeSidebar} className="hover:text-gray-300">Contact</Link>
              <div className="mt-6">
                <Link to="/signup" onClick={closeSidebar}>
                  <button className="rounded-md px-4 py-2 bg-[#4475F2] hover:bg-[#355fcc] transition duration-300 w-full flex items-center justify-center">
                    Sign up Now <ArrowForwardIcon className="ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

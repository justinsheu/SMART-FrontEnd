// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import smartLogo from './logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const navigate = useNavigate();

  const { isAuthenticated ,logout , loginWithRedirect } = useAuth0();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-white p-4 border-b border-gray-300 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={smartLogo} alt="SMART Logo" className="h-12" />
          <div className="text-black font-bold text-xl">SMART Project</div>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-black" onClick={() => handleNavLinkClick('/')}>
            Home
          </a>
          <a href="#" className="text-black" onClick={() => handleNavLinkClick('/about')}>
            About
          </a>
          <a href="#" className="text-black" onClick={() => handleNavLinkClick('/contact')}>
            Contact
          </a>
          {isAuthenticated ? (

          <button onClick={() => logout()}>
            Logout
          </button>
      ) : (
          <button onClick={() => loginWithRedirect()}>
            Login
          </button>
      )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


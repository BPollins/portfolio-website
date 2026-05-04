import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'CV', path: '/cv' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'COURTFINDER', path: '/courtfinder' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-white font-mono text-lg font-bold hover:text-cyan-400 transition-colors"
            onClick={closeMenu}
          >
            BP
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-mono text-sm tracking-wider transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-white border-b border-cyan-400 pb-1'
                    : 'text-gray-400 hover:text-cyan-400 hover:border-b hover:border-cyan-400 pb-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`font-mono text-sm tracking-wider transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-white border-l-2 border-cyan-400 pl-4'
                      : 'text-gray-400 hover:text-cyan-400 hover:border-l-2 hover:border-cyan-400 pl-4'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
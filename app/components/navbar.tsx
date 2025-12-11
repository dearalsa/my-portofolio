'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '/', hoverColor: '#AB4E52' },
  { name: 'About Me', href: '/about', hoverColor: '#78373C' },
  { name: 'Experience', href: '/experience', hoverColor: '#955251' },
  { name: 'Projects', href: '/projects', hoverColor: '#683939' },
  { name: 'Contact', href: '/contact', hoverColor: '#955251'},
];

export default function Navbar() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full overflow-hidden z-20" style={{ backgroundColor: '#FFF5F7' }}>
        <div className="relative h-[150px] md:h-[100px] lg:h-[130px]">
          {/* desktop svg */}
          <img
            src="/navbar.svg"
            alt="Navbar Background Wave"
            className="hidden md:block absolute inset-0 w-full h-full object-fill pointer-events-none"
            style={{ objectPosition: 'center -25px' }}
          />
          {/* mobile svg */}
          <img
            src="/navbarmobile.svg"
            alt="Navbar Mobile Background"
            className="block md:hidden absolute inset-0 w-full h-[150%] object-fill pointer-events-none"
            style={{ objectPosition: 'center -75px' }}
          />

          <nav className="font-['Cooper'] absolute inset-0 pt-3 md:pt-4">
            <div className="px-4 md:px-8">
              <div className="flex items-center justify-end h-full relative">
                <div className="hidden md:flex items-center gap-6 lg:gap-8 w-full justify-center mt-3 md:mt-4">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg lg:text-2xl -mt-2 transition-colors duration-200"
                      style={{ color: '#ffffffff' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = link.hoverColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <button
                className="md:hidden z-[60] p-2 rounded-md absolute left-4 top-2"
                style={{ color: '#3A3332' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                  {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transform transition-opacity duration-300 md:hidden font-['Cooper'] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isMenuOpen && <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />}

        <div
          className="absolute top-0 left-0 w-3/4 h-full flex flex-col items-start px-6 pt-12 space-y-2 transition-transform duration-300 ease-in-out"
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            backgroundColor: '#fff7f9',
          }}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-md"
            style={{ color: '#3A3332' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-7 h-7" />
          </button>

          <div className="w-full space-y-4 pt-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 transition-all duration-200 w-full text-xl"
                style={{ color: '#3A3332', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.color = link.hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3A3332'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white">ReSearchFi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/upload" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#1E3A8A] transition-colors">
                Upload
              </Link>
              <Link href="/explore" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#1E3A8A] transition-colors">
                Explore
              </Link>
              <Link href="/publish" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#1E3A8A] transition-colors">
                Earnings
              </Link>
            
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2563EB] transition-colors">
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1E3A8A] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/research" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1E3A8A]">
              Research
            </Link>
            <Link href="/explore" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1E3A8A]">
              Explore
            </Link>
            <Link href="/publish" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1E3A8A]">
              Publish
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1E3A8A]">
              About
            </Link>
            <button className="w-full mt-4 bg-[#1E3A8A] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2563EB] transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
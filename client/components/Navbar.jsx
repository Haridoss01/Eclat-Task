'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const navItems = [
  { id: '1', navText: 'Home', navLink: '/' },
  { id: '2', navText: 'About', navLink: '/about' },
  { id: '3', navText: 'Contact', navLink: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className="section-padding py-4 w-full border-b border-[var(--border)] sticky">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-bold text-[var(--secondary)]">
          <span className="text-[var(--primary)]">M</span> NextGen
        </h2>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.navLink} className="text-[var(--text)] hover:text-[var(--primary)] font-medium">
                {item.navText}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[var(--primary)] text-white px-5 py-2 rounded-full font-medium hover:bg-[var(--primary-dark)] transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/admin/login"
            className='border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] rounded-full px-5 py-2 font-medium hover:bg-[var(--primary)] hover:text-white transition-colors'>
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-[var(--text)]"
        >
          {isMobileMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pt-4 pb-2">
          {navItems.map((item) => (
            <Link key={item.id} href={item.navLink} onClick={() => setIsMobileMenuOpen(false)}>
              {item.navText}
            </Link>
          ))}
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/contact"
              className="bg-[var(--primary)] text-white px-5 py-2 rounded-full font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/admin/login"
              className='border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] rounded-full px-5 py-2 font-medium hover:bg-[var(--primary)] hover:text-white transition-colors'>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
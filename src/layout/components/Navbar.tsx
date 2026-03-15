"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading text-2xl font-bold text-navy">
              Deco Decoster
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-darkText hover:text-terracotta transition-colors font-body"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-darkText hover:text-terracotta transition-colors font-body"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-darkText hover:text-terracotta transition-colors font-body"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-darkText hover:text-terracotta transition-colors font-body"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-terracotta text-white px-6 py-2 rounded-button hover:bg-opacity-90 transition-colors font-body font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-darkText hover:text-terracotta p-2"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

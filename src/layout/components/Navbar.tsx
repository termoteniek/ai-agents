"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Navigation links configuration
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

// Section IDs for active state detection
const sectionIds = ["home", "services", "gallery", "testimonials", "contact"];

// Helper function to extract section ID from href (removes leading "#")
const getSectionIdFromHref = (href: string): string => {
  return href.startsWith("#") ? href.slice(1) : href;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const scrollPosition = window.scrollY + 100;

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-navy" : "text-navy"
                }`}
              >
                Deco Decoster
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center space-x-8"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => scrollToSection(link.href)}
                 className={`font-body text-base font-medium transition-all duration-300 relative group ${
                     activeSection === getSectionIdFromHref(link.href)
                       ? "text-terracotta"
                       : "text-darkText hover:text-terracotta"
                   }`}
                >
                  {link.label}
                  {/* Active state underline */}
                  <motion.span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta transition-all duration-300 ${
                      activeSection === getSectionIdFromHref(link.href)
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                    }`}
                  />
                </motion.button>
              ))}

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={() => scrollToSection("#contact")}
                className="bg-terracotta text-white px-6 py-3 rounded-button font-body font-semibold shadow-button hover:shadow-hover hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </motion.button>
            </motion.div>

            {/* Mobile Hamburger Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-darkText hover:text-terracotta transition-colors z-50 relative"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Slide-in Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Slide-in Menu Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.3,
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header with Logo */}
                <div className="p-6 border-b border-lightCream">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-heading text-xl font-bold text-navy">
                      Deco Decoster
                    </span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.button
                          whileHover={{ x: 8, backgroundColor: "rgba(194, 91, 59, 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(link.href)}
                        className={`w-full text-left px-4 py-3 rounded-image font-body text-lg font-medium transition-all duration-300 ${
                             activeSection === getSectionIdFromHref(link.href)
                               ? "text-terracotta bg-terracotta/5"
                               : "text-darkText hover:text-terracotta"
                           }`}
                         >
                           {link.label}
                           {activeSection === getSectionIdFromHref(link.href) && (
                            <motion.span
                              layoutId="activeLink"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-terracotta rounded-r"
                            />
                          )}
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="p-6 pt-0"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-terracotta text-white px-6 py-4 rounded-button font-body font-semibold shadow-button hover:shadow-hover hover:bg-opacity-90 transition-all duration-300"
                  >
                    Get Free Quote
                  </motion.button>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Desktop Floating Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex fixed top-6 inset-x-0 justify-center z-50"
      >
        <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-2xl rounded-full border border-gray-200/50 dark:border-gray-800/50 shadow-2xl px-6 py-3">
          <div className="flex items-center gap-1 justify-center">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute inset-0 rounded-full bg-gray-200/50 dark:bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
              </a>
            ))}
            
            <div className="w-px h-5 bg-gray-300 dark:bg-gray-700 mx-1"></div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-text-secondary-dark" />
              ) : (
                <Moon className="w-4 h-4 text-text-secondary-light" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:hidden fixed top-4 inset-x-0 flex justify-center z-50"
      >
        <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-2xl rounded-full border border-gray-200/50 dark:border-gray-800/50 shadow-2xl px-4 py-3 w-[90%] max-w-sm">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-text-secondary-dark" />
              ) : (
                <Moon className="w-4 h-4 text-text-secondary-light" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl overflow-hidden"
            >
              <div className="px-3 py-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm text-center text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}


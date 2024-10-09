import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from '@/config/site'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Collezione', path: '/collection' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' },
  ]

  return (
    <motion.header 
      className="bg-background sticky top-0 z-50 w-full border-b border-border/40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary flex items-center">
            <siteConfig.logo className="w-6 h-6 mr-2" />
            {siteConfig.name}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 py-4 px-4 bg-background">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
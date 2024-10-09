import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Youtube, href: '#' },
    
  ]

  return (
    <motion.footer 
      className="bg-background sticky bottom-0 z-50 w-full border-t border-border/40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary flex items-center">
              <siteConfig.logo className="w-6 h-6 mr-2" />
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {['Collezione', 'Chi Siamo', 'Contatti', 'FAQ', 'Spedizioni'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-foreground hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>{item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Iscriviti per ricevere le ultime novità e offerte esclusive</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="La tua email" 
                className="flex-grow"
              />
              <Button type="submit">
                Iscriviti
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} {siteConfig.name}. Tutti i diritti riservati.
          </div>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
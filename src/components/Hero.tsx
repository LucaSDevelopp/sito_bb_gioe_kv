import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'

const Hero = () => {
  return (
    <section className="text-center mb-16 py-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)",
            "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0) 70%)",
            "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/collection">Esplora la Collezione</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
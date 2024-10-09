import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

const CallToAction = () => {
  return (
    <motion.section 
      className="text-center mb-16 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Trova il Gioiello Perfetto per Te</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        La nostra missione è far risplendere la tua bellezza naturale con gioielli che parlano di te. Trova la collana o il bracciale che più si adatta al tuo stile e vivi l'emozione di indossare un pezzo unico, creato con passione.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent">
        <a href="#about">Scopri di Più</a>
      </Button>
    </motion.section>
  )
}

export default CallToAction
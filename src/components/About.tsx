import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
      className="mb-16 p-8 bg-card rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg mb-6 leading-relaxed">
        Ogni pezzo racconta una storia, ogni dettaglio racchiude passione e cura. Le nostre collane e i nostri gioielli fatti a mano non sono solo accessori, ma vere opere d'arte create per chi desidera qualcosa di unico e autentico. Realizzati con materiali di alta qualità e un'attenzione particolare ai dettagli, i nostri gioielli aggiungono un tocco di eleganza e stile ad ogni occasione.
      </p>
    </motion.section>
  )
}

export default About
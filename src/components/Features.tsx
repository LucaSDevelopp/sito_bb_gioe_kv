import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Gem, Feather, Sparkles } from 'lucide-react'

const Features = () => {
  const features = [
    { title: "Artigianalità Pura", description: "Ogni gioiello è realizzato con amore, combinando tradizione e creatività per un design esclusivo.", icon: Feather },
    { title: "Materiali Naturali", description: "Utilizziamo pietre preziose, perle e metalli di alta qualità, selezionati con cura per garantire resistenza e bellezza duratura.", icon: Gem },
    { title: "Stile Unico e Personalizzato", description: "Ogni creazione è pensata per rispecchiare la tua personalità, con possibilità di personalizzazione per rendere il tuo gioiello veramente tuo.", icon: Sparkles },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Perché Scegliere Noi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
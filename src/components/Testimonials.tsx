import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Testimonianze</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <p className="italic mb-4">"Un gioiello davvero speciale! Non solo è bellissimo, ma sapendo che è stato fatto a mano con cura, ha un valore ancora più profondo per me."</p>
              <p className="font-semibold">— Maria L.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <p className="italic mb-4">"Ho acquistato una collana per un'occasione speciale e non potevo essere più soddisfatta. Design unico e servizio impeccabile."</p>
              <p className="font-semibold">— Laura G.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
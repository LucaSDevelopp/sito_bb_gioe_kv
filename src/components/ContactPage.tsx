import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const ContactPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    toast({
      title: "Messaggio Inviato",
      description: "Grazie per il tuo messaggio. Ti risponderemo presto!",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Contattaci</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Informazioni di Contatto</h2>
            <p className="mb-4">Siamo qui per rispondere a tutte le tue domande e ascoltare i tuoi desideri. Non esitare a contattarci per qualsiasi informazione.</p>
            <ul className="space-y-2">
              <li><strong>Indirizzo:</strong> Via dei Gioielli 123, 00100 Roma, Italia</li>
              <li><strong>Email:</strong> info@gioielliartigianali.com</li>
              <li><strong>Telefono:</strong> +39 06 1234567</li>
              <li><strong>Orari:</strong> Lun-Ven: 9:00-18:00, Sab: 10:00-15:00</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Inviaci un Messaggio</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Il Tuo Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="La Tua Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Il Tuo Messaggio"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Invia Messaggio</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export default ContactPage
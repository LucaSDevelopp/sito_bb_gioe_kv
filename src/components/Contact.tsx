import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const Contact = () => {
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
    <motion.section 
      id="contact" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-6 text-center">Contattaci</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-center">
            Hai domande o desideri una creazione personalizzata? Siamo qui per ascoltarti e realizzare i tuoi desideri.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div>
              <p className="font-semibold">Email:</p>
              <p>info@esempio.com</p>
            </div>
            <div>
              <p className="font-semibold">Telefono:</p>
              <p>+39 123 456 789</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
    </motion.section>
  )
}

export default Contact
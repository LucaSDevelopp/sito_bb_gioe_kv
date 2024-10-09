import { useState } from 'react'
import { useCart } from 'react-use-cart'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, removeItem } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email with the cart items and form data
    console.log('Form submitted:', { ...formData, items })
    toast({
      title: "Richiesta Inviata",
      description: "Grazie per la tua richiesta. Ti contatteremo presto!",
    })
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50"
        size="icon"
      >
        <ShoppingCart />
        {totalUniqueItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalUniqueItems}
          </span>
        )}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Carrello</h2>
                <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon">
                  <X />
                </Button>
              </div>
              {isEmpty ? (
                <p>Il tuo carrello è vuoto.</p>
              ) : (
                <>
                  <ul className="space-y-4 mb-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-grow">
                          <h3 className="font-semibold">{item.name}</h3>
                        </div>
                        <Button onClick={() => removeItem(item.id)} variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefono (opzionale)"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <Textarea
                      name="message"
                      placeholder="Messaggio (opzionale)"
                      rows={3}
                    />
                    <Button type="submit" className="w-full">Invia Richiesta</Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart
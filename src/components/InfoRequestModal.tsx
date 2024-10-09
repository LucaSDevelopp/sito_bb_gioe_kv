import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from "@/hooks/use-toast"

interface InfoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  onAddItem: () => void
  selectedItems: number[]
  items: { id: number; name: string; src: string }[]
}

const InfoRequestModal = ({ isOpen, onClose, onAddItem, selectedItems, items }: InfoRequestModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, selectedItems })
    toast({
      title: "Richiesta Inviata",
      description: "Grazie per la tua richiesta. Ti contatteremo presto!",
    })
    onClose()
  }

  const selectedItemsDetails = items.filter(item => selectedItems.includes(item.id))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-background p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Richiedi Informazioni</h2>
              <Button onClick={onClose} variant="ghost" size="icon">
                <X />
              </Button>
            </div>
            
            {selectedItemsDetails.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Articoli selezionati:</h3>
                <ul className="space-y-2">
                  {selectedItemsDetails.map(item => (
                    <li key={item.id} className="flex items-center space-x-2">
                      <img src={item.src} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
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
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1">Invia Richiesta</Button>
                <Button type="button" onClick={onAddItem} variant="outline" className="flex-1">
                  Altro Articolo
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InfoRequestModal
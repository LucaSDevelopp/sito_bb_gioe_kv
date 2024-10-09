import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import InfoRequestModal from './InfoRequestModal'


const Collection = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<number | null>(null)

  const items = [
    { id: 1, src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Collana d'oro", name: "Collana Sole d'Oro" },
    { id: 2, src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Anello con diamante", name: "Anello Eterno Splendore" },
    { id: 3, src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Orecchini di perle", name: "Orecchini Perle del Mare" },
    { id: 4, src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Bracciale d'argento", name: "Bracciale Luna Argentata" },
    { id: 5, src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1086&q=80", alt: "Pendente di smeraldo", name: "Pendente Cuore di Smeraldo" },
    { id: 6, src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", alt: "Set di anelli", name: "Set Anelli Armonia" },
  ]

  const handleRequestInfo = (itemId: number) => {
    setCurrentItem(itemId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentItem(null)
  }

  const handleAddItem = () => {
    if (currentItem && !selectedItems.includes(currentItem)) {
      setSelectedItems([...selectedItems, currentItem])
    }
    handleCloseModal()
  }

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">La Nostra Collezione</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
          >
            <Card className={`overflow-hidden ${selectedItems.includes(item.id) ? 'ring-2 ring-accent' : ''}`}>
              <CardContent className="p-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <Button 
                      onClick={() => handleRequestInfo(item.id)}
                      className="w-full bg-primary text-primary-foreground hover:bg-accent"
                    >
                      Richiedi Info
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <InfoRequestModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onAddItem={handleAddItem}
        selectedItems={selectedItems}
        items={items}
      />
    </motion.div>
  )
}

export default Collection
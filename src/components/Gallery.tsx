import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const items = [
    { src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Collana d'oro" },
    { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Anello con diamante" },
    { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Orecchini di perle" },
    { src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "Bracciale d'argento" },
  ]

  return (
    <motion.section 
      id="gallery" 
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Le Nostre Creazioni</h2>
      <p className="text-lg mb-8">
        Sfoglia la nostra collezione e lasciati ispirare dai disegni esclusivi. Troverai collane eleganti, bracciali sofisticati e orecchini dal fascino senza tempo, ognuno dei quali è stato creato per aggiungere un tocco di magia al tuo stile quotidiano.
      </p>
      <Carousel className="w-full max-w-4xl mx-auto mb-8">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[16/9]"
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">{item.alt}</div>
                  </motion.div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/collection">Esplora la Collezione Completa</Link>
      </Button>
    </motion.section>
  )
}

export default Gallery
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const AboutPage = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Chi Siamo</h1>
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">La Nostra Storia</h2>
          <p className="mb-4">
            Gioielli Artigianali nasce dalla passione per l'arte orafa e dal desiderio di creare pezzi unici che raccontino storie. Fondata nel cuore dell'Italia, la nostra azienda combina tecniche tradizionali con design innovativi per dar vita a gioielli che sono vere e proprie opere d'arte.
          </p>
          <p>
            Ogni nostro pezzo è il risultato di ore di lavoro meticoloso, attenzione ai dettagli e amore per la bellezza. Utilizziamo solo materiali di alta qualità, selezionati con cura per garantire non solo l'estetica ma anche la durabilità dei nostri gioielli.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">I Nostri Valori</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Artigianalità: Ogni pezzo è realizzato a mano con cura e dedizione.</li>
            <li className="mb-2">Qualità: Utilizziamo solo i migliori materiali per garantire gioielli duraturi.</li>
            <li className="mb-2">Unicità: Creiamo pezzi unici che riflettono la personalità di chi li indossa.</li>
            <li className="mb-2">Sostenibilità: Ci impegniamo per pratiche etiche e sostenibili nella produzione.</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Il Nostro Team</h2>
          <p className="mb-4">
            Dietro ogni gioiello c'è un team di artigiani appassionati, designer creativi e professionisti dedicati. La nostra diversità di competenze e background ci permette di creare collezioni che uniscono tradizione e innovazione.
          </p>
          <p>
            Siamo orgogliosi di mettere la nostra esperienza e creatività al servizio dei nostri clienti, per realizzare gioielli che non sono solo accessori, ma veri e propri simboli di bellezza e significato personale.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AboutPage
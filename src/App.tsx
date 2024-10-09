import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Collection from '@/components/Collection'
import AboutPage from '@/components/AboutPage'
import ContactPage from '@/components/ContactPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Hero />
              <About />
              <Features />
              <Gallery />
              <Testimonials />
              <CallToAction />
              <Contact />
            </main>
          } />
          <Route path="/collection" element={<Collection />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/contatti" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
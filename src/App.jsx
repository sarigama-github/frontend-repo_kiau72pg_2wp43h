import Hero3D from './components/Hero3D'
import Reasons from './components/Reasons'
import BrandsAndTypes from './components/BrandsAndTypes'
import Services from './components/Services'
import Locations from './components/Locations'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/573001234567"
        className="rounded-full bg-emerald-600 text-white px-5 py-3 font-semibold shadow-lg hover:bg-emerald-700"
      >
        WhatsApp
      </a>
      <a
        href="#contacto"
        className="rounded-full bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg hover:bg-blue-700"
      >
        Contáctanos
      </a>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <FloatingContact />
      <Hero3D />
      <Reasons />
      <BrandsAndTypes />
      <Services />
      <Locations />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

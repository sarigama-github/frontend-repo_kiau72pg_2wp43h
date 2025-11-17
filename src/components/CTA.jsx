export default function CTA() {
  return (
    <section id="contacto" className="sticky bottom-4 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 shadow-xl">
          <a
            href="https://wa.me/573001234567"
            className="flex-1 text-center font-semibold text-white"
          >
            ¿Necesitas un repuesto ya? Escríbenos por WhatsApp 300 1234567
          </a>
          <a
            href="#form"
            className="px-4 py-2 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50"
          >
            Formulario
          </a>
        </div>
      </div>
    </section>
  )
}

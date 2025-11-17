export default function Services() {
  const services = [
    'Diagnóstico de la pieza que realmente necesita tu máquina',
    'Garantía en cada repuesto vendido',
    'Soporte técnico experto',
    'Amplia experiencia y reputación local'
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Servicios y Beneficios</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s} className="p-5 rounded-lg border border-slate-200 bg-slate-50/60">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

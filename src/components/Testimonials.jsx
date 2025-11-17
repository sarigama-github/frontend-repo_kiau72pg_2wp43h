export default function Testimonials() {
  const items = [
    {
      name: 'Juan P. - Belén',
      text: 'Pedí un filtro y en menos de 2 horas ya lo tenía. Excelente asesoría.'
    },
    {
      name: 'Marta G. - Barrio Triste',
      text: 'Me orientaron sobre el repuesto exacto para mi Komatsu. Muy rápido.'
    },
    {
      name: 'Carlos R. - Bucaramanga',
      text: 'Compra y envío express, llegó al día siguiente. Recomendados.'
    }
  ]
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Testimonios</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <p className="text-slate-800">"{t.text}"</p>
              <p className="mt-3 text-sm text-slate-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

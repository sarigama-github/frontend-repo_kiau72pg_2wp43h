export default function Reasons() {
  const items = [
    'Equipo especializado en repuestos de maquinaria pesada.',
    'Asesoría rápida vía WhatsApp o teléfono.',
    'Selección de repuestos para Caterpillar, Komatsu, CTP, Volvo y más.',
    'Repuestos originales y alternativos con garantía.',
    'Entrega inmediata en Medellín y envíos a todo el país.',
    'Sedes estratégicas en Belén y Barrio Triste para atención personalizada.'
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Razones para Elegir Gestor de Partes</h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <li key={i} className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

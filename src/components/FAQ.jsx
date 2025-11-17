export default function FAQ() {
  const faqs = [
    {
      q: '¿Ofrecen repuestos originales y alternativos?',
      a: 'Sí, contamos con ambas opciones según tu necesidad y presupuesto.'
    },
    {
      q: '¿Envían a otras ciudades fuera de Medellín?',
      a: '¡Claro! Hacemos despachos a cualquier parte de Colombia.'
    },
    { q: '¿Qué garantía tiene mi compra?', a: 'Todos los repuestos incluyen garantía de funcionamiento y respaldo técnico.' }
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 rounded-lg border border-slate-200 bg-slate-50/60 open:bg-white transition">
              <summary className="cursor-pointer font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

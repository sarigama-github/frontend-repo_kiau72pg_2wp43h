export default function BrandsAndTypes() {
  const brands = ['Caterpillar', 'Komatsu', 'Volvo', 'John Deere', 'CTP']
  const types = ['Motores', 'Filtros', 'Piezas hidráulicas', 'Transmisiones', 'Componentes eléctricos', 'Tren de rodaje']
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Marcas y Tipos de Repuestos</h2>
        <p className="mt-2 text-slate-700">Trabajamos con las marcas Caterpillar, Komatsu, Volvo, John Deere y CTP. Siempre piezas de calidad certificada y respaldo técnico.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900">Marcas</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {brands.map((b) => (
                <span key={b} className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700">{b}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Tipos</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {types.map((t) => (
                <span key={t} className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

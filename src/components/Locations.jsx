export default function Locations() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Ubicación y Cobertura</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-slate-200 bg-white">
            <h3 className="font-semibold text-slate-900">Belén</h3>
            <p className="text-slate-700">Calle XX #XX-XX, Medellín, Antioquia</p>
          </div>
          <div className="p-5 rounded-lg border border-slate-200 bg-white">
            <h3 className="font-semibold text-slate-900">Barrio Triste</h3>
            <p className="text-slate-700">Calle XX #XX-XX, Medellín, Antioquia</p>
          </div>
          <div className="p-5 rounded-lg border border-emerald-300 bg-emerald-50">
            <p className="text-slate-800">¡Cubrimos Medellín, cercanías y todo el territorio nacional con envíos express!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

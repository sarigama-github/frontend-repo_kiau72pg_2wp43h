export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
        <div className="space-y-1">
          <p className="font-semibold">Gestor de Partes | Repuestos Maquinaria Pesada Medellín</p>
          <p className="text-sm">Sedes: Belén & Barrio Triste</p>
        </div>
        <div className="text-center">
          <a href="https://wa.me/573001234567" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">WhatsApp: 300 1234567</a>
        </div>
        <div className="text-right text-sm">© 2025 Gestor de Partes</div>
      </div>
    </footer>
  )
}

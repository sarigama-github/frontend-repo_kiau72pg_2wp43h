import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Gear({ size = 260, className = '' }) {
  const teeth = 12
  const rOuter = size / 2
  const rInner = rOuter * 0.6
  const teethDepth = rOuter * 0.12
  const center = size / 2

  const path = []
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * Math.PI * 2
    const next = ((i + 1) / teeth) * Math.PI * 2
    const a1 = angle + (Math.PI / teeth) * 0.3
    const a2 = next - (Math.PI / teeth) * 0.3

    const x1 = center + Math.cos(angle) * (rOuter - teethDepth)
    const y1 = center + Math.sin(angle) * (rOuter - teethDepth)

    const xt1 = center + Math.cos(a1) * rOuter
    const yt1 = center + Math.sin(a1) * rOuter

    const xt2 = center + Math.cos(a2) * rOuter
    const yt2 = center + Math.sin(a2) * rOuter

    const x2 = center + Math.cos(next) * (rOuter - teethDepth)
    const y2 = center + Math.sin(next) * (rOuter - teethDepth)

    path.push(`L ${x1} ${y1}`)
    path.push(`L ${xt1} ${yt1}`)
    path.push(`L ${xt2} ${yt2}`)
    path.push(`L ${x2} ${y2}`)
  }

  const d = [`M ${center + rInner} ${center}`]
  for (let i = 0; i <= 360; i += 5) {
    const rad = (i * Math.PI) / 180
    const x = center + Math.cos(rad) * rInner
    const y = center + Math.sin(rad) * rInner
    d.push(`L ${x} ${y}`)
  }
  const gearD = `M ${center + (rOuter - teethDepth)} ${center} ${path.join(' ')} Z`

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6eef5" />
          <stop offset="100%" stopColor="#c7d6e8" />
        </linearGradient>
        <radialGradient id="shadow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6aa4ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <g filter="url(#blur)" opacity="0.5">
        <circle cx={center + 6} cy={center + 6} r={rOuter} fill="url(#shadow)" />
      </g>
      <path d={gearD} fill="url(#steel)" stroke="#a4b7cd" strokeWidth="2" />
      <circle cx={center} cy={center} r={rInner} fill="#f8fbff" stroke="#a4b7cd" strokeWidth="2" />
      <circle cx={center} cy={center} r={8} fill="#3b82f6" />
    </svg>
  )
}

export default function Hero3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const tilt = useTransform(scrollYProgress, [0, 1], [8, -8])

  return (
    <section ref={ref} className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Repuestos para Maquinaria Pesada en Medellín –
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Gestor de Partes</span>
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              Descubre los mejores repuestos originales y alternativos para maquinaria pesada en Medellín. Con sedes en Belén y Barrio Triste, brindamos asesoría personalizada, garantía y envío rápido para todo Colombia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/573001234567" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700 transition">
                WhatsApp 300 1234567
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition">
                Solicitar asesoría
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y, rotate, scale }} className="mx-auto w-full flex items-center justify-center">
              <motion.div style={{ rotateX: tilt, rotateY: tilt }} className="[perspective:1000px]">
                <Gear size={320} className="drop-shadow-xl" />
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 -z-10">
              <div className="h-full w-full" style={{ background: 'radial-gradient(1000px 300px at 70% 30%, rgba(59,130,246,0.12), transparent)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-sm animate-bounce">
        Desliza para ver más
      </div>
    </section>
  )
}

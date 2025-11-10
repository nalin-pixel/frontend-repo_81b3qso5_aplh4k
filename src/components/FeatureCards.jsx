import { motion } from 'framer-motion'
import { Sparkles, Wand2, Rocket, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Futuristic UI',
    desc: 'Clean, minimal surfaces with glassmorphism and soft gradients.',
  },
  {
    icon: Wand2,
    title: 'Micro-interactions',
    desc: 'Subtle motion that feels purposeful and delightful.',
  },
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'Optimized animations and best practices for speed.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable foundation',
    desc: 'Built on modern tooling with solid conventions.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-24 bg-[#050915]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Designed for presence</h2>
          <p className="mt-4 text-white/70">Velar amplifies your product with a polished, cinematic feel.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 grid place-items-center">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

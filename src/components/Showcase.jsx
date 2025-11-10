import { motion } from 'framer-motion'

const items = Array.from({ length: 8 }, (_, i) => ({
  title: `Concept ${i + 1}`,
  tag: ['UI', 'Motion', 'Systems', 'Minimal'][i % 4],
}))

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-[#050915]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Showcase</h2>
          <p className="mt-4 text-white/70">A selection of polished concepts to spark ideas.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/30 to-teal-400/30 blur-2xl" />
              <div className="relative">
                <div className="h-32 rounded-xl bg-[#0b1224] ring-1 ring-white/10" />
                <div className="mt-4">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">{item.tag}</div>
                  <h3 className="mt-2 text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

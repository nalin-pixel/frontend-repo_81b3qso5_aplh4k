import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030711]/80 via-[#030711]/40 to-[#030711]/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Introducing Velar — a minimal, futuristic toolkit
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Build interactive, tech-forward experiences with elegance
          </h1>
          <p className="mt-6 text-lg text-white/70">
            A refined, Cluely-inspired interface with smooth motion, glass surfaces, and a living 3D hero. Launch your next idea with an aesthetic that feels alive.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-medium hover:shadow-xl transition-all">
              Get Started
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-6 py-3 font-medium ring-1 ring-white/20 hover:bg-white/15 transition-all">
              Explore Showcase
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

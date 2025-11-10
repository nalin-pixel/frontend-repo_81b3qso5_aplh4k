export default function Footer() {
  return (
    <footer className="bg-[#040814] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Velar. All rights reserved.</p>
          <div className="text-white/60 text-sm">Inspired by refined, minimalist design.</div>
        </div>
      </div>
    </footer>
  )
}

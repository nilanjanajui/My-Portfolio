export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-primary/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent text-3xl">terminal</span>
            <span className="text-xl font-bold tracking-tight text-light-bg">DevPortfolio</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {['home', 'projects', 'skills', 'about', 'experience', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-text-dim hover:text-accent transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
            <span className="material-symbols-outlined text-sm">download</span>
            Resume
          </button>

        </div>
      </div>
    </header>
  )
}
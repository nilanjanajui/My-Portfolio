export default function Contact() {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary border border-white/5 rounded-[3rem] p-10 lg:p-24 flex flex-col items-center text-center shadow-2xl">

          <h2 className="text-5xl lg:text-7xl font-black text-light-bg mb-10 max-w-3xl leading-tight">
            Let's build something{' '}
            <span className="text-accent underline decoration-white/10 underline-offset-8">exceptional</span>{' '}
            together.
          </h2>

          <p className="text-xl text-text-dim mb-16 max-w-2xl font-medium">
            "I don't just build interfaces — I build applications that solve problems and work reliably."
          </p>

          {/* Email Input */}
          <div className="w-full max-w-xl mb-16 space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-primary border border-white/10 rounded-xl px-6 py-4 text-light-bg font-bold placeholder:text-text-dim/50 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
            <button className="w-full bg-accent hover:bg-accent-hover text-white font-black py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-black/20">
              Send Message
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {[
              { icon: 'mail', label: 'Email', href: 'nilanjana.csecu@gmail.com' },
              { icon: 'share', label: 'LinkedIn', href: '#' },
              { icon: 'terminal', label: 'GitHub', href: 'https://github.com/nilanjanajui' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href !== '#' ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 bg-white/5 px-8 py-4 rounded-xl border border-white/10 text-light-bg hover:bg-white/10 hover:-translate-y-1 transition-all group"
              >
                <span className="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-bold">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="h-px w-full max-w-5xl bg-white/5 mb-12"></div>
          <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl text-text-dim font-medium text-sm gap-6">
            <p>&copy; {new Date().getFullYear()} Nilanjana Das Jui. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Open Source</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
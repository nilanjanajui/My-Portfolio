import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-40 px-6 hero-gradient overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-up">
          <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="relative w-full h-full border-2 border-accent p-2 shadow-2xl overflow-hidden bg-secondary/30 backdrop-blur-sm rounded-full hover:shadow-[0_0_30px_rgba(113,90,90,0.5)] transition-all duration-500">
              <img
                src={profileImg}
                alt="Developer Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-full hover:scale-105"
              />
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-10 lg:-right-6 bg-primary border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-light-bg uppercase tracking-widest">Open to projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-10 order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-light-bg text-xs font-bold uppercase tracking-widest w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-light-bg">
            Building real-world web applications with{' '}
            <span className="text-accent">clean UI</span> and solid logic.
          </h1>

          <p className="text-lg lg:text-xl text-text-dim max-w-xl">
            I focus on creating responsive, user-friendly applications using modern web technologies,
            with an emphasis on performance, usability, and problem-solving.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-accent/10 transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="https://github.com" className="bg-white/5 hover:bg-white/10 text-light-bg border border-white/10 px-10 py-5 rounded-xl font-bold transition-all flex items-center gap-2 transform hover:-translate-y-1">
              <span className="material-symbols-outlined">code</span>
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
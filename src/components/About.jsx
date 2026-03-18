const stats = [
  { value: '50+', label: 'Projects' },
  { value: '2k+', label: 'Commits' },
  { value: '100%', label: 'Reliable' },
]

export default function About() {
  return (
    <section className="py-32 bg-secondary px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Text */}
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-10 text-light-bg">
              Passionate about <br />
              <span className="text-white bg-accent mt-4 px-3 rounded-lg">problem solving</span>
            </h2>
            <p className="text-lg leading-relaxed text-text-dim font-medium mb-8">
              I am a self-driven developer with an insatiable curiosity for how things work.
              My journey is defined by a relentless pursuit of solving real-world problems through technology.
            </p>
            <p className="text-lg leading-relaxed text-text-dim font-medium mb-12">
              Currently focusing on deep integration of AI-driven logic within web apps and
              optimizing frontend performance for global audiences.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-primary p-6 rounded-xl text-center border border-white/5">
                  <span className="block text-3xl font-black text-accent">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-dim">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blob decoration */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] bg-accent/20 blur-[80px] rounded-full"></div>
            <svg className="relative z-10 w-96 h-96 text-accent opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.2,-0.9C83.4,13.8,76.3,27.7,68.4,40.1C60.5,52.5,51.8,63.4,40.4,71.2C29,79,14.5,83.7,-0.7,84.9C-15.9,86.1,-31.8,83.8,-45.1,77.1C-58.4,70.4,-69.1,59.3,-76.3,46.4C-83.5,33.5,-87.2,18.8,-86.7,4.3C-86.2,-10.2,-81.5,-24.5,-73.9,-37.2C-66.3,-49.9,-55.8,-61,-43.3,-68.8C-30.8,-76.6,-15.4,-81.1,0.4,-81.8C16.2,-82.5,32.4,-79.4,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
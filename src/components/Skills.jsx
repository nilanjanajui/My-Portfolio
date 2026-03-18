const skills = [
  {
    icon: 'code_blocks',
    title: 'Frontend',
    tags: [
      { name: 'React',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'JavaScript',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    icon: 'dns',
    title: 'Backend & DB',
    tags: [
      { name: 'Node.js',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Flask',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Python',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    icon: 'architecture',
    title: 'Core CS',
    tags: [
      { name: 'C++',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Bash',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ],
  },
  {
    icon: 'palette',
    title: 'UI/UX & Design',
    tags: [
      { name: 'Figma',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
      { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Illustrator',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
    ],
  },
  {
    icon: 'memory',
    title: 'Embedded & Systems',
    tags: [
      { name: 'Arduino',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
      { name: 'C++',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Linux',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
  {
    icon: 'construction',
    title: 'Tools',
    tags: [
      { name: 'Git',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Docker',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
]

const darkLogos = ['GitHub', 'Express', 'Flask', 'Bash', 'Next.js']

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-primary" id="skills">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-light-bg">Technical Toolkit</h2>
          <div className="h-1.5 w-24 bg-accent rounded-full mb-8"></div>
          <p className="text-text-dim max-w-2xl text-lg">
            A full-spectrum skill set — from pixel-perfect interfaces to normalized databases and embedded systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-secondary p-10 rounded-xl border border-white/5 shadow-sm hover:shadow-xl transition-all group"
            >
              {/* ✅ Original icon + title header — kept exactly as before */}
              <div className="flex items-center gap-4 mb-10">
                <div className="rounded-2xl bg-primary text-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-black/20 w-20 h-20">
                  <span className="material-symbols-outlined text-5xl">{skill.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-light-bg tracking-tight">{skill.title}</h3>
              </div>

              {/* ✅ Tech logos with names below */}
              <div className="flex flex-wrap gap-4">
                {skill.tags.map((tag) => (
                  <div key={tag.name} className="flex flex-col items-center gap-2 group/tag">
                    <div className="w-12 h-12 bg-primary/60 rounded-xl border border-white/5 flex items-center justify-center p-2.5 hover:border-accent/40 hover:bg-primary transition-all hover:scale-110 duration-200">
                      <img
                        src={tag.logo}
                        alt={tag.name}
                        className="w-full h-full object-contain"
                        style={
                          darkLogos.includes(tag.name)
                            ? { filter: 'invert(1) brightness(0.8)' }
                            : {}
                        }
                      />
                    </div>
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-wider group-hover/tag:text-accent transition-colors">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
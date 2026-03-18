const experiences = [
  {
    period: 'Ongoing',
    role: 'Full Stack Developer',
    description: 'Building modern web applications with React and Flask. Focused on responsive design, API development, frontend-backend integration, and scalable architectures.',
    highlights: ['Built ETL web app with Flask & React', 'Drag-and-drop DB normalization UI', 'REST API design & integration', 'Linux/Unix shell scripting workflows'],
  },
  {
    period: 'Academic',
    role: 'CSE Student · University of Chittagong',
    description: 'Studying Computer Science & Engineering with strong foundations in algorithms, OOP, operating systems, and database theory — applied directly in real-world projects.',
    highlights: ['Data Structures & Algorithms (C++)', 'Database normalization to 3NF', 'OS fundamentals & process management', 'Embedded systems with Arduino'],
  },
  {
    period: 'Hardware',
    role: 'Embedded Systems Developer',
    description: 'Developed a microcontroller-based alcohol detection and vehicle control system using sensors, GPS, GSM modules, and Arduino.',
    highlights: ['Arduino microcontroller programming', 'GPS & GSM module integration', 'Real-time sensor data processing', 'Hardware-software co-design'],
  },
]

export default function Experience() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">The Journey</h2>
          <div className="h-1.5 w-24 bg-accent rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.role} className="relative">
              <div className="absolute -left-8.75 sm:-left-12.75 top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-xl bg-accent border-4 border-primary"></div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-accent font-bold text-xs sm:text-sm tracking-widest uppercase">{exp.period}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-light-bg">{exp.role}</h3>
                <p className="text-text-dim text-base sm:text-lg leading-relaxed mt-2 sm:mt-4">{exp.description}</p>
                <ul className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 sm:gap-4 text-text-dim font-medium text-sm sm:text-base">
                      <span className="material-symbols-outlined text-accent text-lg sm:text-xl shrink-0">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
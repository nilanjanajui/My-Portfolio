const experiences = [
  {
    period: 'Ongoing',
    role: 'Full Stack Developer',
    description:
      'Building modern web applications with React, Next.js, Node.js, and Flask. Focused on responsive design, API development, frontend-backend integration, and scalable architectures.',
    highlights: [
      'Built ETL web app with Flask & React',
      'Drag-and-drop DB normalization UI',
      'REST API design & integration',
      'Linux/Unix shell scripting workflows',
    ],
  },
  {
    period: 'Academic',
    role: 'CSE Student · University of Chittagong',
    description:
      'Studying Computer Science & Engineering with strong foundations in algorithms, OOP, operating systems, and database theory — applied directly in real-world projects.',
    highlights: [
      'Data Structures & Algorithms (C++)',
      'Database normalization to 3NF',
      'OS fundamentals & process management',
      'Embedded systems with Arduino',
    ],
  },
  {
    period: 'Hardware',
    role: 'Embedded Systems Developer',
    description:
      'Developed a microcontroller-based alcohol detection and vehicle control system using sensors, GPS, GSM modules, and Arduino — building real-time logic and hardware-software integration skills.',
    highlights: [
      'Arduino microcontroller programming',
      'GPS & GSM module integration',
      'Real-time sensor data processing',
      'Hardware-software co-design',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-32 bg-primary px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-4xl font-black text-light-bg mb-4">The Journey</h2>
          <div className="h-1.5 w-24 bg-accent rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-white/10 pl-10 ml-4 space-y-16">
          {experiences.map((exp) => (
            <div key={exp.role} className="relative">
              <div className="absolute -left-12.75 top-0 w-6 h-6 rounded-xl bg-accent border-4 border-primary"></div>
              <div className="flex flex-col gap-3">
                <span className="text-accent font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                <h3 className="text-3xl font-black text-light-bg">{exp.role}</h3>
                <p className="text-text-dim text-lg leading-relaxed mt-4">{exp.description}</p>
                <ul className="mt-8 grid md:grid-cols-2 gap-6">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-text-dim font-medium">
                      <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
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
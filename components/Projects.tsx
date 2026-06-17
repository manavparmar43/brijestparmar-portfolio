const projects = [
  {
    name: "Full-Stack Web Application",
    type: "Internship Project",
    typeBadge: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    duration: "Jan 2025 – May 2025",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Bootstrap"],
    description:
      "A complete full-stack web application built during my internship at V-EX Tech Solution. Features user authentication with role-based access control and a dynamic dashboard for real-time data management.",
    features: [
      "User authentication and role-based access control for secure multi-user workflows",
      "RESTful API endpoints with Express.js connected to MongoDB Atlas for persistent storage",
      "Modular React architecture using Hooks (useState, useEffect) with third-party API integration",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Responsive Portfolio Website",
    type: "Personal Project",
    typeBadge: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    duration: "Personal Project",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "A fully responsive personal portfolio website built from scratch using core web technologies. Showcases projects and skills with smooth navigation, CSS animations, and cross-browser compatibility.",
    features: [
      "Fully responsive layout across all device sizes using Bootstrap grid system",
      "Smooth scroll navigation with CSS-powered section transitions and animations",
      "Cross-browser optimized for Chrome, Firefox, and Edge with consistent rendering",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12]">
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            — Projects
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          What I&apos;ve Built
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#13131f] rounded-2xl border border-violet-500/10 overflow-hidden hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col group"
            >
              {/* Top gradient line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-white font-bold text-base leading-tight group-hover:text-violet-300 transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap shrink-0 ${project.typeBadge}`}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Duration */}
                <p className="text-gray-600 text-xs mb-4">{project.duration}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#0d0d14] border border-white/5 text-gray-400 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-xs text-gray-500 leading-relaxed"
                    >
                      <span className="text-violet-500 shrink-0 mt-0.5">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bullets = [
  "Built responsive, reusable React.js UI components with cross-browser compatibility across Chrome, Firefox, and Edge.",
  "Integrated third-party RESTful APIs and developed Express.js backend endpoints to support dynamic frontend features.",
  "Designed MongoDB Atlas schemas, organized collections, and implemented full CRUD operations for data management.",
  "Delivered complete full-stack features end-to-end using HTML5, CSS3, Bootstrap, React, Node.js, and Express.",
  "Participated in Agile standups, sprint planning sessions, and conducted peer code reviews to maintain code quality.",
  "Debugged and optimized React components, identifying and eliminating unnecessary re-renders to improve performance.",
];

const techTags = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Bootstrap",
  "Agile",
];

const insights = [
  {
    icon: "🌐",
    title: "Real-world API Integration",
    desc: "Gained hands-on experience integrating production third-party APIs with proper error handling and async patterns.",
  },
  {
    icon: "🏃",
    title: "Agile Team Workflow",
    desc: "Experienced full sprint cycles — planning, daily standups, reviews — in a professional development environment.",
  },
  {
    icon: "🔧",
    title: "Full-Stack Feature Ownership",
    desc: "Owned features end-to-end from UI component to API route to database query with no hand-holding.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            — Experience
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          Where I&apos;ve Worked
        </h2>

        {/* Main Experience Card */}
        <div className="bg-[#13131f] rounded-2xl border-l-4 border-l-violet-500 border border-violet-500/10 p-7 mb-10 hover:border-violet-500/30 transition-all duration-300">
          {/* Card Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                V-EX Tech Solution Pvt Ltd
              </h3>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <span className="text-sm text-gray-300 font-medium">
                  Intern — MERN Stack Developer
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="text-xs text-gray-500">Ahmedabad, Gujarat</span>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold whitespace-nowrap">
              Jan 2025 – May 2025
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-5" />

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            {bullets.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="text-violet-500 mt-0.5 shrink-0">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What I Gained */}
        <h3 className="text-base font-semibold text-gray-400 uppercase tracking-widest mb-5">
          What I Gained
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="bg-[#13131f] rounded-xl p-5 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{insight.icon}</div>
              <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {insight.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

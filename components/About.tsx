const strengths = [
  {
    icon: "⚡",
    title: "Fast Learner",
    description:
      "Adapts quickly to new technologies, frameworks, and team workflows with minimal ramp-up time.",
  },
  {
    icon: "🧹",
    title: "Clean Code",
    description:
      "Writes readable, maintainable code with consistent naming conventions and modular structure.",
  },
  {
    icon: "🔍",
    title: "Strong Debugger",
    description:
      "Methodically traces issues through logs, devtools, and code flow to resolve bugs efficiently.",
  },
  {
    icon: "🤝",
    title: "Team Player",
    description:
      "Thrives in Agile teams — participates in standups, code reviews, and collaborative sprint planning.",
  },
  {
    icon: "🔗",
    title: "End-to-End Owner",
    description:
      "Takes full ownership of features from UI design through backend logic to database schema.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            — About Me
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          Who Am I?
        </h2>

        {/* Paragraphs */}
        <div className="space-y-5 text-gray-400 leading-relaxed text-base mb-14">
          <p>
            I&apos;m Brijesh Parmar, a 2025 B.E. graduate in Information Technology from
            Gujarat Technological University, based in Bhadaj, Ahmedabad. After completing
            my diploma from Sir B.P.T.I., Bhavnagar, I pursued my engineering degree with a
            focused interest in full-stack web development — specifically the MERN ecosystem.
          </p>
          <p>
            During my internship at{" "}
            <span className="text-violet-400 font-medium">V-EX Tech Solution Pvt Ltd</span>, I
            worked hands-on building React.js UI components, integrating RESTful APIs, developing
            Express.js backend routes, and managing MongoDB Atlas collections. I participated in
            real Agile sprints — standups, sprint planning, and peer code reviews — which gave me
            a strong sense of professional development workflows and team collaboration.
          </p>
          <p>
            I&apos;m passionate about writing clean, maintainable code and continuously exploring
            new web technologies. Beyond coding, I enjoy reading tech blogs, contributing to open
            source, and following developments in investment and finance. I&apos;m actively looking
            for my first full-time role where I can grow rapidly, contribute meaningfully, and
            build real-world products that matter.
          </p>
        </div>

        {/* Core Strengths */}
        <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">
          Core Strengths
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="bg-[#13131f] rounded-xl p-5 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10 group"
            >
              <div className="text-2xl mb-3">{strength.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-violet-300 transition-colors">
                {strength.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

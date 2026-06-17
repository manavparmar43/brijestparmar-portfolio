const education = [
  {
    degree: "B.E. — Information Technology",
    institution: "Gujarat Technological University",
    location: "Gujarat",
    year: "2022 – 2025",
    type: "Bachelor's Degree",
  },
  {
    degree: "Diploma — Information Technology",
    institution: "Sir B.P.T.I.",
    location: "Bhavnagar, Gujarat",
    year: "2018 – 2021",
    type: "Diploma",
  },
];

const certifications = [
  {
    name: "MERN Stack Development",
    issuer: "V-EX Tech Solution",
    borderColor: "border-l-violet-500",
    badgeColor: "bg-violet-500/10 text-violet-400",
    icon: "🏆",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Tops Technologies",
    borderColor: "border-l-amber-500",
    badgeColor: "bg-amber-500/10 text-amber-400",
    icon: "📜",
  },
  {
    name: "JavaScript Programming",
    issuer: "Udemy",
    borderColor: "border-l-green-500",
    badgeColor: "bg-green-500/10 text-green-400",
    icon: "✅",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            — Education & Certifications
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          Academic Background
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-[#13131f] rounded-xl p-6 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
              </div>

              <div className="relative">
                <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4 inline-block">
                  {edu.type}
                </span>
                <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                <p className="text-gray-600 text-xs mb-4">{edu.location}</p>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400 text-xs font-medium">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-base font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`bg-[#13131f] rounded-xl p-5 border-l-4 ${cert.borderColor} border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 group`}
            >
              <div className="text-xl mb-3">{cert.icon}</div>
              <h4 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors">
                {cert.name}
              </h4>
              <span
                className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${cert.badgeColor}`}
              >
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const lookingFor = [
  "Junior MERN Developer",
  "Full-Stack Intern → Full-time",
  "Remote / Hybrid",
  "Ahmedabad Based",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Open to Work Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Open to Work
        </div>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Together</span>
        </h2>

        <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-xl mx-auto">
          I&apos;m actively looking for my first full-time role as a MERN Stack Developer.
          If you&apos;re hiring or know someone who is, I&apos;d love to connect and chat about
          how I can contribute to your team.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {/* Email */}
          <a
            href="mailto:brijeshparmar5074@gmail.com"
            className="group bg-[#13131f] rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/15 block"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-violet-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-violet-300 transition-colors">
              Email
            </h3>
            <p className="text-gray-500 text-xs break-all">
              brijeshparmar5074@gmail.com
            </p>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="tel:+917777990719"
            className="group bg-[#13131f] rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10 block"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-green-300 transition-colors">
              Phone / WhatsApp
            </h3>
            <p className="text-gray-500 text-xs">+91 7777990719</p>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group bg-[#13131f] rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 block"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">
              LinkedIn
            </h3>
            <p className="text-gray-500 text-xs">Connect with me</p>
          </a>
        </div>

        {/* What I'm Looking For */}
        <div className="bg-[#13131f] rounded-2xl p-7 border border-violet-500/10">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
            What I&apos;m Looking For
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {lookingFor.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-medium hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-violet-500/10">
      <div className="max-w-4xl mx-auto">
        {/* Divider line */}
        <div className="section-divider mb-8">
          <div className="section-diamond" />
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Name & Title */}
          <div className="text-center">
            <p className="text-white font-semibold text-base tracking-tight">
              Brijesh Parmar
              <span className="text-gray-600 mx-2">·</span>
              <span className="text-violet-400">MERN Stack Developer</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Bhadaj, Ahmedabad, Gujarat, India
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:brijeshparmar5074@gmail.com"
              className="w-9 h-9 rounded-lg bg-[#13131f] border border-white/5 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
            </a>
            <a
              href="tel:+917777990719"
              className="w-9 h-9 rounded-lg bg-[#13131f] border border-white/5 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-500/30 transition-all duration-200"
              aria-label="Phone"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-[#13131f] border border-white/5 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-[#13131f] border border-white/5 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Copyright & built with */}
          <div className="text-center">
            <p className="text-gray-600 text-xs">
              &copy; 2025 Brijesh Parmar. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs mt-1">
              Built with{" "}
              <span className="text-violet-500/70">Next.js</span> &{" "}
              <span className="text-violet-500/70">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

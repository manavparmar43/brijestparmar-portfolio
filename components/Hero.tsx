"use client";

import { useEffect, useState } from "react";

const techBadges = ["React", "Node.js", "MongoDB", "Express"];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background subtle effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Work — MERN Stack Developer
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-5 tracking-tight">
              Building Modern Web Apps with the{" "}
              <span className="gradient-text">MERN Stack</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              I craft clean, scalable full-stack applications — from responsive
              React UIs to robust Express APIs and MongoDB-backed data layers.
              Fresh graduate, hands-on experience, ready to ship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:brijeshparmar5074@gmail.com"
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-sm hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/1KeP4f01vsUCtuB81mmC6aE_RLm-cDatJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl border border-violet-500/50 text-violet-300 font-semibold text-sm hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Tech Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                Stack
              </span>
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-[#13131f] border border-white/5 text-gray-300 text-xs font-medium hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column — BP Monogram Card */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-sm">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/40 to-purple-600/40 blur-lg glow-border-animated" />

              {/* Card */}
              <div className="relative bg-[#13131f] rounded-2xl border border-violet-500/30 p-8 text-center glow-border-animated">
                {/* BP Monogram */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 mx-auto mb-4">
                    <span className="gradient-text-violet text-6xl font-bold tracking-tighter leading-none">
                      BP
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-xl tracking-tight">
                    Brijesh Parmar
                  </h2>
                  <p className="text-violet-400 text-sm font-medium mt-1">
                    MERN Stack Developer
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mb-6" />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0d0d14] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold gradient-text-violet">1</div>
                    <div className="text-gray-400 text-xs mt-1">Company</div>
                  </div>
                  <div className="bg-[#0d0d14] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold gradient-text-violet">2+</div>
                    <div className="text-gray-400 text-xs mt-1">Projects</div>
                  </div>
                  <div className="bg-[#0d0d14] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold gradient-text">5mo</div>
                    <div className="text-gray-400 text-xs mt-1">Experience</div>
                  </div>
                  <div className="bg-[#0d0d14] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold gradient-text">2025</div>
                    <div className="text-gray-400 text-xs mt-1">Graduate</div>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-5 flex items-center justify-center gap-2 text-gray-500 text-xs">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Ahmedabad, Gujarat, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-violet-500/50 to-transparent" />
      </div>
    </section>
  );
}

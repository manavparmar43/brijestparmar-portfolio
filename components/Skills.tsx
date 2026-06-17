"use client";

import { useEffect, useRef, useState } from "react";

const skillTags = [
  { label: "React.js", color: "violet" },
  { label: "Node.js", color: "purple" },
  { label: "Express.js", color: "violet" },
  { label: "MongoDB", color: "amber" },
  { label: "JavaScript (ES6+)", color: "amber" },
  { label: "HTML5 / CSS3", color: "purple" },
  { label: "Bootstrap", color: "violet" },
  { label: "REST APIs", color: "purple" },
  { label: "Git & Version Control", color: "amber" },
  { label: "Agile / Scrum", color: "violet" },
];

const proficiencyBars = [
  { label: "React.js", percent: 80 },
  { label: "JavaScript (ES6+)", percent: 82 },
  { label: "Node.js / Express.js", percent: 75 },
  { label: "MongoDB", percent: 72 },
  { label: "HTML5 / CSS3", percent: 88 },
  { label: "Bootstrap", percent: 85 },
];

const colorMap = {
  violet: "bg-violet-500/10 border-violet-500/30 text-violet-300 hover:border-violet-400",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-300 hover:border-purple-400",
  amber: "bg-amber-500/10 border-amber-500/30 text-amber-300 hover:border-amber-400",
};

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12]">
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="section-divider mb-12">
          <div className="section-diamond" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">
            — Technical Skills
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          What I Work With
        </h2>

        {/* Tag Cloud */}
        <div className="flex flex-wrap gap-3 mb-16">
          {skillTags.map((tag) => (
            <span
              key={tag.label}
              className={`skill-tag px-4 py-2 rounded-lg border text-sm font-medium ${
                colorMap[tag.color as keyof typeof colorMap]
              } transition-all duration-200`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div ref={sectionRef}>
          <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">
            Proficiency
          </h3>
          <div className="space-y-5">
            {proficiencyBars.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300 font-medium">
                    {skill.label}
                  </span>
                  <span className="text-xs text-violet-400 font-semibold">
                    {skill.percent}%
                  </span>
                </div>
                <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${skill.percent}%` : "0%",
                      transitionDelay: animated ? "0.1s" : "0s",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

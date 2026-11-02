import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-5 sm:pb-7 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div className="mt-5">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-card relative overflow-hidden rounded-2xl p-5 sm:p-7 transition duration-300 hover:border-emerald-500/40"
            >
              {/* Header: Role, Company, Period, Type */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-4 sm:pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/80 text-emerald-400 shadow-md shadow-emerald-950/30">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </span>
                  {exp.type && (
                    <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-semibold text-emerald-300">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>

              {/* Summary Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                {exp.description}
              </p>

              {/* Key Responsibilities & Achievements */}
              <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Key Contributions &amp; Production Deliverables
                </h4>
                <ul className="mt-2.5 grid gap-2 sm:grid-cols-2 text-xs sm:text-[13px] text-slate-200">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-slate-800/80 pt-4">
                <span className="mr-2 text-xs font-semibold text-slate-400">
                  Core Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-emerald-400/50 hover:bg-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

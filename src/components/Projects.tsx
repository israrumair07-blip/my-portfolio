import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-5 sm:pb-7 scroll-mt-16 sm:scroll-mt-20">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="mt-5 grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card flex flex-col justify-between rounded-xl p-5 sm:p-6 transition duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/25"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                    {p.category}
                  </span>

                  {p.live ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 status-pulse" />
                      Live Demo
                    </span>
                  ) : (
                    <span className="rounded-full border border-slate-700/80 bg-slate-800/80 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-white">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {p.summary}
                </p>

                {/* Key Highlights */}
                <div className="mt-3 space-y-1.5">
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {p.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="mt-4 border-t border-slate-800/80 pt-3.5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[11px] font-medium text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-teal-400"
                    >
                      <span>Live Demo</span>
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

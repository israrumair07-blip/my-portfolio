import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-5 sm:pb-7 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>EDUCATION</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        {/* Education Grid */}
        <div className="mt-5 grid gap-4 sm:gap-5 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-card flex flex-col justify-between rounded-xl p-4 sm:p-5 transition duration-300 hover:border-emerald-500/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-300">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-lg border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

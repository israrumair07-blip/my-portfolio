import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 1:
        return (
          <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 2:
        return (
          <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-5 sm:pb-7 scroll-mt-16 sm:scroll-mt-20">
      {/* Subtle ambient blur */}
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Skills &amp; <span className="gradient-text">Core Technologies</span>
          </h2>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="mt-5 grid gap-4 sm:gap-5 md:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className="glass-card flex flex-col justify-between rounded-xl p-4 sm:p-5 transition duration-300 hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="rounded-md border border-slate-700/60 bg-slate-800/50 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                    {group.items.length} Technologies
                  </span>
                </div>

                <h3 className="mt-3 text-base sm:text-lg font-bold text-white">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {group.description}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="mt-3.5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-100 transition hover:border-emerald-400/50 hover:bg-slate-800"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {skill}
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

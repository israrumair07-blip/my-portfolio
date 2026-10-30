import { profile, stats } from "@/data/portfolio";

export default function About() {
  const corePrinciples = [
    {
      title: "Clean Architecture",
      description: "Dedicated service classes, lean controllers, and Form Request validation for maintainable code.",
    },
    {
      title: "Database Integrity",
      description: "Row-level locking and ACID transactions that prevent race conditions in high-concurrency workflows.",
    },
    {
      title: "Modern Full-Stack",
      description: "Seamlessly connecting dynamic React.js frontends with secured, high-throughput Laravel REST APIs.",
    },
    {
      title: "Containerized DevOps",
      description: "Dockerized environments ensuring identical, predictable execution across staging and production.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-5 sm:pb-7 scroll-mt-16 sm:scroll-mt-20">
      {/* Subtle ambient blur */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>ABOUT ME</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Passionate About Crafting <span className="gradient-text">Reliable, Scalable Systems</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left: Professional Story & Pillars */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              {profile.about}
            </p>

            {/* Principles / Pillars */}
            <div className="pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Core Strengths
              </h3>
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                {corePrinciples.map((item) => (
                  <div
                    key={item.title}
                    className="glass-card rounded-xl p-3.5 transition-all duration-200 hover:border-emerald-500/40"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Stats Cards */}
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card relative overflow-hidden rounded-xl p-3.5 sm:p-4 transition-all duration-200 hover:border-emerald-500/40"
              >
                <div className="flex items-baseline justify-between">
                  <div className="gradient-text text-2xl font-black tracking-tight sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-white">{s.label}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-slate-300">
                  {s.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

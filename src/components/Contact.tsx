import { profile } from "@/data/portfolio";
import ContactForm from "./ContactForm";

const WHATSAPP_NUMBER = profile.whatsappNumber || "923247694425";
const WHATSAPP_TEXT = profile.whatsappMessage || "Hi Umair, I saw your portfolio and I would like to discuss a project with you.";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 sm:px-6 pt-5 sm:pt-7 pb-12 sm:pb-16 scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
        </div>

        {/* 2-Column Contact Portal */}
        <div className="mt-5 grid gap-5 sm:gap-6 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Left Column: Direct Channels */}
          <div className="space-y-3.5">
            {/* Quick WhatsApp Action Card */}
            <div className="glass-card rounded-xl p-4 sm:p-5 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct WhatsApp</h3>
                  <p className="text-xs text-slate-300">Quick response for projects &amp; consultations</p>
                </div>
              </div>

              <div className="mt-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition duration-200 hover:bg-emerald-400"
                >
                  <span>Chat on WhatsApp</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Direct Channels List */}
            <div className="glass-card rounded-xl p-3.5 sm:p-4 space-y-2">
              {/* Email item */}
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-900/60 p-2.5 sm:p-3 transition hover:border-emerald-400/50 hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Email</div>
                    <div className="text-xs font-semibold text-white">{profile.email}</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">Send ↗</span>
              </a>

              {/* GitHub item */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-900/60 p-2.5 sm:p-3 transition hover:border-emerald-400/50 hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">GitHub</div>
                    <div className="text-xs font-semibold text-white">israrumair07-blip</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">View ↗</span>
              </a>

              {/* LinkedIn item */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-900/60 p-2.5 sm:p-3 transition hover:border-emerald-400/50 hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">LinkedIn</div>
                    <div className="text-xs font-semibold text-white">Umair Asrar</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">Connect ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card rounded-xl p-4 sm:p-5">
            <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
            <div className="mt-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

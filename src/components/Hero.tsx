"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Background dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        {/* Left Column: Introduction */}
        <div className="flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 status-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for work</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              {profile.name}
            </span>
          </h1>

          {/* Subheading / Profession */}
          <h2 className="mt-2 text-lg font-bold tracking-tight text-emerald-400 sm:text-2xl">
            {profile.title}
          </h2>

          {/* Descriptive Tagline - punchy and readable */}
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
            {profile.tagline}
          </p>

          {/* Core Tech Stack Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200">
            {["PHP 8+", "Laravel", "React.js", "MySQL", "Docker", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-slate-100 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition duration-200 hover:from-emerald-400 hover:to-teal-400"
            >
              <span>Explore My Work</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-5 py-2.5 sm:py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:border-emerald-400/60 hover:bg-slate-800"
            >
              <span>Get In Touch</span>
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>

            {/* Quick Copy Email Button */}
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2.5 sm:py-3 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:bg-slate-800/80 hover:text-white"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{profile.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Clean, Perfectly Framed Avatar */}
        <div className="relative mx-auto flex items-center justify-center">
          {/* Subtle Ambient Glow behind avatar */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl" />

          {/* Framed Card with smooth corners */}
          <div className="soft-float relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/90 p-2.5 shadow-2xl shadow-emerald-950/30">
            <div className="relative h-64 w-56 overflow-hidden rounded-2xl bg-slate-950 sm:h-80 sm:w-72">
              <Image
                src="/umair.jpg"
                alt="Umair Asrar - Laravel Developer"
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
